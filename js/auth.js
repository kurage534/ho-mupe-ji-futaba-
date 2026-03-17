import { app } from "./firebase.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn) {

loginBtn.onclick = () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)
.then(()=>{

window.location="dashboard.html";

})
.catch((error)=>{

alert(error.message);

});

};

}

if (registerBtn) {

registerBtn.onclick = () => {

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)
.then(()=>{

alert("登録成功");

})
.catch((error)=>{

alert(error.message);

});

};

}

if (logoutBtn) {

logoutBtn.onclick = () => {

signOut(auth).then(()=>{

window.location="index.html";

});

};

}
