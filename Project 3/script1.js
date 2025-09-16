let body = document.getElementsByClassName("body")

let removeBtn = document.getElementById("remove")
// let box=document.getElementsByClassName("box")
let select = document.getElementById("shapes")


let Shapes = [];
document.addEventListener("click", (event) => {

    let shapValue = select.value
    let shape = document.createElement("div")
    if (event.target == removeBtn ) {
    
    }
   
   else{

    if (shapValue == "square") {

        shape.classList.add('square')
        shape.style.left = event.clientX + 'px';
        shape.style.top = event.clientY + 'px';
        document.body.appendChild(shape)
       Shapes.push(shape);
         
    }

    else if (shapValue == "triangle") {

        shape.classList.add('triangle')
        shape.style.left = event.clientX + 'px';
        shape.style.top = event.clientY + 'px';
        document.body.appendChild(shape)
        Shapes.push(shape);
        
    }
    else if (shapValue == "circle") {

        shape.classList.add('circle')
        shape.style.left = event.clientX + 'px';
        shape.style.top = event.clientY + 'px';
        document.body.appendChild(shape)
        Shapes.push(shape);
        
    }
    else if (shapValue == "rectangle") {

        shape.classList.add('rectangle')
        shape.style.left = event.clientX + 'px';
        shape.style.top = event.clientY + 'px';
        document.body.appendChild(shape)
         Shapes.push(shape);
    }
    
    

   }
})
removeBtn.addEventListener("click", () => {

    if (Shapes.length > 0) {
        let element = Shapes.pop();
        element.remove();
    }
})