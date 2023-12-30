const menu_div = document.querySelector('.menu-div');
const hamburgerBtn = document.getElementById('hamburger');

hamburgerBtn.addEventListener('click', (e) => {
    menu_div.classList.toggle('active-menu');
});