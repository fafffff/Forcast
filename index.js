let form = document.querySelector(".search-form");
function show(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");

  city.innerHTML = `${input.value}`;
}
form.addEventListener("submit", show);
