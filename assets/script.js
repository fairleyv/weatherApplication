require('dotenv').config();

const apiKey = process.env.API_KEY

let currentCity = document.getElementById('searchedCityName');

function getWeather(city) {
    let weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(weatherAPIURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.city)
        currentCity.textContent = (data.city.name)
    })
};

getWeather('Detroit')