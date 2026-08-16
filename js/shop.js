// ================search====================
let searchInput = document.getElementById("searchInput");
let cards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {

    let searchValue = this.value.toLowerCase().trim();

    cards.forEach(function (card) {

        let productName = card.querySelector("h6").textContent.toLowerCase();

        let col = card.closest(".col");

        if (productName.includes(searchValue)) {
            col.style.display = "block";
        } else {
            col.style.display = "none";
        }

    });

});





// ==================model============


const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        document.getElementById("modalName").innerText =
        this.dataset.name;

        document.getElementById("modalPrice").innerText =
        this.dataset.price;

        document.getElementById("modalOldPrice").innerText =
        this.dataset.oldprice;

        document.getElementById("modalImg").src =
        this.dataset.img;

        document.getElementById("modalCategory").innerText =
        this.dataset.category;

        document.getElementById("modalDesc").innerText =
        this.dataset.desc;

    });

});