const currentyear = document.querySelector('#currentyear');

const today = new Date();

currentyear.innerHTML = today.getFullYear();

const lastmodified = document.querySelector('#lastmodified');
alert(document.lastModified);

lastmodified.textContent = new Date(document.lastModified);