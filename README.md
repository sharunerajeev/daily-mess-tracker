# Daily Meal Tracker

An intuitive cross-platform mobile application designed to help users track daily meals and manage expenses for a mess. Built using React Native with Expo, Firebase for authentication and backend, and a structured modern design system. The app supports Android, iOS, and web platforms.

---

## Features
- **User Authentication**: Login and registration functionality using Firebase.
- **Daily Polls**: Users can select meal preferences for morning, afternoon, and night with a multi-select poll.
- **Expense Tracking**: View the total expense and a detailed history of daily expenses.
- **User Profile**: Manage and view personal details.
- **Notification System**: Get notified about updates or reminders.
- **Cross-Platform**: Supports Android, iOS, and web platforms with seamless functionality.

---

## Screenshots
(Add screenshots of the app here for better visualization.)

---

## Tech Stack
- **Frontend**: React Native with Expo Router
- **Backend**: Firebase (Authentication and Database)
- **Styling**: React Native StyleSheet
- **Navigation**: Expo Router with Tab Navigation
- **Deployment**: Expo EAS for Android, iOS, and Web

---

## Getting Started

### Prerequisites
1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
2. Install [Expo CLI](https://docs.expo.dev/get-started/installation/):
   ```bash
   npm install -g expo-cli
   ```
3. Install [EAS CLI](https://expo.dev/eas):
   ```bash
   npm install -g eas-cli
   ```
4. Create a Firebase project and download the configuration files:
   - `google-services.json` for Android
   - `GoogleService-Info.plist` for iOS

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/daily-meal-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd daily-meal-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add Firebase configuration files:
   - Place `google-services.json` in `android/app/`.
   - Place `GoogleService-Info.plist` in the `ios/` folder.
   - Update `app.json` with:
     ```json
     {
       "expo": {
         "android": {
           "googleServicesFile": "./android/app/google-services.json"
         },
         "ios": {
           "googleServicesFile": "./ios/GoogleService-Info.plist"
         }
       }
     }
     ```

### Running the Application
1. Start the development server:
   ```bash
   expo start
   ```
2. For Android:
   ```bash
   eas build --platform android
   ```
3. For iOS:
   ```bash
   eas build --platform ios
   ```
4. Open the app in your Expo Go app or install the built files on your device.

---

## Project Structure
```
app/
├── auth/               # Login and Register screens
├── (tabs)/             # Bottom tab navigation screens (Home, Poll, Expense, Profile)
├── components/         # Shared UI components
├── firebase/           # Firebase configuration and helper functions
├── assets/             # Images, icons, and static assets                  # Main entry point of the app
```

---

## Contribution Guide

We welcome contributions to enhance this project! Here's how you can get involved:

### Bug Reports & Feature Requests
- Open an issue on the GitHub repository with detailed information.

### Pull Requests
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request against the main repository.

### Areas for Contribution
- **UI/UX Improvements**: Enhance the design or add animations.
- **Features**: Add new features, such as advanced expense analytics.
- **Bug Fixes**: Solve issues or improve app performance.
- **Localization**: Add support for multiple languages.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
For any queries, feel free to contact:
- Email: sharunpublic@gmail.com
- GitHub: [sharunerajeev](https://github.com/sharunerajeev)

---

Happy coding! 🚀
