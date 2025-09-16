let button=document.getElementById("btn");
let item = document.createElement("li");
let remove=document.getElementById("rem");
let replace=document.getElementById("rep");
let num = document.createElement("li");
let list=document.getElementById("list");



item.innerHTML="<li>item4 </li>" ;
num.innerHTML="<li> new1 </li>";

button.addEventListener('click',()=>{
    list.append(item);
  

})
remove.addEventListener('click',()=>{
    item.remove(item);
})
replace.addEventListener('click',()=>{
 item.replaceWith(num);
})


