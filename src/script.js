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
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#current-weather-description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML=`http://openweathermap.org/img/wn/01d@2x.png`
}

iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);

iconElement.setAttribute(
    "alt",
    response.data.weather[0].description
);

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
}

function search(city){
    event.preventDefault();
    let apiKey = "9867db028fe476d7756323ae2169ee2f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", handleSubmit)
}


