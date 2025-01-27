import { getLocalStorage } from "./utils.mjs";


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
    constructor(key, parentSelector) {
        this.key = key;
        this.parentSelector = parentSelector;
    }

    renderCartContents() {
      // Included an empty array when there is no cart item yet
      // Solve the problem of cart.html error when no cart item
        const cartItems = getLocalStorage(this.key) || [];
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    }
}
