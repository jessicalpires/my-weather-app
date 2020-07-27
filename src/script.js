function formatDate(timestamp){
    let date = newDate(timestamp);
    let hours = date.getHours();
    if (hours < 10){
        hours=`0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes=`0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#current-weather-description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    let dateAndHourElement = document.querySelector("#current-date-hour");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.innerHTML=`http://openweathermap.org/img/wn/01d@2x.png`;
    dateAndHourElemen.innerHTML = formatDate (response.data.dt*1000);
    celsiusTemperature = response.data.main.temp;
}

iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);

iconElement.setAttribute(
    "alt",
    response.data.weather[0].description
);

let celsiusTemperature = null;

function displayFahrenheitTemperature (event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature*9)/5+32;
    temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

function displayCelsiusTemperature (event){
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(celsiusTemperature);
}    

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
}

function search(city){
    event.preventDefault();
    let apiKey = "9867db028fe476d7756323ae2169ee2f";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit)


