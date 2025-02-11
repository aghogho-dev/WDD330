import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();

window.addEventListener("pageshow", () => {
    loadHeaderFooter();
  });


const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur",
    myCheckout.calculateOrdertotal.bind(myCheckout)
  );

document.querySelector("#checkoutSubmit").addEventListener(
  "click", (e) => {
    e.preventDefault();

    myCheckout.checkout();
  }
);
