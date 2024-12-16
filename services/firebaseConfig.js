import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.WEB_API_KEY,
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "dailymesstracker",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export default app;
