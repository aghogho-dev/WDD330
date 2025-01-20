import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs"

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();


// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }

// add to cart button event handler
async function addToCartHandler(e) {
  const productById = await dataSource.findProductById(e.target.dataset.id);
  product.addToCart(productById);
}

// add listener to Add to Cart button
window.onload = () => {
  document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
};
