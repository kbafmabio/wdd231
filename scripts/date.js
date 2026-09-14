const currentyear = document.querySelector('#currentyear');

const today = new Date();

currentyear.innerHTML = today.getFullYear();

const lastmodified = document.querySelector('#lastmodified');
//alert(document.lastModified);

//lastmodified.textContent = new Date(document.lastModified);
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

lastmodified.innerHTML = `<span>last Modification:</span> ${new Date(document.lastModified).toLocaleDateString("en-US", options)}`;