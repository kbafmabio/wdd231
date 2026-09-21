const myTown = document.querySelector('#mytown');
const myGraphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');

const myKey = "8ac4b49694de823806557c0e24d13c75";
const myLat = "5,242445";
const myLon = "-3,626984";
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();