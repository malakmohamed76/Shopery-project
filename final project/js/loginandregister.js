//////////////////////////////////// REGISTER ////////////////////////////////////

let registerBtn = document.querySelector("#sign-up");

if (registerBtn) {

    registerBtn.addEventListener("click", function (e) {

        e.preventDefault();

        let username = document.querySelector("#userName").value.trim();
        let email = document.querySelector("#email").value.trim();
        let password = document.querySelector("#password").value;

        // Username
        if (username === "") {
            alert("Username is required");
            document.querySelector("#userName").focus();
            return;
        }

        if (username.length < 3) {
            alert("Username must be at least 3 characters");
            document.querySelector("#userName").focus();
            return;
        }

        // Email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Email is required");
            document.querySelector("#email").focus();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email");
            document.querySelector("#email").focus();
            return;
        }

        // Password
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (password === "") {
            alert("Password is required");
            document.querySelector("#password").focus();
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("Password must be at least 8 characters and contain uppercase, lowercase and number");
            document.querySelector("#password").focus();
            return;
        }

        // Save Data
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");

        // Clear
        document.querySelector("#userName").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";

        // Go Login
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);

    });

}


//////////////////////////////////// LOGIN ////////////////////////////////////

let loginBtn = document.querySelector("#sign-in");

if (loginBtn) {

    loginBtn.addEventListener("click", function (e) {

        e.preventDefault();

        let email = document.querySelector("#email").value.trim();
        let password = document.querySelector("#password").value;

        let storedEmail = localStorage.getItem("email");
        let storedPassword = localStorage.getItem("password");

        // Email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Email is required");
            document.querySelector("#email").focus();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email");
            document.querySelector("#email").focus();
            return;
        }

        // Password
        if (password === "") {
            alert("Password is required");
            document.querySelector("#password").focus();
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            document.querySelector("#password").focus();
            return;
        }

        // Check Login
        if (storedEmail === email && storedPassword === password) {

            alert("Login Successful!");

            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";

            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);

        } else {

            alert("Email or Password is incorrect");

        }

    });

}