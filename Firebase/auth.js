import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();

function register(){

const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,pass)
.then(()=>{
alert("登録成功");
})
.catch((error)=>{
alert(error.message);
});

}

function login(){

const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,pass)
.then(()=>{
location.href="dashboard.html";
})
.catch((error)=>{
alert("ログイン失敗");
});

}