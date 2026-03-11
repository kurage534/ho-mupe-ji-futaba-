// ログイン
function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "student" && pass === "1234"){
        localStorage.setItem("login","true");
        document.getElementById("loginArea").style.display="none";
        document.getElementById("boardArea").style.display="block";
    }else{
        alert("ユーザー名またはパスワードが違います");
    }
}

// ページ読み込み時
window.onload = function(){
    if(localStorage.getItem("login") === "true"){
        document.getElementById("loginArea").style.display="none";
        document.getElementById("boardArea").style.display="block";
    }
    loadPosts();
}

// 投稿
function addPost(){
    const text = document.getElementById("postText").value;

    if(text==="") return;

    let posts = JSON.parse(localStorage.getItem("posts") || "[]");

    posts.push(text);

    localStorage.setItem("posts",JSON.stringify(posts));

    document.getElementById("postText").value="";

    loadPosts();
}

// 投稿表示
function loadPosts(){
    let posts = JSON.parse(localStorage.getItem("posts") || "[]");

    let html="";

    posts.forEach(function(p){
        html += `<div class="post">${p}</div>`;
    });

    document.getElementById("posts").innerHTML = html;
}
