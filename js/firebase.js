// Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase設定（Firebaseコンソールからコピー）
const firebaseConfig = {
  apiKey: "AIzaSyDDB3cswJ9uRH_XiiS_M9BCD1-8M-VStK0",
  authDomain: "school-portal2-2ebc4.firebaseapp.com",
  projectId: "school-portal2-2ebc4",
  storageBucket: "school-portal2-2ebc4.firebasestorage.app",
  messagingSenderId: "141452998739",
  appId: "1:141452998739:web:309c7e88b7cf6d80dd2ea6"
};

// Firebase初期化
export const app = initializeApp(firebaseConfig);
