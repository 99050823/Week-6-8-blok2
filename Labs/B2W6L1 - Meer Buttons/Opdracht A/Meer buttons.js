var container = document.getElementById("container");

document.body.style.backgroundColor ="gray";

document.getElementById("container").style.textAlign = "center";
document.getElementById("container").style.backgroundColor = "white";
document.getElementById("container").style.marginLeft = "275px";
document.getElementById("container").style.marginRight = "275px";

var button1 = document.createElement("button");
document.getElementById("container").appendChild(button1);

var button2 = document.createElement("button");
document.getElementById("container").appendChild(button2);

var button3 = document.createElement("button");
document.getElementById("container").appendChild(button3);

button1.onclick = button1Click;
button2.onclick = button2Click;
button3.onclick = button3Click;

function button1Click () {
    document.body.style.backgroundColor = "#05A400";
}

function button2Click () {
    document.body.style.backgroundColor = "#FF0000";
}

function button3Click () {
    document.body.style.backgroundColor = "#0C05D4";
}

function buttons () {
    
    button1.innerHTML = "button 1";
    button1.style.backgroundColor = "#05A400";
    button1.style.height = "50px";
    button1.style.width = "200px";

    button2.innerHTML = "button 2";
    button2.style.backgroundColor = "#FF0000";
    button2.style.height = "50px";
    button2.style.width = "200px";  

    button3.innerHTML = "button 3";
    button3.style.backgroundColor = "#0C05D4";
    button3.style.height = "50px";
    button3.style.width = "200px";
}

buttons()