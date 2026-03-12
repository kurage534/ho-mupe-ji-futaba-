import { getFirestore, collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const db = getFirestore();

async function post(){

const text = document.getElementById("text").value;

await addDoc(collection(db,"posts"),{
message:text,
date:new Date()
});

loadPosts();
}

async function loadPosts(){

const querySnapshot = await getDocs(collection(db,"posts"));

let html="";

querySnapshot.forEach((doc)=>{
html += "<div>"+doc.data().message+"</div>";
});

document.getElementById("posts").innerHTML = html;
}