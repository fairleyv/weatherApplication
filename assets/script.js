const apiKey = '56b5bdd21a24df22d4d2e2db56542cf0'

let currentCity = document.getElementById('searchedCityName');

function handleFormSubmit(event) {
    event.preventDefault();

    const cityQuery = document.getElementById('cityQuery').value;
    getWeather(cityQuery);

    return false;}

function getWeather(city) {
    let weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(weatherAPIURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.city)
        currentCity.textContent = (data.city.name)
    })
};

// getWeather('Detroit')