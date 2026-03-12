import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
 apiKey: "APIKEY",
 authDomain: "PROJECT.firebaseapp.com",
 projectId: "PROJECT",
};

export const app = initializeApp(firebaseConfig);