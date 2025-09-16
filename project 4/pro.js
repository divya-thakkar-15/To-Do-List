let searchbar=document.getElementsByClassName("searchbar")
let search=document.getElementById("search")
let signup=document.getElementById("signup")

document.addEventListener("keydown",(event)=>{
    if(event.key==="/"){
        search.focus();
        event.preventDefault();
    }
    let box=document.createElement("div")
    box.classList.add('box')
    let content=document.createElement("span")
        content.textContent="key Press :" + event.key
        document.body.append(box)
        box.append(content)
    let code=document.createElement("span")
    code.textContent="key code :" + event.keyCode
    box.append(code)
})
document.addEventListener("keydown",(e)=>{
if(e.altKey && e.key=="s"){
        signup.click();
        e.preventDefault();
    }
})


