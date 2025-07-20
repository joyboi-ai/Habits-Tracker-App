# 🌟 Habits Tracker App  

A **React Native + Expo** based **Habits Tracker App** designed to help users organize tasks into categories, track progress, and stay motivated with timely notifications.  
The app features a **beautiful splash screen**, **typing animations**, and a **WebView integration** for an extended experience.

---

## 📂 Project Structure

.
├── app
│ ├── _layout.tsx # Navigation stack & status bar setup
│ ├── index.tsx # Welcome screen with typing effect & WebView
│ └── temp/ # Legacy vanilla JS/HTML logic for categories & tasks
│
├── assets
│ ├── images/ # Icons and splash screen images
│ ├── fonts/ # Custom fonts
│
├── android # Native Android project files (for building APK)
├── package.json # Dependencies & scripts
├── app.json # Expo configuration (icons, splash screen, etc.)
└── tsconfig.json # TypeScript configuration

markdown
Copy
Edit

---

## ✨ Features

### **👋 Welcome Screen**  
- Displays **app logo**, **name**, and a **typing effect** with motivational quotes.  
- A **"Continue" button** opens a **WebView** with an external site.

### **🔔 Push Notifications**  
- **Expo Notifications** schedules **motivational reminders**.  
- **Development Mode:** Sends notifications every minute (up to 5 times).  
- **Production:** Daily reminders to encourage habit tracking.

### **🌐 WebView Integration**  
- After the welcome screen, the app loads an **external web app** seamlessly via WebView.

### **📌 Category & Task Logic** (Legacy `app/temp`)  
- Predefined categories like **Personal**, **Work**, **Shopping**, **Coding**, etc.  
- Users can **add, delete, or complete tasks** (stored in localStorage in vanilla JS version).

---

## 🚀 How to Run

### **1. Install dependencies**
```bash
npm install
2. Start the app
bash
Copy
Edit
npx expo start
You can run it on Android Emulator, iOS Simulator, Expo Go, or web.

⚙ Customization
📝 Categories & Tasks: Modify app/temp for default categories or add new ones.

🎨 Icons & Branding: Replace files in assets/images/.

💬 Notification Messages: Update strings in app/index.tsx.

🛠 Tech Stack
<div align="center"> <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" /> <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Expo_Router-4630EB?style=for-the-badge&logo=react-router&logoColor=white" alt="expo-router" /> <img src="https://img.shields.io/badge/WebView-35495E?style=for-the-badge&logo=android&logoColor=white" alt="WebView" /> <img src="https://img.shields.io/badge/Expo_Notifications-FFCA28?style=for-the-badge&logo=google-cloud-messaging&logoColor=black" alt="Expo Notifications" /> </div>
📸 Screenshots (Add Later)
You can add screenshots of the Welcome Screen, WebView, and Notifications here.

🎥 Demo Video (Optional)
Add a YouTube video link of your app demo here with a clickable thumbnail.

🤝 Contributing
Contributions are always welcome!

Fork the repository

Create a feature branch: git checkout -b feature/NewFeature

Commit your changes: git commit -m 'Add NewFeature'

Push to your branch: git push origin feature/NewFeature

Submit a Pull Request

⭐ Support
If you find this project helpful, please give it a star ⭐ on GitHub.
It motivates me to improve and add more features!

📜 License
This project is licensed under the MIT License.
