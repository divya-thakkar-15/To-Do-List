let title=document.getElementById("title");
let red = document.getElementById("red");
let colors=document.getElementsByClassName("color");



function changeColor(){
for(let color of colors){
    console.log(color);
    // title.style.Color=this.id;  
        }
}
function handelColor(color){
    color.addEventListener('change',function(){
        if(this.checked){
            
            changeColor();  
            title.style.color=this.id; 
        }
        
    });
}

handelColor(red);
handelColor(blue);
handelColor(yellow);

let items=document.getElementsByClassName("style");
        
function handelStyle(style){
    style.addEventListener('change',function(){
        if(this.checked){
            // changeStyle();
            title.style.fontWeight=this.id;
            title.style.fontStyle=this.id;
            title.style.textDecoration=this.id;
        }
    });
}

// function changeStyle(){
// for(let item of items){
//         }
// }

handelStyle(bold);
handelStyle(italic);
handelStyle(underline);