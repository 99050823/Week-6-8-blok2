var container = document.getElementById("container");
var aantalButtons = 1;

container.style.textAlign = "center";

function buttons () {
    var button = document.createElement("button");
    document.getElementById("container").appendChild(button);

    button.innerHTML = "1";
    button.style.backgroundColor = "#05A400";
    button.style.height = "50px";
    button.style.width = "100px";
}

buttons()