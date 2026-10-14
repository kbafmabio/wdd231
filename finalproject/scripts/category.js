import { categories } from "../data/category.mjs";
console.log(categories);

const categoriesContainer = document.querySelector("#categoriesContainer");


function displayItems(categories) {
    categoriesContainer.innerHTML = "";

    categories.forEach(category => {
        const card = document.createElement("div");

        const photo = document.createElement("img");
        photo.src = `images/${category.photoUrl}`;
        photo.alt = category.title;
        photo.width = 300;
        photo.height = 200;
        card.appendChild(photo);

        const title = document.createElement("h2");
        title.innerText = category.title;
        card.appendChild(title);

        const benefit = document.createElement("benefit");
        benefit.innerText = category.benefit;
        card.appendChild(benefit);

        const usingMode = document.createElement("p");
        usingMode.innerText = category.usingMode;
        card.appendChild(usingMode);

        categoriesContainer.appendChild(card);
    });
}

displayItems(categories);

// local storage message code


const visitMessage = document.querySelector("#visiteMessage");

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

