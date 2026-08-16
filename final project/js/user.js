// ======================================
// USER
// ======================================

let userInfo = document.querySelector("#user_info");
let userD = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {

    links.remove();

    userInfo.style.display = "flex";

    userD.innerHTML =
        `<i class="fa-solid fa-user"></i> <br>` +
        localStorage.getItem("username");
}


// ======================================
// LOGOUT
// ======================================

let logOutBtn = document.querySelector("#logout");

logOutBtn.addEventListener("click", function () {

    localStorage.clear();

    setTimeout(function () {
        window.location = "login.html";
    }, 1500);

});