const menuToggler = document.getElementById('toggle');
const navMenu = document.getElementById('mobile-floating-nav');
const closeBtn = document.getElementById('menu-close-btn');
let navItems = document.getElementsByClassName('mob-nav-item');

navItems = Array.prototype.slice.call(navItems);

projects = [
  {
    id: 1,
    projectName: 'Tonic',
    projectInfo: 'CANOPY . Back End Dev .2015',
    projectimg: './images/Snapshoot Portfolio.svg',
    porjectDetail:
      'A Daily Selection Of Privately Personalized Reads; No Accounts Or Sign-Ups Required.',
    tech: ['html', 'Css', 'Javascript'],
    techpopup: ['html', 'Css', 'Javascript', 'Github', 'ruby', 'Bootstraps'],
    projectBtn: 'See project',
    popupBtn1: 'See Live',
    popupBtn2: 'See Source',
  },
  {
    id: 2,
    projectName: 'Muti-post Stories',
    projectInfo: 'FACEBOOK . Full Stack Dev .2015',
    projectimg: './images/Snapshoot Portfolio1.svg',
    porjectDetail:
      'Experimental Content Creation Feature That Allows Users To Add To An Existing Story Over The Course Of A Day Without Spamming Their Friends.',
    tech: ['html', 'Ruby On Rails', 'Css', 'Javascript'],
    projectBtn: 'See project',
    techpopup: ['html', 'Css', 'Javascript', 'Github', 'ruby', 'Bootstraps'],
    projectBtn: 'See project',
    popupBtn1: 'See Live',
    popupBtn2: 'See Source',
  },
  {
    id: 3,
    projectName: 'Facebook 360',
    projectInfo: 'Facebook . Full Stack Dev .2015',
    projectimg: './images/Snapshoot human.svg',
    porjectDetail:
      'A Daily Selection Of Privately Personalized Reads; No Accounts Or Sign-Ups Required.',
    tech: ['html', 'Ruby on rails', 'Css', 'Javascript'],
    projectBtn: 'See project',
    techpopup: ['html', 'Css', 'Javascript', 'Github', 'ruby', 'Bootstraps'],
    projectBtn: 'See project',
    popupBtn1: 'See Live',
    popupBtn2: 'See Source',
  },
  {
    id: 4,
    projectName: 'Uber Navigation',
    projectInfo: 'Uber . Lead Developer .2018',
    projectimg: './images/Snapshoot Portfolio2.svg',
    porjectDetail:
      'A Smart Assistant To Make Driving More Safe, Efficient, And Fun By Unlocking Your Most Expensive Computer: Your Car.',
    tech: ['html', 'Ruby On rails', 'Css', 'Javascript'],
    projectBtn: 'See project',
    techpopup: ['html', 'Css', 'Javascript', 'Github', 'ruby', 'Bootstraps'],
    projectBtn: 'See project',
    popupBtn1: 'See Live',
    popupBtn2: 'See Source',
  },
];

const portfolioWrapper = document.querySelector('.portfoilio-wrapper');
const popupContainer = document.querySelector('.popup-container');
const popupBtns = document.querySelectorAll('.popupBtn');

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
  displayPopupCards(projects);
});

popupBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const popupId = e.currentTarget.dataset.id;
    const popCard = projects.filter((card) => {
      if (popCard.id === popupId) {
        return card;
      }
    });
    if (popCard.id === popupId) {
      //&& popupContainer.classList.contains
      displayPopupCards(card);
    } else {
      displayProjects(projects);
    }
  });
});

function displayProjects(projectItems) {
  let displayProject = projectItems.map((project) => {
    return `<article class="flexbox order-1" data-id=${project.id}>
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
              <button class="btn popupBtn">${project.projectBtn}</button>
            </div>
          </article>`;
  });

  displayProject = displayProject.join('');
  portfolioWrapper.innerHTML = displayProject;
}

function displayPopupCards(popCard) {
  let displayPopupCards = popCard.map((item) => {
    return `<div class="popup-title">
         <div class="popup-info">
          <h2 class="project-name">${item.projectName}</h2>
          <p class="job">
            ${item.projectInfo}
              </p>
         </div>
              <i class="uil uil-multiply close-btn popup-btn"></i>
          </div>
          <div class="popup-img"><img src="${item.projectimg}" alt="popup project img" class="popimg"></div>
          <div class="pop-text">
            <p class="articel-context">
                ${item.porjectDetail}
              </p>
              <div class="btn-popup">
                <ul class="btns">
                <li class="mini button">${item.techpopup[0]}</li>
                <li class="mini button desktop">${item.techpopup[1]}</li>
                <li class="mini button">${item.techpopup[2]}</li>
                <li class="mini button">${item.techpopup[3]}</li>
                <li class="mini button">${item.techpopup[4]}</li>
                <li class="mini button">${item.techpopup[5]}</li>
              </ul>
              <button class="btn">${item.popupBtn1}</button>
              <button class="btn">${item.popupBtn2}</button>
              </div>
          </div>`;
  });

  displayPopupCards = displayPopupCards.join('');
  popupContainer.innerHTML = displayPopupCards;
}
