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

const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const errorContainer = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  if (form.elements.email.value.toLowerCase() === form.elements.email.value) {
    form.submit();
  } else {
    e.preventDefault();
    const message = document.createElement("p");
    message.innerText = "Your Email need to be in Lowercase.";
    errorContainer.append(message);
    errorContainer.style.opacity = 1;
  }
});
