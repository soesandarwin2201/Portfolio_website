const menuToggler = document.getElementById("toggle");
const navMenu = document.getElementById("mobile-floating-nav");
const closeBtn = document.getElementById("menu-close-btn");
let navItems = document.getElementsByClassName("mob-nav-item");

navItems = Array.prototype.slice.call(navItems);

menuToggler.addEventListener("click", () => {
  navMenu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.left = "-100%";
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.style.left = "-100%";
  });
});
