const form = document.getElementById("checkoutForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const country = document.getElementById("country");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let valid = true;

    // First Name
    if (firstName.value.trim() === "") {
        setError(firstName, "firstNameError", "First name is required");
        valid = false;
    } else if (firstName.value.trim().length < 3) {
        setError(firstName, "firstNameError", "At least 3 characters");
        valid = false;
    } else {
        setSuccess(firstName);
    }

    // Last Name
    if (lastName.value.trim() === "") {
        setError(lastName, "lastNameError", "Last name is required");
        valid = false;
    } else if (lastName.value.trim().length < 3) {
        setError(lastName, "lastNameError", "At least 3 characters");
        valid = false;
    } else {
        setSuccess(lastName);
    }

    // Address
    if (address.value.trim() === "") {
        setError(address, "addressError", "Address is required");
        valid = false;
    } else {
        setSuccess(address);
    }

    // Country
    if (country.value === "") {
        document.getElementById("countryError").innerText = "Select a country";
        country.classList.add("error");
        valid = false;
    } else {
        country.classList.remove("error");
        country.classList.add("success");
    }

    // State
    if (state.value === "") {
        document.getElementById("stateError").innerText = "Select a state";
        state.classList.add("error");
        valid = false;
    } else {
        state.classList.remove("error");
        state.classList.add("success");
    }

    // Zip Code
    if (zip.value.trim() === "") {
        setError(zip, "zipError", "Zip Code is required");
        valid = false;
    } else if (!/^[0-9]{5,6}$/.test(zip.value.trim())) {
        setError(zip, "zipError", "Invalid Zip Code");
        valid = false;
    } else {
        setSuccess(zip);
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        setError(email, "emailError", "Email is required");
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, "emailError", "Invalid Email");
        valid = false;
    } else {
        setSuccess(email);
    }

    // Phone
    const phonePattern = /^01[0125][0-9]{8}$/;

    if (phone.value.trim() === "") {
        setError(phone, "phoneError", "Phone is required");
        valid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
        setError(phone, "phoneError", "Invalid phone number");
        valid = false;
    } else {
        setSuccess(phone);
    }

    if (valid) {
        alert("Order Placed Successfully!");
        form.reset();

        document.querySelectorAll(".success").forEach(input => {
            input.classList.remove("success");
        });
    }

});

function setError(input, errorId, message) {

    input.classList.add("error");
    input.classList.remove("success");

    document.getElementById(errorId).innerText = message;

}

function setSuccess(input) {

    input.classList.remove("error");
    input.classList.add("success");

}

function clearErrors() {

    document.querySelectorAll(".text-danger").forEach(item => {
        item.innerText = "";
    });

    document.querySelectorAll(".form-control, .form-select").forEach(item => {
        item.classList.remove("error");
        item.classList.remove("success");
    });

}