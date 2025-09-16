function changeColor(){
    document.getElementById("colorid").style.color=rendomColor();
}
function rendomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


changeColor();