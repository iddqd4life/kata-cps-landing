'use strict';

const anchorLinks = document.querySelectorAll('.anchor-link');

const addAnchorClickHandler = (anchor) => {
  anchor.addEventListener('click', (e) => {
    anchorLinks.forEach(link => {
      link.classList.remove('anchor-link--active');
    })
    e.target.classList.add('anchor-link--active');
  })
}

document.addEventListener('DOMContentLoaded', () => {
  anchorLinks.forEach(anchorLink => {
    addAnchorClickHandler(anchorLink);
  })
})
