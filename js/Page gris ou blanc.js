//page gris ou blanc
var colors = ["grey","white"];
var colorIndex = 0;
var text = ["white","black"];
var textIndex = 0;
function changeColor(){
    var col = document.getElementById("body");
    if(colorIndex >= colors.length) {
        colorIndex = 0;
    }
    if(textIndex >= text.length) {
        textIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex]
    col.style.color = text[textIndex]
    colorIndex++;
    textIndex++;
}