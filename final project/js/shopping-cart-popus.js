
const drawer = document.querySelector(".cart-drawer");
const cartBtn = document.getElementById("cartBtn");
const closeBtn = document.querySelector(".cart-drawer__close");
const overlay = document.querySelector(".cart-drawer__overlay");

if (drawer && cartBtn && closeBtn && overlay) {

  function openDrawer() {
    drawer.classList.add("is-open");
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
  }

  cartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openDrawer();
  });

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
}