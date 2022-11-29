let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
});

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
// };
