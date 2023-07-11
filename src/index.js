import './style.css';


async function getWeather(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c52ef444b9bf4a17955163903231806&q=${cityName}`);
    const weatherData = await response.json();
    console.log(weatherData);

    displayData(weatherData);

}

const displayData  = (weather) => {
    const cityNameH = document.querySelector('#city-name');
    const condition = document.querySelector('#condition');
    const temp = document.querySelector('#temperature');
    const feelsLike = document.querySelector('#feels-like');
    const wind = document.querySelector('#wind');
    const humidity = document.querySelector('#humidity');


    condition.textContent = weather.current.condition.text;
    cityNameH.textContent = `${weather.location.name.toUpperCase()}, ${weather.location.country.toUpperCase()}`;
    temp.textContent = `${weather.current.temp_c}°C`;
    feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}°C`;
    wind.textContent = `Wind: ${weather.current.wind_kph} KPH`;
    humidity.textContent = `Humidity: ${weather.current.humidity}`;

}

const setControllers = () => {
    const searchCity = document.querySelector('#search');

    searchCity.addEventListener('keypress', (e) => {
        if(e.keyCode === 13) {
            getWeather(searchCity.value);
        }
    });
}

const init = () => {
    getWeather('baguio');
    setControllers();
}

init();
