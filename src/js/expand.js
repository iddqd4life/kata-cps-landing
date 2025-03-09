'use strict';

const introductionText = document.querySelector('.introduction__text');
const expandIntroductionButton = document.querySelector('.expand-button--introduction');
const expandIntroductionButtonText = expandIntroductionButton.querySelector('.expand-button__text');
const expandIntroductionButtonIcon = expandIntroductionButton.querySelector('.expand-button__arrows');

const brandsBlock = document.querySelector('.brands-block');
const expandBrandsButton = document.querySelector('.expand-button--brands');
const expandBrandsButtonText = expandBrandsButton.querySelector('.expand-button__text');
const expandBrandsButtonIcon = expandBrandsButton.querySelector('.expand-button__arrows');

const repairBlock = document.querySelector('.repair-block');
const expandRepairButton = document.querySelector('.expand-button--repair');
const expandRepairButtonText = expandRepairButton.querySelector('.expand-button__text');
const expandRepairButtonIcon = expandRepairButton.querySelector('.expand-button__arrows');


document.addEventListener('DOMContentLoaded', () => {
  expandIntroductionButton.addEventListener('click', () => {
    if (!introductionText.classList.contains('introduction__text--full')) {
      expandIntroductionButtonText.textContent = 'Свернуть';
    } else {
      expandIntroductionButtonText.textContent = 'Читать далее'
    }

    introductionText.classList.toggle('introduction__text--full');
    expandIntroductionButtonIcon.classList.toggle('expand-button__arrows--rotate');
  });

  expandBrandsButton.addEventListener('click', () => {
    if (!brandsBlock.classList.contains('cards-grid--full')) {
      expandBrandsButtonText.textContent = 'Свернуть';
    } else {
      expandBrandsButtonText.textContent = 'Показать все';
    }

    brandsBlock.classList.toggle('cards-grid--full');
    expandBrandsButtonIcon.classList.toggle('expand-button__arrows--rotate');
  })

  expandRepairButton.addEventListener('click', () => {
    if (!repairBlock.classList.contains('cards-grid--full')) {
      expandRepairButtonText.textContent = 'Свернуть';
    } else {
      expandRepairButtonText.textContent = 'Показать все';
    }

    repairBlock.classList.toggle('cards-grid--full');
    expandRepairButtonIcon.classList.toggle('expand-button__arrows--rotate');
  })
})
