// declaration variable
//const navButton = document.querySelector('#nav-button');
//const navlink = document.querySelector('#nav-bar');

// javascript show



//navButton.addEventListener('click', () => {
//  navButton.classList.toggle('show');
//navlink.classList.toggle('show');
//});
// const navButton = document.querySelector('#nav-buttton');

const navButton = document.querySelector('#ham-btn');

const navbar = document.querySelector('#nav-bar')

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navbar.classList.toggle('show');
});