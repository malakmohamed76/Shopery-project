
const rows = document.querySelectorAll(".cart-table__row");

rows.forEach(function (row) {
  const increaseBtn = row.querySelector("[data-qty-increase]");
  const decreaseBtn = row.querySelector("[data-qty-decrease]");
  const qty = row.querySelector("[data-qty-value]");
  const price = row.querySelector(".cart-table__price");
  const subtotal = row.querySelector("[data-row-subtotal]");

  const itemPrice = parseFloat(price.textContent.replace("$", ""));

  increaseBtn.onclick = function () {
    let quantity = parseInt(qty.textContent);

    quantity++;
    qty.textContent = quantity;

    subtotal.textContent = "$" + (itemPrice * quantity).toFixed(2);

    updateTotal();
  };

  decreaseBtn.onclick = function () {
    let quantity = parseInt(qty.textContent);

    if (quantity > 1) {
      quantity--;
      qty.textContent = quantity;

      subtotal.textContent = "$" + (itemPrice * quantity).toFixed(2);

      updateTotal();
    }
  };
});

function updateTotal() {
  let total = 0;

  document.querySelectorAll("[data-row-subtotal]").forEach(function (item) {
    total += parseFloat(item.textContent.replace("$", ""));
  });

  document.querySelector("[data-cart-subtotal]").textContent =
    "$" + total.toFixed(2);

  document.querySelector("[data-cart-grand-total]").textContent =
    "$" + total.toFixed(2);
}