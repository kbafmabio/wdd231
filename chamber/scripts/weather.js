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
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt',)
}


apiFetch();