import projects from './data.js';

const menuToggler = document.getElementById('toggle');
const navMenu = document.getElementById('mobile-floating-nav');
const closeBtn = document.getElementById('menu-close-btn');
let navItems = document.getElementsByClassName('mob-nav-item');

navItems = Array.prototype.slice.call(navItems);

const portfolioWrapper = document.querySelector('.portfoilio-wrapper');
const popupContainer = document.querySelector('.popup-container');
const popupBackground = document.getElementById('popup-background');
let popupBtns;

const btnId = [];

menuToggler.addEventListener('click', () => {
  navMenu.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.left = '-100%';
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.style.left = '-100%';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  displayProjects(projects);
  popupBtns = document.querySelectorAll('.popupBtn');

  popupBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (btnId.includes(parseInt(e.target.dataset.id))) {
        const projectIndex = projects[parseInt(e.target.dataset.id) - 1];
        popupContainer.innerHTML = `
        <div data-id=${projectIndex.id}>
        <div class="popup-title">
            <div class="popup-info">
              <h2 class="project-name">${projectIndex.projectName}</h2>
              <p class="job">
                ${projectIndex.projectInfo}
                  </p>
            </div>
                  <i class="uil uil-multiply close-btn" id = "popup-btn"></i>
              </div>
              <img src="${projectIndex.projectimg}" alt="popup project img" class="popimg">
              <div class="pop-text">
                <p class="articel-context-popup">
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
                  <button class="btn">${projectIndex.popupBtn1} <img src="./images/Icon.svg" alt="live icon"></button>
                  <button class="btn">${projectIndex.popupBtn2} <img src="./images/Vector (2).svg" alt="github icon"></button>
                  </div>
              </div>
            </div>
        `;
        popupBackground.style.transform = 'translateX(0)';
      }
      const popupBtn = document.getElementById('popup-btn');
      popupBtn.addEventListener('click', () => {
        popupBackground.style.transform = 'translateX(-100%)';
      });
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

  displayProject = displayProject.join('');
  portfolioWrapper.innerHTML = displayProject;
}

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const errorContainer = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  if (form.elements.email.value.toLowerCase() === form.elements.email.value) {
    form.submit();
  } else {
    e.preventDefault();
    const message = document.createElement('p');
    message.innerText = 'Your Email need to be in Lowercase.';
    errorContainer.append(message);
    errorContainer.style.opacity = 1;
  }
});

const name = document.getElementById('name');
const message = document.getElementById('textarea');

form.addEventListener('input', () => {
  const formData = {
    userName: form.elements.name.value,
    userEmail: form.elements.email.value,
    userMessage: form.elements.textarea.value,
  };

  localStorage.setItem('UserStoreData', JSON.stringify(formData));

  console.log(form.elements.name.value);
});

const getData = JSON.parse(localStorage.getItem('formData'));
form.elements.name.value = getData.userName;
form.elements.email.value = getData.userEmail;
form.elements.textarea.value = getData.userMessage;


