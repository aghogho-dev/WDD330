import ProductData from "./ProductData.mjs"
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = "tents";
const dataSource = new ProductData(category);
const listElement = document.querySelector(".product-list");
const listing = new ProductListing(category, dataSource, listElement);

listing.init();



