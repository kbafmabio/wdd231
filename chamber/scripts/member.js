const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData(url) {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {

    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let company_name = document.createElement('h2');
        let company_address = document.createElement('p');
        let company_phone = document.createElement('p');
        let image_file = document.createElement('img');

        // Build the h2 content out to show the member's company name
        company_name.textContent = member.company_name;

        image_file.setAttribute('src', member.image_file);
        image_file.setAttribute('alt', `Logo of ${member.company_name}`);
        image_file.setAttribute('loading', 'lazy');
        image_file.setAttribute('width', '300');
        image_file.setAttribute('height', '300');

        card.appendChild(company_name);
        card.appendChild(image_file);

        cards.appendChild(card);
    });
}

getMemberData(url);

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#');

gridbutton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});
listbutton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

function showCards() {
    const cards = document.querySelector("#cards");
    cards.style.display = "grid";
}   