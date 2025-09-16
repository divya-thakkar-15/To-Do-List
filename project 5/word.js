let container = document.getElementById("container");
let box = document.getElementById("box")
let p = document.getElementById("word")
let items = document.getElementById("items")
let input=document.getElementById("input")
let check=document.getElementById("check")



let words = {
    "Colors": ["Pink", "White", "Black", "Purple"],
    "Fruits": ["Apple", "Banana", "Mango", "Litchi"],
    "Animal": ["Cow", "Zebra", "Dog", "Rabbit"],
    "Veges": ["Potato", "Tomato", "Onion"],
};

let inputWord = "";

function disWords() {

    let selItem = items.value
    let text = words[selItem];

     
    let index = Math.floor(Math.random() * text.length);
     p.textContent = (text[index]);
    
}

check.addEventListener("click",()=>{
    if(input.value===p.textContent){
        alert("right")
        disWords();
    }else{
        alert("Try again..!!")
    }
})

