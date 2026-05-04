var addCartButtons = document.querySelectorAll(".add-cart");
var removeButtons = document.querySelectorAll(".remove-button");
var postButtons = document.querySelectorAll(".post-button");
var purchaseButton = document.querySelector(".purchase-button");
var trackButton = document.querySelector(".track-button");
var deliveryMessage = document.querySelector("#delivery-message");

function updateCartTotal() {
  var cartItems = document.querySelectorAll(".cart-item");
  var total = 0;

  for (var i = 0; i < cartItems.length; i++) {
    total = total + Number(cartItems[i].getAttribute("data-price"));
  }

  var totalBox = document.querySelector("#cart-total");

  if (totalBox) {
    totalBox.textContent = total.toFixed(2);
  }
}

for (var i = 0; i < addCartButtons.length; i++) {
  addCartButtons[i].addEventListener("click", function (event) {
    event.preventDefault();

    var itemName = this.getAttribute("data-item");
    alert(itemName + " was added to your cart.");
    window.location.href = "cart.html";
  });
}

for (var j = 0; j < removeButtons.length; j++) {
  removeButtons[j].addEventListener("click", function () {
    this.parentElement.remove();
    updateCartTotal();
  });
}

for (var k = 0; k < postButtons.length; k++) {
  postButtons[k].addEventListener("click", function () {
    var form = this.parentElement;
    var itemInput = form.querySelector("input[type='text']");

    if (itemInput.value === "") {
      alert("Please type an item name first.");
    } else {
      alert("Thanks! Your item was posted as a demo.");
      form.reset();
    }
  });
}

if (purchaseButton) {
  purchaseButton.addEventListener("click", function () {
    alert("Purchase complete! Opening your order page.");
  });
}

if (trackButton && deliveryMessage) {
  trackButton.addEventListener("click", function () {
    deliveryMessage.textContent = "Your order is currently shipped and on the way.";
  });
}
