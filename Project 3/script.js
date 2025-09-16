let body = document.getElementsByClassName("body")

let removeBtn = document.getElementById("remove")


let circles = [];
document.addEventListener("click", (event) => {

    if (event.target == removeBtn) {
    
    }

    else {
        let circle = document.createElement("div")
        circle.classList.add('circle')

        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
        document.body.appendChild(circle)
        circles.push(circle);

    }

})
removeBtn.addEventListener("click", () => {

    if (circles.length > 0) {
        let element = circles.pop();
        element.remove();
    }
})
