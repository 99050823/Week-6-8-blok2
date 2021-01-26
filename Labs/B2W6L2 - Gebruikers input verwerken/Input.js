var namen = prompt("Hoeveel namen wilt u toevoegen?");

var inputValues = new Array();
for (var i = 0; i < namen; i++)
{
    inputValues.push(prompt('Enter the value'));

}

document.write(inputValues +"<br>");

