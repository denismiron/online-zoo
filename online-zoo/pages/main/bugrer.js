let menuBurger = document.querySelector('.wrapper-burger');
let menu = document.querySelector('.wrapper');
let menuIcon = document.querySelector('.icon-menu');

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
})