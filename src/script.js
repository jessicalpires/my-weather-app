let now = new Date();

let days = ["SUN", "MON", "TUE", "WED","THU", "FRI", "SAT"];
let currentDay = days[now.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[now.getMonth()];

let currentDate = now.getDate();

let currentHour = now.getHours();

let currentMinutes = now.getMinutes();

let currentDateAndHour = document.querySelector(".currentDateAndHour");

currentDateAndHour.innerHTML = `${currentDay} | ${currentMonth} ${currentDate}, ${currentHour}:${currentMinutes}`;


function showTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#current-temperature");
    document.querySelector("#current-temperature").innerHTML=Math.round(response.data.main.temp);
    temperatureElement.innerHTML = `${temperature}ºC`;
    let description = document.querySelector("#current-weather-description");
    description.innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#current-day-max-temp").innerHTML = Math.round(response.data.main.temp_max);
    document.querySelector("#current-day-min-temp").innerHTML = Math.round(response.data.main.temp_min);
}


function handleSubmit (event){
    event.preventDefault();
    let apiKey = "9867db028fe476d7756323ae2169ee2f";
    let city = document.querySelector("#type-city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

};

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

