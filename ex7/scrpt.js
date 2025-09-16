let btn = document.getElementById("btn");
let name_data = document.getElementById("name");
let contact_data = document.getElementById("contact");
let email_data = document.getElementById("email");
let subject_data = document.getElementById("subject");
let message_data = document.getElementById("message");
let contact_form = document.getElementById("contact_form");

function myInformation() {
    console.log(name_data.value);
    console.log(contact_data.value);
    console.log(email_data.value);
    console.log(subject_data.value);
    console.log(message_data.value);
};

contact_form.addEventListener('submit', function (e) {
    e.preventDefault();
    myInformation();
})