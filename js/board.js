import { app } from "./firebase.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(app);

const postBtn = document.getElementById("postBtn");
const messageInput = document.getElementById("message");
const board = document.getElementById("board");

if(postBtn){

postBtn.onclick = async () => {

const message = messageInput.value;

if(message==="") return;

await addDoc(collection(db,"posts"),{
message:message
});

messageInput.value="";

loadPosts();

};

}

async function loadPosts(){

if(!board) return;

board.innerHTML="";

const querySnapshot = await getDocs(collection(db,"posts"));

querySnapshot.forEach((doc)=>{

const data = doc.data();

const div = document.createElement("div");

div.className="post";

div.innerText=data.message;

board.appendChild(div);

});

}

loadPosts();
