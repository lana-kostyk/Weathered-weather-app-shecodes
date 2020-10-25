function displayTemperature(response) {
    console.log(response.data);  
    let temperatureElement = document.querySelector("#temperature-now");
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let feelslikeElement = document.querySelector ("#feels-like")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
  feelslikeElement.innerHTML = Math.round(response.data.main.feels_like);
}


let apiKey = "b4d8edf093296b9aa93443470450c3f6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);


