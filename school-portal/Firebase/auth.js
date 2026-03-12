import { app } from "./firebase.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth(app);

window.register = function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("登録成功");
})
.catch((error)=>{
alert(error.message);
});

}

window.login = function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)
.then(()=>{
location.href="dashboard.html";
})
.catch(()=>{
alert("ログイン失敗");
});

}