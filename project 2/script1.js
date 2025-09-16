let container = document.getElementById("container")
let catagorylist = document.getElementById("catagorylist")//select
let selectBtn = document.getElementById("select")


let outer = document.getElementsByClassName("outer")

let display = document.createElement("div")
let displayCat = document.createElement("div")
let displayItem = document.createElement("div")
let heading1 = document.createElement("span")
heading1.textContent = "catagory"
let heading2 = document.createElement("span")
heading2.textContent = "Items"
let catagory = document.createElement("div")

let selcat = document.createElement("span")
selcat.classList.add('catnm')

let addBtn = document.createElement("button")
addBtn.textContent = "Add Items"


let items = {
    "Electronics": ["fridge", "Tv", "Mobile"],
    "Faishon": ["Clothes", "Shoes", "Accesories"],
    "Students": ["Books", "stationary", "Laptop"],
    "Grocery": ["Milk", "Vegetable", "Snacks"],
};
let ul = document.createElement("ul")
let listitems = document.createElement("ul")


selectBtn.addEventListener("click", () => {
    container.append(display)
    display.classList.add('display')
    display.append(displayCat)
    displayCat.classList.add('cat')
    display.append(displayItem)
    displayItem.classList.add('item')
    displayCat.append(heading1)
    displayItem.append(heading2)
    heading1.append(selcat)
    heading2.after(ul)

   
    let catName = catagorylist.value
    selcat.textContent = catName



    let itemList = items[catName]
    for (let i = 0; i < itemList.length; i++) {
        let li = document.createElement("li");
        li.textContent = itemList[i]
        ul.appendChild(li)
        ul.after(addBtn)
    }
    catagorylist.selectedIndex = 0;
})

let input = document.createElement("input")
input.placeholder = "Add Items"
let check = document.createElement("input")
check.type="checkbox"

addBtn.addEventListener("click", () => {
    addBtn.after(listitems)

    let list = document.createElement("li")
    list.classList.add('flex')
    list.draggable = true;
    let editBtn = document.createElement("button")
    editBtn.textContent = "Add"
    let remBtn = document.createElement("button")
    remBtn.textContent = "Remove"
    let newItem=document.createElement("li");

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

    editBtn.addEventListener("click", () => {

        if (editBtn.textContent === "Add") {
            input.disabled = false
            editBtn.textContent = "save"
            let newval = input.value.trim()
            if (newval !== "") {
                input.value = newval
            }
        }
        else if (editBtn.textContent === "save") {
            input.disabled = true
            editBtn.textContent = "Add"
            
        }

        
          if(input.value!=="")
          {
            newItem.textContent=input.value;
            ul.append(newItem)
          };
          input.value=""
        
    })
    remBtn.addEventListener("click", () => {
        listitems.remove(list)
        ul.removeChild(newItem)


    })



    listitems.append(list)
    list.append(check)
    list.append(input)
    list.append(editBtn)
    list.append(remBtn)
    input.disabled = true
})

