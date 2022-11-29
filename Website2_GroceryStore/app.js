let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");

  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
// };

// shopping cart box
let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");

// toggle the shopping cart box visibility
cartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");

  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// login form box
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");

// toggle the shopping cart box visibility
loginBtn.addEventListener("click", function () {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");

  navbar.classList.remove("active");
});

// menu button box
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

// toggle the shopping cart box visibility
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
});

window.addEventListener("onscroll", function () {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});
