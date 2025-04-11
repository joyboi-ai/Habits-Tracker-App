import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Linking,
  Alert,
  BackHandler,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import WebView from "react-native-webview";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export default function Index() {
  const [showWebView, setShowWebView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const names = ["name 1", "name 2", "name 3", "name 4"];

  useEffect(() => {
    const messages = [
      "Rise and grind! 💪 Your future self is counting on you!",
      "Small steps today, big success tomorrow! 🚀 Keep going!",
      "You are unstoppable! 💥 Crush your tasks now!",
      "Success is built daily! 📅 Stay focused and win!",
      "Great things take time! ⏳ Keep pushing forward!",
      "Your effort today shapes your future! Keep hustling! 🔥",
      "One step at a time, you're getting closer to your goal! 💯",
    ];

    const getRandomMessage = () =>
      messages[Math.floor(Math.random() * messages.length)];

    const registerForPushNotificationsAsync = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          Alert.alert("Permission required", "Please enable notifications in settings.");
        }
      }
    };

    const sendNotifications = async () => {
      await Notifications.cancelAllScheduledNotificationsAsync();

      if (__DEV__) {
        let count = 0;
        const interval = setInterval(() => {
          Notifications.presentNotificationAsync({
            title: "Reminder ✨",
            body: getRandomMessage(),
            data: { screen: "Index" },
          });
          count++;
          if (count >= 5) clearInterval(interval);
        }, 60000);
      } else {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Reminder ✨",
            body: getRandomMessage(),
            data: { screen: "Index" },
          },
          trigger: {
            hour: 23,
            minute: 33,
            repeats: true,
          },
        });
      }
    };

    registerForPushNotificationsAsync();
    sendNotifications();

    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to close this app?", [
        { text: "Cancel", onPress: () => null, style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);

  // Typing effect logic
  useEffect(() => {
    const currentName = names[currentNameIndex];
    if (charIndex < currentName.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentName.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, currentNameIndex]);

  return (
    <View style={styles.container}>
      {showWebView ? (
        <WebView
          source={{ uri: "https://alam198.github.io/app_dev/" }}
          onShouldStartLoadWithRequest={(event) => {
            if (event.url !== "https://example.com") {
              Linking.openURL(event.url);
              return false;
            }
            return true;
          }}
        />
      ) : (
        <View style={styles.welcomeScreen}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Habits Tracker</Text>
          {/* <Text style={styles.typingText}>{typedText}</Text> */}
          <TouchableOpacity style={styles.button} onPress={() => setShowWebView(true)}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  welcomeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 28,
    color: "dodgerblue", // ← CSS-style color name for future color changes 
    fontWeight: "600",
  }
  ,
  typingText: {
    fontSize: 25,
    color: "#007bff",
    marginBottom: 20,
    minHeight: 28,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
