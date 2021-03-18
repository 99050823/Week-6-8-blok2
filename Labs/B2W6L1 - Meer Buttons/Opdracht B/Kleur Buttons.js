var container = document.getElementById("container");

container.style.backgroundColor = "gray"
container.style.marginLeft = "10cm";
container.style.marginRight = "10cm";
container.style.textAlign = "center";

function buttonsGen() {

    for (let i = 1; i < 31; i++) {
        var button = document.createElement('BUTTON');
        button.innerHTML = + i;
        container.appendChild(button);
        button.setAttribute("id", "buttons")

        button.style.fontSize = "40px"
        button.style.backgroundColor = "#05A400";
        button.style.height = "50px";
        button.style.width = "100px";
        button.style.margin = "5px";    
        button.style.border = "none";
    }

}
buttonsGen()
