// ユーザー登録
function register(){

    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    if(user === "" || pass === ""){
        alert("入力してください");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if(users[user]){
        alert("そのユーザーは既に存在します");
        return;
    }

    users[user] = pass;

    localStorage.setItem("users", JSON.stringify(users));

    alert("登録しました！");
}


// ログイン
function login(){

    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if(users[user] && users[user] === pass){

        localStorage.setItem("loginUser",user);

        document.getElementById("loginArea").style.display="none";
        document.getElementById("boardArea").style.display="block";

        document.getElementById("welcome").innerText =
        "ようこそ " + user + " さん";

    }else{
        alert("ログイン失敗");
    }
}


// ページ読み込み
window.onload = function(){

    const user = localStorage.getItem("loginUser");

    if(user){
        document.getElementById("loginArea").style.display="none";
        document.getElementById("boardArea").style.display="block";

        document.getElementById("welcome").innerText =
        "ようこそ " + user + " さん";
    }

    loadPosts();
}


// 投稿
function addPost(){

    const text = document.getElementById("postText").value;

    const user = localStorage.getItem("loginUser");

    let posts = JSON.parse(localStorage.getItem("posts") || "[]");

    posts.push({
        name:user,
        message:text
    });

    localStorage.setItem("posts",JSON.stringify(posts));

    document.getElementById("postText").value="";

    loadPosts();
}


// 投稿表示
function loadPosts(){

    let posts = JSON.parse(localStorage.getItem("posts") || "[]");

    let html="";

    posts.forEach(function(p){

        html += `
        <div class="post">
        <b>${p.name}</b><br>
        ${p.message}
        </div>
        `;
    });

    document.getElementById("posts").innerHTML = html;
}


// ログアウト
function logout(){

    localStorage.removeItem("loginUser");

    location.reload();
}
