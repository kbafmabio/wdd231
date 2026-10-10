import { places } from "../data/places.mjs";
console.log(places);

const placesContainer = document.querySelector("#placesContainer");

function displayItems(places) {

    places.forEach(place => {
        const card = document.createElement("div");
        const photo = document.createElement("img");
        photo.src = `images/${place.photoUrl}`;
        photo.alt = place.name;
        photo.width = 300;
        photo.height = 200;
        card.appendChild(photo);

        const title = document.createElement("h2");
        title.innerText = place.name;
        card.appendChild(title);

        const address = document.createElement("address");
        address.innerText = place.address;
        card.appendChild(address);

        const description = document.createElement("p");
        description.innerText = place.description;
        card.appendChild(description);

        placesContainer.appendChild(card);
    });
}

displayItems(places);

// local storage message code


const visitMessage = document.querySelector("#visitMessage");

const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

// First visit
if (lastVisit === null) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time between visits in milliseconds
    const difference = now - Number(lastVisit);

    // Convert milliseconds to whole days
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (difference < 24 * 60 * 60 * 1000) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        const dayWord = days === 1 ? "day" : "days";

        visitMessage.textContent =
            `You last visited ${days} ${dayWord} ago.`;
    }
}

// Save the current visit date for the next visit
localStorage.setItem("lastVisit", now);

