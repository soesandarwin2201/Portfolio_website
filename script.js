import projects from "./data.js";
const menuToggler = document.getElementById("toggle");
const navMenu = document.getElementById("mobile-floating-nav");
const closeBtn = document.getElementById("menu-close-btn");
let navItems = document.getElementsByClassName("mob-nav-item");

navItems = Array.prototype.slice.call(navItems);

const portfolioWrapper = document.querySelector(".portfoilio-wrapper");
const popupContainer = document.querySelector(".popup-container");
const popupBackground = document.getElementById("popup-backgound");
let popupBtns;

let btnId = [];

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

window.addEventListener("DOMContentLoaded", () => {
  displayProjects(projects);
  popupBtns = document.querySelectorAll(".popupBtn");

  popupBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btnId.includes(parseInt(e.target.dataset.id))) {
        let projectIndex = projects[parseInt(e.target.dataset.id) - 1];
        popupContainer.innerHTML = `
        <div data-id=${projectIndex.id}>
        <div class="popup-title">
            <div class="popup-info">
              <h2 class="project-name">${projectIndex.projectName}</h2>
              <p class="job">
                ${projectIndex.projectInfo}
                  </p>
            </div>
                  <i class="uil uil-multiply close-btn popup-btn"></i>
              </div>
              <div class="popup-img"><img src="${projectIndex.projectimg}" alt="popup project img" class="popimg"></div>
              <div class="pop-text">
                <p class="articel-context">
                    ${projectIndex.porjectDetail}
                  </p>
                  <div class="btn-popup">
                    <ul class="btns">
                    <li class="mini button">${projectIndex.techpopup[0]}</li>
                    <li class="mini button desktop">${projectIndex.techpopup[1]}</li>
                    <li class="mini button">${projectIndex.techpopup[2]}</li>
                    <li class="mini button">${projectIndex.techpopup[3]}</li>
                    <li class="mini button">${projectIndex.techpopup[4]}</li>
                    <li class="mini button">${projectIndex.techpopup[5]}</li>
                  </ul>
                  <button class="btn">${projectIndex.popupBtn1}</button>
                  <button class="btn">${projectIndex.popupBtn2}</button>
                  </div>
              </div>
            </div>
        `;
        popupBackground.style.transform = "translateX(0)";
      }
    });
  });
});

function displayProjects(projectItems) {
  let displayProject = projectItems.map((project) => {
    btnId.push(project.id);
    return `<article class="flexbox order-1">
            <img class="portfoilio-img desktop" src="${project.projectimg}" alt="project img">
            <img class="portfoilio-img mobile" src="${project.projectimg}" alt="project img">
            <div class="article-text">
              <h2 class="project-name">${project.projectName}</h2>
              <p class="job">
                ${project.projectInfo}
              </p>
              <p class="articel-context">
                ${project.porjectDetail}
              </p>
              <ul class="btns">
                <li class="mini button">${project.tech[0]}</li>
                <li class="mini button">${project.tech[1]}</li>
                <li class="mini button">${project.tech[2]}</li>
              </ul>
              <button data-id=${project.id} class="btn popupBtn">${project.projectBtn}</button>
            </div>
          </article>`;
  });

  displayProject = displayProject.join("");
  portfolioWrapper.innerHTML = displayProject;
}
