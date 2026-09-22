const myTown = document.querySelector('#mytown');
const myGraphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');

const myKey = "8ac4b49694de823806557c0e24d13c75";
const myLat = "5.242445";
const myLon = "-3.626984";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

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
    temperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt',)
}


apiFetch();

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
    const forecastContainer = document.querySelector('#forecast-container');
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

fetchCurrentWeather();
fetchForecast();

// --- 5. MEMBER SPOTLIGHTS ---
const membersUrl = "data/members.json"; 
const spotlightsContainer = document.querySelector("#spotlights");

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data);
        } else {
            console.error("Erreur chargement JSON members");
        }
    } catch (error) {
        console.error("Fetch error (spotlights):", error);
    }
}

function displaySpotlights(members) {
    // Filtrer les membres de niveau 2 (Silver) ou 3 (Gold)
    const filteredMembers = members.filter(member => member.membership >= 2);
    
    // Mélanger aléatoirement et en prendre 3 max
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightsContainer.innerHTML = "";
    selected.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("spotlight-card");

        let levelText = member.membership === 3 ? "Gold Member" : "Silver Member";

        card.innerHTML = `
    <h3>${member.name}</h3>
    <p class="tagline"><em>${member.tagline}</em></p>
    <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="80" height="80">
    <p><strong>EMAIL:</strong> ${member.email}</p>
    <p><strong>PHONE:</strong> ${member.phone}</p>
    <p><strong>URL:</strong> <a href="https://${member.website}" target="_blank">${member.website}</a></p>
    <span class="badge ${member.membership === 3 ? 'gold' : 'silver'}">${levelText}</span>
`;
        spotlightsContainer.appendChild(card);
    });
}

getSpotlights();