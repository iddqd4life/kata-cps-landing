'use strict';

const overlayBlock = document.querySelector('.overlay');
const sidenavBlock = document.querySelector('.sidenav');
const sidebarRequestBlock = document.querySelector('.side-feedback');
const sidebarCallBlock = document.querySelector('.side-call');
const menuButton = document.querySelector('.round-button--menu');
const requestButtons = document.querySelectorAll('.round-button--request');
const phoneButtons = document.querySelectorAll('.round-button--phone');
const closeAll = document.querySelectorAll('.round-button--close');
const commercialButton = document.querySelector('.commercial-offer__button');

const addClickHandler = (e, func) => {
  e.addEventListener('click', func);
}

// by click on overlay
const clearAllSides = () => {
  overlayBlock.classList.remove('overlay--active');
  sidenavBlock.classList.remove('sidenav--active');
  sidebarRequestBlock.classList.remove('sidebar--active');
  sidebarCallBlock.classList.remove('sidebar--active');
}

const showNav = () => {
  clearAllSides();
  sidenavBlock.classList.add('sidenav--active');
  overlayBlock.classList.add('overlay--active');
}

const showRequest = () => {
  clearAllSides();
  sidebarRequestBlock.classList.add('sidebar--active');
  overlayBlock.classList.add('overlay--active');
}

const showCall = () => {
  clearAllSides();
  sidebarCallBlock.classList.add('sidebar--active');
  overlayBlock.classList.add('overlay--active');
}

document.addEventListener('DOMContentLoaded', () => {
  menuButton.addEventListener('click', showNav);
  overlayBlock.addEventListener('click', clearAllSides);

  closeAll.forEach((btn) => {
    addClickHandler(btn, clearAllSides);
  })

  requestButtons.forEach((btn) => {
    addClickHandler(btn, showRequest);
  })

  phoneButtons.forEach((btn) => {
    addClickHandler(btn, showCall);
  })

  commercialButton.addEventListener('click', showRequest);
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    clearAllSides();
  }
})
