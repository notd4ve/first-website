const menu = document.querySelector('mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
menu.classList.toogle('is-active');
menuLinks.classList.toogle('active');
}) 