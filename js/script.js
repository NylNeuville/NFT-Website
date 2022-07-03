const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');


// AJOUT DE LA CLASS MENU AU CLICK
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});