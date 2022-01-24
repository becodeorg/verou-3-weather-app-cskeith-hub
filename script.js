import  weatherKey from "./config.js";

const submit = document.getElementById("submit");

const weatherPLace = document.getElementById("weatherPlace");

console.log(weatherPLace);
submit.addEventListener('click', function (event) {
  event.preventDefault;
  let place = weatherPLace.value;

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=` + weatherKey.key)
  .then(response => response.json())
  
  .then(data => console.log(data));
  console.log(place);
})



  