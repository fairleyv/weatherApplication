
const apiKey = '56b5bdd21a24df22d4d2e2db56542cf0'

let currentCity = document.getElementById('searchedCityName');
let currentTemp = document.getElementById('currentTemp');
let currentWind = document.getElementById('currentWind');
let currentHumidity = document.getElementById('currentHumidity');

let d1Date = document.getElementById('d1Date');
let d1Temp = document.getElementById('d1Temp');
let d1Wind = document.getElementById('d1Wind');
let d1Humidity = document.getElementById('d1Humidity');

let d2Date = document.getElementById('d2Date');
let d2Temp = document.getElementById('d2Temp');
let d2Wind = document.getElementById('d2Wind');
let d2Humidity = document.getElementById('d2Humidity');

let d3Date = document.getElementById('d3Date');
let d3Temp = document.getElementById('d3Temp');
let d3Wind = document.getElementById('d3Wind');
let d3Humidity = document.getElementById('d3Humidity');

let d4Date = document.getElementById('d4Date');
let d4Temp = document.getElementById('d4Temp');
let d4Wind = document.getElementById('d4Wind');
let d4Humidity = document.getElementById('d4Humidity');

let d5Date = document.getElementById('d5Date');
let d5Temp = document.getElementById('d5Temp');
let d5Wind = document.getElementById('d5Wind');
let d5Humidity = document.getElementById('d5Humidity');


function populatePreviousSearches() {
    const previousSearches = JSON.parse(localStorage.getItem('PreviousSearches')) || [];
    const cityBtns = document.getElementById('cityBtns');
    cityBtns.innherHTML = '';

    const uniqueSearches = [...new Set(previousSearches)].slice(-10);

    uniqueSearches.forEach(city => {
        const btn = document.createElement('button');
        btn.textContent = city;
        btn.classList.add('btn', 'btn-primary', 'mb-2');
        btn.addEventListener('click', () => getWeather(city));
        cityBtns.appendChild(btn);
    });
};

window.addEventListener('DOMContentLoaded', populatePreviousSearches);

function handleFormSubmit(event) {
    event.preventDefault();

    const cityQuery = document.getElementById('cityQuery').value;
    getWeather(cityQuery);

    const previousSearches = JSON.parse(localStorage.getItem('PreviousSearches')) || [];

    if(!previousSearches.includes(cityQuery)) {
        previousSearches.push(cityQuery);
    localStorage.setItem('PreviousSearches', JSON.stringify(previousSearches));
    }

    populatePreviousSearches();

    return false;}

function getWeather(city) {
    let weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(weatherAPIURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.list);
        console.log(data.city);
        // current City
        currentCity.textContent = `${data.city.name} (${data.list[4].dt_txt})`;
        currentTemp.textContent = `Temp: ${data.list[4].main.temp}`;
        currentHumidity.textContent = `Humidity: ${data.list[4].main.humidity}%`;
        currentWind.textContent = `Wind: ${data.list[4].wind.speed} MPH`;

        d1Date.textContent = `(${data.list[4].dt_txt})`;
        d1Temp.textContent = `Temp: ${data.list[4].main.temp}`;
        d1Wind.textContent = `Wind: ${data.list[4].wind.speed} MPH`;
        d1Humidity.textContent = `Humidity: ${data.list[4].main.humidity}%`;

        d2Date.textContent = `(${data.list[12].dt_txt})`;
        d2Temp.textContent = `Temp: ${data.list[12].main.temp}`;
        d2Wind.textContent = `Wind: ${data.list[12].wind.speed} MPH`;
        d2Humidity.textContent = `Humidity: ${data.list[12].main.humidity}%`;

        d3Date.textContent = `(${data.list[20].dt_txt})`;
        d3Temp.textContent = `Temp: ${data.list[20].main.temp}`;
        d3Wind.textContent = `Wind: ${data.list[20].wind.speed} MPH`;
        d3Humidity.textContent = `Humidity: ${data.list[20].main.humidity}%`;

        d4Date.textContent = `(${data.list[28].dt_txt})`;
        d4Temp.textContent = `Temp: ${data.list[28].main.temp}`;
        d4Wind.textContent = `Wind: ${data.list[28].wind.speed} MPH`;
        d4Humidity.textContent = `Humidity: ${data.list[28].main.humidity}%`;

        d5Date.textContent = `(${data.list[36].dt_txt})`;
        d5Temp.textContent = `Temp: ${data.list[36].main.temp}`;
        d5Wind.textContent = `Wind: ${data.list[36].wind.speed} MPH`;
        d5Humidity.textContent = `Humidity: ${data.list[36].main.humidity}%`;
    })

};

// getWeather('Detroit')