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
