let btn = document.getElementById("btn");
let name_data = document.getElementById("name");
let price = document.getElementById("price");
let qty = document.getElementById("qty");
let items_form = document.getElementById("items_form");
let body = document.getElementById("body");
let container = document.getElementsByClassName("container")


function myInformation() {
    console.log(name_data.value);
    console.log(price.value);
    console.log(qty.value);
};

const table = document.getElementById("table");

items_form.addEventListener('submit', function (e) {
    e.preventDefault();
    addRow();
    function addRow() {

        const newRow = table.insertRow(-1); // Append to the end
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        let edit = document.createElement("button");
        newRow.append(edit)
        edit.textContent = "EDIT"
        let delbtn = document.createElement("button");
        newRow.append(delbtn)
        delbtn.textContent = "DELETE"
        cell1.textContent = name_data.value;
        cell2.textContent = price.value;
        cell3.textContent = qty.value;




        edit.addEventListener("click", () => {

            if (edit.textContent == "EDIT") {

                edit.textContent = "save"
                name_data.focus();
                price.focus();
                qty.focus();
            }
            else if (edit.textContent === "save") {
                let newnm = name_data.value.trim()
                cell1.textContent = newnm;
                let newPrice = price.value.trim()
                cell2.textContent = newPrice;
                let newQty = qty.value.trim()
                cell3.textContent = newQty;
                edit.textContent = "EDIT"

            }
            name_data.value=""
            price.value=""
            qty.value=""


        })
         delbtn.addEventListener("click", () => {
            newRow.remove(cell1)
        })     
    }
    
})

