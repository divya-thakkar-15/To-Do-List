let catagories = document.getElementById("selcat")//select
let add = document.getElementById("add")//add btn
let container = document.getElementById("input")//contentdiv
let displayCat = document.createElement("div")//display catagory
let displayItem=document.createElement("div")//display item list
let selItem=document.createElement("div")

let heading1=document.createElement("h3")
heading1.textContent="Catagory";
let heading2=document.createElement("h3")
heading2.textContent="Items";



let items={
   "Electronics" :["fridge","Tv","Mobile"],
   "Faishon" :["Clothes","Shoes","Accesories"],
   "Students" :["Books","stationary","Laptop"],
   "Grocery" :["Milk","Vegetable","Snacks"],
};


add.addEventListener("click", () => {

    displayCat.classList.add('inner');
    selItem.textContent=catagories.value
    displayItem.textContent=items[selItem.textContent]
    container.append(displayCat)
    displayCat.before(heading1)
   displayCat.append(selItem)
   displayItem.append(heading2)
   displayCat.append(displayItem)
})
