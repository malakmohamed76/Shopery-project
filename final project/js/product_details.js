// -------------slide show --------------------------------------------

let images = [
  "images/3-Product Details Images_product image full.png",
  "images/3-Slide_1.png",
  "images/3-Slide_2.png",
  "images/3-Slide_3.png",
  "images/3-Slide_4.png",
];

let index = 0;

let mainImage = document.getElementById("mainImage");

document.getElementById("downBtn").onclick = function () {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  mainImage.src = images[index];
};

document.getElementById("upBtn").onclick = function () {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  mainImage.src = images[index];
};



// increase and decrease in the product details
let buttons = document.querySelectorAll(".qty-control__btn");
let value = document.querySelector(".qty-control__value");

buttons[1].onclick = function () {
  value.innerHTML++;
};

buttons[0].onclick = function () {
  if (value.innerHTML > 1) {
    value.innerHTML--;
  }
};
