const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__burger-button');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu_active');
});