function weather(response) {
  let input = document.querySelector("#search-form-input");
  if (!response.data || !response.data.city) {
    alert(`Sorry, the city "${input.value}" is not found. Please try again.`);
    return;
  }
  if (!response.data.city.toLowerCase().includes(input.value.toLowerCase())) {
    if (
      confirm(
        `Sorry, ${input.value} is not included. Would you like to search on Google for ${input.value}?`
      )
    ) {
      window.open(
        `https://www.google.com/search?q=weather+${input.value}`,
        "_blank"
      );
    }
  }
  let inputCity = document.querySelector("#cities");
  inputCity.innerHTML = `${response.data.city}`;
  let info = Math.round(response.data.daily[now.getDay()].temperature.day);
  let detail = document.querySelector(".amount");
  detail.innerHTML = `${info}`;
  let selectDescribe = document.querySelector(".describe");
  selectDescribe.innerHTML = `${
    response.data.daily[now.getDay()].condition.description
  }`;
  let selectHumidity = document.querySelector(".humidity");
  selectHumidity.innerHTML = `${
    response.data.daily[now.getDay()].temperature.humidity
  }`;
  let selectWind = document.querySelector(".wind");
  selectWind.innerHTML = `${response.data.daily[now.getDay()].wind.speed}`;
  let selectIcon = document.querySelector(".icon");
  selectIcon.innerHTML = `<img src="${
    response.data.daily[now.getDay()].condition.icon_url
  }"alt="weather-image" class="icon"/>`;
  console.log(`${response.data.daily[now.getDay()].condition.icon_url}`);
  getForecast(response.data.city);
}

function search(city) {
  let apiKey = "90c47000f520956f67b7e0t1do4a3be3";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(weather);
  console.log(apiURL);
}
let form = document.querySelector(".search-form");
function show(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");

  search(input.value.toLowerCase());
}
form.addEventListener("submit", show);
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];

let selectDay = document.querySelector(".day");
selectDay.innerHTML = `${days[now.getDay()]}`;
let selectHour = document.querySelector(".hour");
selectHour.innerHTML = `${now.getHours()}`;
let selectMinute = document.querySelector(".minute");
selectMinute.innerHTML = `${now.getMinutes()}`;
if (now.getMinutes() < 10) {
  selectMinute.innerHTML = `0${now.getMinutes()}`;
} else {
  selectMinute.innerHTML = `${now.getMinutes()}`;
}
function getForecast(city) {
  let apiKey = "90c47000f520956f67b7e0t1do4a3be3";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayWeather);
  console.log(apiURL);
}
function displayWeather(response) {
  console.log(response.data);
  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dailyForecast = "";
  response.data.daily.forEach(function (day) {
    let forecastDay = new Date(day.time * 1000).getDay();
    dailyForecast =
      dailyForecast +
      `
      <div class="weather-forcast-mon">
        <div class="Mon">${dayNames[forecastDay]}</div>
        <div class="Mon-icon">
          <img src="${day.condition.icon_url}" alt="${
        day.condition.description
      }">
        </div>
        <div class="Mon-temp">
          <div class="Mon-higher-temp"><b>${Math.round(
            day.temperature.maximum
          )}°</b></div>
          <div class="Mon-lower-temp">${Math.round(
            day.temperature.minimum
          )}°</div>
        </div>
      </div>`;
    let input = document.querySelector("#search-form-input");
  });

  let weatherForecast = document.querySelector(".weather-forecast");
  weatherForecast.innerHTML = dailyForecast;
}

function getForecast(city) {
  let apiKey = "90c47000f520956f67b7e0t1do4a3be3";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayWeather);
  console.log(apiURL);
}
search("paris");
getForecast("paris");
