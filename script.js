// Loading Screen
const loadingScreen = document.querySelector('.loading-screen');
const content = document.querySelector('.content');
const listItems = document.querySelectorAll('.loading-screen ul li');

function loadingAnimationComplete() {
  content.classList.add('show');
  loadingScreen.style.opacity = '0';
  loadingScreen.style.visibility = 'hidden';

}

listItems[listItems.length - 1].addEventListener('animationend', loadingAnimationComplete);


// Burger Button
let burgerBtn = document.querySelector('.hamburger--spring');
let burgerMenu = document.querySelector('.burger-menu');

let isBurgerOpen = false;

burgerBtn.addEventListener('click', function(){
  if (!isBurgerOpen) {
    burgerMenu.style.display = 'block';
    burgerBtn.classList.add('is-active');
    isBurgerOpen = true;
  } else {
    burgerMenu.style.display = 'none';
    burgerBtn.classList.remove('is-active');
    isBurgerOpen = false;
  }
});