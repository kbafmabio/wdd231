
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('#cards');

gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

listButton.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}


const cards = document.querySelector('#cards');

async function loadData() {
    const response = await fetch('members.json');
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {

    members.forEach((member) => {

        // Create elements
        let card = document.createElement('section');
        let company_name = document.createElement('h2');
        let company_address = document.createElement('p');
        let company_phone = document.createElement('p');
        let image_file = document.createElement('img');

        // Add company name
        company_name.textContent = member.company_name;

        // Add company address
        company_address.textContent = member.company_address;

        // Add company phone
        company_phone.textContent = member.company_phone;

        // Add image information
        image_file.setAttribute('src', member.image_file);
        image_file.setAttribute('alt', `Logo of ${member.company_name}`);
        image_file.setAttribute('loading', 'lazy');
        image_file.setAttribute('width', '340');
        image_file.setAttribute('height', '440');

        // Add elements to the card
        card.appendChild(company_name);
        card.appendChild(company_address);
        card.appendChild(company_phone);
        card.appendChild(image_file);

        // Add card to the cards container
        cards.appendChild(card);
    });
};

// Load the JSON data
loadData();
