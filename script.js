import weatherKey from "./config.js";

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");


submit.addEventListener('click', function () {
  let place = weatherPLace.value;


  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + weatherKey.key)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      card1(data);
      card2(data);
      createCard(data);
    })


})

const card1 = (data) => {
  temp.innerHTML = data.list[0].main.temp + "<span>&#8451;</span>";
  date.innerHTML = data.list[0].dt_txt;
  wind.innerHTML = data.list[0].wind.speed + "<span> Meters per Second</span>";
}

const card2 = (data) => {
  temp.innerHTML = data.list[1].main.temp + "<span>&#8451;</span>";
  date.innerHTML = data.list[1].dt_txt;
  wind.innerHTML = data.list[1].wind.speed + "<span> Meters per Second</span>";
}


// TODO  loop for html card
const createCard = (data) => {
  for (var i = 0; i < data.length; i++)
  const section = document.createElement("section");
  const day = document.createElement("div");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const datum = document.createElement("div");
  const paragraph = document.createElement("p");
  const temperature = document.createElement("div");
  const wd = document.createElement("div");
}
createCard();