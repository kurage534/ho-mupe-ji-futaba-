import { app } from "./firebase.js";

import { getAuth, onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
orderBy,
query
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const auth=getAuth(app);
const db=getFirestore(app);

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("user").innerText=user.email;
loadPosts();

}else{

location.href="index.html";

}

});

window.post=async function(){

const text=document.getElementById("text").value;

await addDoc(collection(db,"posts"),{

message:text,
date:new Date()

});

document.getElementById("text").value="";

loadPosts();

}

async function loadPosts(){

const q=query(collection(db,"posts"),orderBy("date","desc"));

const snapshot=await getDocs(q);

let html="";

snapshot.forEach(doc=>{

html+=`<div class="card">${doc.data().message}</div>`;

});

document.getElementById("posts").innerHTML=html;

}

window.logout=function(){

signOut(auth);

}