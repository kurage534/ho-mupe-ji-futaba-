import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

export const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};

export const app = initializeApp(firebaseConfig);