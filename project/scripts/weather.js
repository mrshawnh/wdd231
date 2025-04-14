// weather code

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=13.32&lon=122.08&appid=242c69025911a3a0ade03b01b670043d&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=13.32&lon=122.08&appid=242c69025911a3a0ade03b01b670043d&units=imperial';

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const today = document.querySelector('#today');
const todayWeather = document.querySelector('#todayWeather');
const tomorrow = document.querySelector('#tomorrow');
const tomorrowWeather = document.querySelector('#tomorrowWeather');
const nextDay = document.querySelector('#nextDay');
const nextDayWeather = document.querySelector('#nextDayWeather');

function displayForecastResults(data) {
    todayWeather.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date();

    let todayDate = (date.getDay()) + 1;
    if (todayDate = 7) {
        today.innerHTML = days[0];
    } else {
        today.innerHTML = days[todayDate];
    }

    let tomorrowDate = (date.getDay()) + 2;
    if (tomorrowDate = 8) {
        tomorrow.innerHTML = days[1];
    } else {
        tomorrow.innerHTML = days[tomorrowDate];
    }

    let nextDate = (date.getDay()) + 3;
    if (nextDate = 9) {
        nextDay.innerHTML = days[2];
    } else {
        nextDay.innerHTML = days[nextDate];
    }

    tomorrowWeather.innerHTML = `${data.list[1].main.temp}&deg;F`;
    nextDayWeather.innerHTML = `${data.list[2].main.temp}&deg;F`;

};

apiFetch();
forecastApiFetch();