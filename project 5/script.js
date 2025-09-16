let container=document.getElementById("container")
let alphabet=document.getElementById("alphabet")
let h1=document.getElementById("display_text")

let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function disAlphabates(){
    let index=Math.floor(Math.random()*letters.length);
    h1.textContent = (letters[index]);
    
}


document.addEventListener("keydown",(event)=>{
    if(event.key==h1.textContent){
        alert("you won !!")
        disAlphabates();
    }
    else{
        alert("Sorry Try Again !!")
    }
})