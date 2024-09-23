function weather(response) {
  //detail.innerHTML = response.data.temperature;

  let info = Math.round(response.data.daily[0].temperature.day);
  let detail = document.querySelector(".amount");
  detail.innerHTML = `${info}`;
  let selectDescribe = document.querySelector(".describe");
  selectDescribe.innerHTML = `${response.data.daily[0].condition.description}`;
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
  let inputCity = document.querySelector("#cities");
  inputCity.innerHTML = `${input.value}`;
  search(input.value);
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
