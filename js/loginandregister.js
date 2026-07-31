const wrapper =document.querySelector('.wrapper');
const registerLink= document.querySelector('.register-link');
const loginLink= document.querySelector('.login-link');

registerLink.onclick =( ) =>{
    wrapper.classList.add('active');

}

loginLink.onclick =( ) =>{
    wrapper.classList.remove('active');
    
}


///////////////////////////////////////////////////

// ========== REGISTER ==========
let regUsername = document.querySelector("#username");
let regEmail = document.querySelector("#email");
let regPassword = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (regUsername.value === "" || regEmail.value === "" || regPassword.value === "") {
        alert("Please fill all registration fields");
    } else {
        localStorage.setItem("username", regUsername.value.trim());
        localStorage.setItem("email", regEmail.value.trim());
        localStorage.setItem("password", regPassword.value);

        alert("Registration successful!");
        setTimeout(() => {
            document.querySelector(".login-link").click();
        }, 1000);
    }
});


// ========== LOGIN ==========
let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#sign_in");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (loginEmail.value === "" || loginPassword.value === "") {
        alert("Please fill all login fields");
    } else {
        if (
            storedEmail && storedPassword &&
            storedEmail.trim() === loginEmail.value.trim() &&
            storedPassword === loginPassword.value
        ) {
            alert("Login successful!");
            setTimeout(() => {
                window.location = "index.html";
            }, 1000);
        } else {
            alert("Email or password is incorrect");
        }
    }
});

