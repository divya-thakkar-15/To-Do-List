let input_task = document.getElementById("taskInput")
let add = document.getElementById("add")
let clear = document.getElementById("clear")
let listitems = document.getElementById("listitems")


    
add.addEventListener("click", () => {
    let text = input_task.value.trim()
    // console.log(text);
    let list = document.createElement("li")
    list.draggable=true;
    let input = document.createElement("input")
    let remove = document.createElement("button")
    remove.textContent = "delete"
    let edit = document.createElement("button")
    edit.textContent = "Edit"
    let check=document.createElement("input")
    check.type="checkbox"
    list.style.backgroundColor="green"
      list.style.color="white"
      
      function sortList(){
        let items=Array.from(listitems.children);
        items.sort((x,y)=>{
            let xChecked=x.querySelector("input[type=checkbox]").checked;
            let yChecked=y.querySelector("input[type=checkbox]").checked;
            return xChecked-yChecked;
        });
        items.forEach(item=>
            listitems.appendChild(item)
        );
    }
    check.addEventListener("change",()=>{

        sortList();
        if(check.checked){
        list.style.backgroundColor="red"
        list.style.color="white"
       }
      else{
        list.style.backgroundColor="green"
      list.style.color="white"
      
       }

    });

    remove.addEventListener("click", () => {
        listitems.removeChild(list)

    })
    edit.addEventListener("click", () => {

        if (edit.textContent === "Edit") {
            input.disabled = false
            edit.textContent = "save"
            let newval = input.value.trim()
            if (newval !== "") {
                input.value = newval
            }
        }
        else if (edit.textContent === "save") {
            input.disabled = true
            edit.textContent = "Edit"
            
        }
    })
    clear.addEventListener("click", () => {
        listitems.remove(list)
    })

    input.value = text  
    list.append(check)
    list.append(input)
    list.append(edit)
    list.append(remove)
    listitems.append(list)
    input.disabled = true
    input_task.value = ""
})



