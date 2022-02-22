const menu = document.getElementById('menu')
const mobileNavButton = document.getElementById('mobile-nav-button')
mobileNavButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('open')
}