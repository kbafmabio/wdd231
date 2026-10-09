const navButton = document.querySelector('#ham-button');

const navbar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navbar.classList.toggle('show');
});