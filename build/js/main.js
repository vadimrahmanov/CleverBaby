'use strict';

var navigationButton = document.querySelector('.header__navigation-btn');
var navigation = document.querySelector('.header__navigation');
var navigationPhone = document.querySelector('.header__phone');

function init() {
  navigationButton.classList.remove('visually-hidden');
  navigation.classList.add('header__navigation--closed');
}

function activateNavigation() {
  navigationButton.classList.toggle('header__navigation-btn--opened');
  navigation.classList.toggle('header__navigation--opened');
  navigationPhone.classList.toggle('header__phone--opened');
}

navigationButton.addEventListener('click', activateNavigation);
window.onload = init;