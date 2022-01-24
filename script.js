import weatherKey from "./config.js";

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");


submit.addEventListener('click', function () {
  let place = weatherPLace.value;


  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=` + weatherKey.key)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      card(data);
    })


})

const card = (data) => {
  temp.innerHTML = data.list[0].main.temp;
  date.innerHTML = data.list[0].dt_txt;
  wind.innerHTML = data.list[0].wind.speed;

  console.log(data.list[0].dt_txt);
}
