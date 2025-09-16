// function getrandomcolor(){
//     var letters= '0123456789ABCDEF';
//     var color='#';
//     for(var i=0; i<6; i++){
//         color += letters[Math.floor(Math.random()*16)];

//     }
//     return color
// }
// function setrendomcolor(){
//     $("#colorpad").css("background-color",getrandomcolor());
// }
let button=document.getElementById("btn");

let getColor=()=>{
    let randomNumber=Math.floor(Math.random()*16777215);
    let randomColor="#"+randomNumber.toString(16);
    button.style.color=randomColor;
}

document.getElementById("btn").addEventListener('click',getColor)