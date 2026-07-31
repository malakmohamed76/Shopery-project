const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let valid = true;

    if (nameInput.value.trim() === "") {

        setError(nameInput, "nameError", "Name is required");
        valid = false;

    }
    else if (nameInput.value.trim().length < 3) {

        setError(nameInput, "nameError", "Name must be at least 3 characters");
        valid = false;

    }
    else{

        setSuccess(nameInput);

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailInput.value.trim()==""){

        setError(emailInput,"emailError","Email is required");
        valid=false;

    }

    else if(!emailPattern.test(emailInput.value.trim())){

        setError(emailInput,"emailError","Invalid Email");
        valid=false;

    }

    else{

        setSuccess(emailInput);

    }

    if(subjectInput.value.trim()==""){

        setError(subjectInput,"subjectError","Subject is required");
        valid=false;

    }

    else{

        setSuccess(subjectInput);

    }

    if(messageInput.value.trim()==""){

        setError(messageInput,"messageError","Message is required");
        valid=false;

    }

    else if(messageInput.value.trim().length<10){

        setError(messageInput,"messageError","Message must be at least 10 characters");
        valid=false;

    }

    else{

        setSuccess(messageInput);

    }

    if(valid){

        alert("Message Sent Successfully");

        form.reset();

        document.querySelectorAll(".form-control").forEach(function(input){

            input.classList.remove("success");

        });

    }

});

function setError(input,id,message){

    input.classList.add("error");

    input.classList.remove("success");

    document.getElementById(id).innerText=message;

}

function setSuccess(input){

    input.classList.remove("error");

    input.classList.add("success");

}

function clearErrors(){

    document.querySelectorAll("small").forEach(function(item){

        item.innerText="";

    });

    document.querySelectorAll(".form-control").forEach(function(input){

        input.classList.remove("error");

    });

}

