// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
//toggle class active
const navbartroli = document.querySelector(".navbar-troli");
// ketika shopping cart di click
document.querySelector("#shopping-cart").onclick = () => {
  navbartroli.classList.toggle("active");
};

// klik for close
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
// klik for close
const shopping = document.querySelector("#shopping-cart");

 document.addEventListener("click", function (e) {
  if (!shopping.contains(e.target) && !navbartroli.contains(e.target)) {
    navbartroli.classList.remove("active");
  }
 });