document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const businessGrid = document.querySelector('#businessGrid');
const businessList = document.querySelector('#businessList');
const url = "data/members.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);



    gridButton.addEventListener('click', () => {
        displayGrid(data.businesses);
    });

    listButton.addEventListener('click', () => {
        displayList(data.businesses);
    });





}




const displayGrid = (data) => {
    businessList.innerHTML = '';
    data.forEach((business) => {
        let div = document.createElement('div');

        div.innerHTML = `
            <h1>${business.name}</h1>
            <p>${business.address}</p>
            <p>${business.number}</p>
            <img src="${business.image}" alt=${business.name}>
            <a href="${business.url}">${business.url}</a>
        `;

        businessGrid.appendChild(div);
    });
};

getBusinessData();

const displayList = (data) => {
    businessGrid.innerHTML = '';
    data.forEach((business) => {
        let table = document.createElement('div');

        table.innerHTML = `
            <div>${business.name}</div>
            <div>${business.address}</div>
            <div>${business.number}</div>
            <div>${business.url}</div>
        `
        businessList.appendChild(table);


    });
}

// weather code

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.20&appid=242c69025911a3a0ade03b01b670043d&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-116.20&appid=242c69025911a3a0ade03b01b670043d&units=imperial';

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


apiFetch();
forecastApiFetch();

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

//spotlight code



