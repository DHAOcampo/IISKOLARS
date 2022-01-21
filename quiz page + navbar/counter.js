let button1 = localStorage.getItem("button1");
let button2 = localStorage.getItem("button2");
button1 = "try again";
button2 = "finished";
document.getElementById("finished").innerHTML = button1;
document.getElementById("finish").innerHTML = button2;
localStorage.setItem("button1", button1);
localStorage.setItem("button2", button2);