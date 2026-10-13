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

    myTown.innerHTML = `<div> My City </div> ${data.name}`
    description.innerHTML = ` <div>Weather Description </div> ${data.weather[0].description}`
    temperature.innerHTML = ` <div>Temperature:</div> ${data.main.temp}&deg; F`
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
        forecastItem.innerHTML = `<strong>${dayName}:</strong> ${temp}&deg;F`;
        forecastContainer.appendChild(forecastItem);
    });
}

fetchForecast();

apiFetch();





