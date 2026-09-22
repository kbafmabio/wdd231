const myTown = document.querySelector('#mytown');
const myGraphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');

const myKey = "8ac4b49694de823806557c0e24d13c75";
const myLat = "5.242445";
const myLon = "-3.626984";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    myTown.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}&deg; F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt',)
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            console.error("Erreur prévisions :", await response.text());
        }
    } catch (error) {
        console.error("Fetch error (forecast):", error);
    }
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = '';

    const threeDayForecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    threeDayForecast.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        const temp = Math.round(day.main.temp);

        const forecastItem = document.createElement('p');
        forecastItem.innerHTML = `<strong>${dayName}:</strong> ${temp}&deg;C`;
        forecastContainer.appendChild(forecastItem);
    });
}

fetchForecast();

apiFetch();




// --- 5. MEMBER SPOTLIGHTS ---
const membersUrl = "data/members.json";
const spotlightsContainer = document.querySelector("#company-card");

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);

        if (!response.ok) {
            throw new Error("Erreur chargement JSON members");
        }

        const data = await response.json();

        // The JSON contains { "members": [...] }
        displaySpotlights(data.members);

    } catch (error) {
        console.error("Fetch error (spotlights):", error);
    }
}

function displaySpotlights(members) {
    // Filter Silver (2) and Gold (3) members
    const filteredMembers = members.filter(member => {
        return member.membership_level["2"] === "silver" ||
            member.membership_level["3"] === "gold";
    });

    // Shuffle randomly and select up to 3
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightsContainer.innerHTML = "";

    selected.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        // Determine membership level
        const levelText = member.membership_level["3"] === "gold"
            ? "Gold Member"
            : "Silver Member";

        const badgeClass = member.membership_level["3"] === "gold"
            ? "gold"
            : "silver";

        card.innerHTML = `
            <h3>${member.company_name}</h3>

            <p class="tagline">
                <em>${member.company_address}</em>
            </p>

            <img 
                src="${member.image_file}" 
                alt="${member.company_name} logo"
                loading="lazy"
                width="80"
                height="80"
            >

            <p>
                <strong>PHONE:</strong> ${member.company_phone}
            </p>

            <p>
                <strong>URL:</strong>
                <a href="${member.company_url}" target="_blank" rel="noopener">
                    ${member.company_url}
                </a>
            </p>

            <span class="badge ${badgeClass}">
                ${levelText}
            </span>
        `;

        spotlightsContainer.appendChild(card);
    });
}

getSpotlights();
