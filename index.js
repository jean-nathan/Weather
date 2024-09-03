const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const erro404 = document.querySelector(".not-found");
const input = document.querySelector(".search-box input");

function reset() {
  input.value = "";
  weatherBox.style.display = "none";
  weatherDetails.style.display = "none";
  erro404.style.display = "none";
  container.style.height = "10vh";
}

function searchWeather() {
  const APIKey = "3a9c280aa7547eda772a7f8d907ad2e1";
  const city = input.value;

  if (city === "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        erro404.style.display = "block";
        erro404.classList.add("fadeIn");
        return;
      }

      erro404.style.display = "none";
      erro404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Rain":
          image.src = "./images/rain.png";
          break;

        case "Snow":
          image.src = "./images/snow.png";
          break;

        case "Clouds":
          image.src = "./images/cloud.png";
          break;

        case "Haze":
          image.src = "./images/mist.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    })
    .catch((err) => {
      alert(
        "Você precisa configurar sua API Key ou houve um erro inesperado.."
      );
      console.error(err);
    });
}

search.addEventListener("click", searchWeather);
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});
input.addEventListener("focus", reset);
