function formatDate(timestamp){
    let now = new Date(timestamp);
    let days = ["SUN", "MON", "TUE", "WED","THU", "FRI", "SAT"];
    let currentDay = days[now.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = months[now.getMonth()];
    let currentDate = now.getDate();
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();
}

function showTemperature(response) {
    let temperatureElement = document.querySelector("current-temperature");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement = document.querySelector("city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("current-weather-description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


function handleSubmit(event){
    event.preventDefault();
    let apiKey = "9867db028fe476d7756323ae2169ee2f";
    let city = document.querySelector("#type-city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)}


