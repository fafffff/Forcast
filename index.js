function weather(response) {
  //detail.innerHTML = response.data.temperature;

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
}
function search(city) {
  let apiKey = "90c47000f520956f67b7e0t1do4a3be3";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(weather);
  console.log(apiURL);
}
let form = document.querySelector(".search-form");
function show(event, response) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  let inputCity = document.querySelector("#cities");
  inputCity.innerHTML = `${input.value}`;
  search(response.data.city);
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
