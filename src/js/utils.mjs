// wrapper for querySelector...returns matching element
export default function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  // let cart = getLocalStorage(key) || [];
  // console.log(cart);
  // cart.push(data);
  // localStorage.setItem(key, JSON.stringify(cart));

  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// Function to list objects 
export function renderListWithTemplate(
  templateFn, 
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn)

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


// Function with template
export function renderWithTemplate(template, parentElement, data, callback) {

  parentElement.insertAdjacentHTML("afterbegin", template);

  if (callback) {
    callback(data);
  }

}

async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#headerElement");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#footerElement");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}