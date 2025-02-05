import ShoppingCart from "./ShoppingCart.mjs";
import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");


cart.renderCartContents();

// Hide total price is it is zero

document.addEventListener("DOMContentLoaded", () => {
    const cartFooter = document.querySelector(".cart-footer-hide");
    const totalPrice = parseFloat(document.querySelector(".cart-total").textContent.split("$")[1]);

    console.log(cartFooter, totalPrice);


    if (totalPrice > 0) {
    cartFooter.removeAttribute("hidden");
    } else {
    cartFooter.setAttribute("hidden", "true");
    }

})





