import { app } from "./firebase.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const db = getFirestore(app);

const postBtn = document.getElementById("postBtn");
const messageInput = document.getElementById("message");
const board = document.getElementById("board");

// 投稿
postBtn.addEventListener("click", async () => {

  const message = messageInput.value;

  if(message === "") return;

  await addDoc(collection(db, "posts"), {
    message: message
  });

  messageInput.value = "";

  loadPosts();

});

// 投稿読み込み
async function loadPosts(){

  board.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    const div = document.createElement("div");
    div.className = "post";

    div.innerText = data.message;

    board.appendChild(div);

  });

}

loadPosts();
