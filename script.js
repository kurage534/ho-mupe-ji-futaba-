function showNews(title, message){
    alert(title + "\n\n" + message);
}

function showTime(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("time").textContent = "現在の時刻: " + time;
}

setInterval(showTime,1000);