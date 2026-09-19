const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    cards.innerHTML = '';

    members.forEach((member) => {
        // Create elements to add to the div.cards element
        const card = document.createElement('section');
        const company_name = document.createElement('h2');
        const company_address = document.createElement('p');
        const company_phone = document.createElement('p');
        const image_file = document.createElement('img');

        // Build the h2 content out to show the member's company name
        company_name.textContent = member.company_name;
        company_address.textContent = member.company_address;
        company_phone.textContent = member.company_phone;

        image_file.setAttribute('src', member.image_file);
        image_file.setAttribute('alt', `Logo of ${member.company_name}`);
        image_file.setAttribute('loading', 'lazy');
        image_file.setAttribute('width', '300');
        image_file.setAttribute('height', '200');

        card.appendChild(company_name);
        card.appendChild(company_address);
        card.appendChild(image_file);
        card.appendChild(company_phone);

        cards.appendChild(card);
    });
}

getMemberData();

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');

gridbutton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});
listbutton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});

