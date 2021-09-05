const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "3894c3f3c4c28fdc37bc2edf9cc7ad5d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} - ${data.main.temp}도`;
    });
}
function onGeoError() {
  alert("위치를 찾을 수 없어, 날씨를 가져오지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
