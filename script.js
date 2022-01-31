import apiKey from "./config.js";

const addEveryWeekDay = () => {
  const weekDay = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let everyDay = [];
  for (let i = 0; i < 5; i++) {
    let day = new Date().getDay();
    everyDay.push(weekDay[(day + i) % 7]);
  }
  return everyDay;
}
const dayLabel = addEveryWeekDay();

const temperature = (tempData) => {
  let everyDayTemperature = [
    tempData.list[0].main.temp,
    tempData.list[8].main.temp,
    tempData.list[16].main.temp,
    tempData.list[24].main.temp,
    tempData.list[32].main.temp
  ]
  return everyDayTemperature;
}

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;

  fetch("https://api.unsplash.com/search/photos?query=" + place + "&client_id=" + apiKey.imageKey)
    .then(response => response.json())
    .then(image => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + apiKey.weatherKey)
        .then(response => response.json())
        .then(data => {
          const dailyTemperature = temperature(data);
          chart(dayLabel, dailyTemperature);
          cardInfo(data, image);
          addCard(data.list[0], "card", dayLabel[0]);
          addCard(data.list[8], "card", dayLabel[1]);
          addCard(data.list[16], "card", dayLabel[2]);
          addCard(data.list[24], "card", dayLabel[3]);
          addCard(data.list[32], "card", dayLabel[4]);
        })
    })

  const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
  }

  const createParagraphElement = () => {
    const newParagraph = document.createElement("p");
    return newParagraph;
  }

  const createH1Element = () => {
    const newH1 = document.createElement("h1");
    return newH1;
  }

  const createH3Element = () => {
    const newH3 = document.createElement("h3");
    return newH3;
  }

  const chart = (dayLabel, dailyTemperature) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dayLabel,
        datasets: [{
          label: 'Temperature',
          data: [dailyTemperature[0], dailyTemperature[1], dailyTemperature[2], dailyTemperature[3], dailyTemperature[4], ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }

    });
  }

  const cardInfo = (data, image) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);
    const infoCard = createDivElement();
    infoCard.className = "infoCard";
    section.appendChild(infoCard);
    const locationH1 = createH1Element();
    locationH1.innerText = data.city.name;
    infoCard.appendChild(locationH1);
    const city = createParagraphElement();
    city.innerText = data.city.country;
    infoCard.appendChild(city);
    const cityImage = createDivElement();
    cityImage.className = "cityImage";
    cityImage.innerHTML = `<img src=${image.results[0].urls.regular} alt="City of" style="width:200px;height:200px">`;
    infoCard.appendChild(cityImage);
  }

  const addCard = (data, style, addEveryWeekDay, hoverEffects) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);
    const day1 = createDivElement();
    day1.className = style;
    section.appendChild(day1);
    const mondayH1 = createH1Element();
    mondayH1.innerText = addEveryWeekDay;
    day1.appendChild(mondayH1);
    const dateParagraph = createParagraphElement();
    day1.appendChild(dateParagraph);
    dateParagraph.innerHTML = data.dt_txt;
    const tempH3 = createH3Element();
    tempH3.innerText = "Temperature:";
    day1.appendChild(tempH3);
    const temperature = createDivElement();
    temperature.className = "temperature";
    day1.append(temperature);
    const tempParagraph = createParagraphElement();
    day1.append(tempParagraph);
    tempParagraph.innerHTML = data.main.temp + "<span>&#8451;</span>";
    const feelTempH3 = createH3Element();
    feelTempH3.innerText = "Feeling Temperature:";
    day1.appendChild(feelTempH3);
    const feelTemp = createDivElement();
    feelTemp.className = "feelTemp";
    day1.append(feelTemp);
    const feelTempParagraph = createParagraphElement();
    day1.append(feelTempParagraph);
    feelTempParagraph.innerHTML = data.main.feels_like + "<span>&#8451;</span>";
    const weatherH3 = createH3Element();
    weatherH3.innerText = "Weather:";
    day1.append(weatherH3);
    const weather = createDivElement();
    weather.className = "weather";
    day1.append(weather);
    const weatherParagraph = createParagraphElement();
    weatherParagraph.innerHTML = data.weather[0].main;
    day1.append(weatherParagraph);
    const windH3 = createH3Element();
    windH3.innerText = "Wind:";
    day1.append(windH3);
    const wind = createDivElement();
    wind.className = "wind";
    day1.append(wind);
    const windParagraph = createParagraphElement();
    windParagraph.innerHTML = data.wind.speed + "<span>MpS</span>";
    day1.append(windParagraph);
    const humidityH3 = createH3Element();
    humidityH3.innerText = "Humidity:";
    day1.append(humidityH3);
    const humidity = createDivElement();
    humidity.className = "humidity";
    day1.append(humidity);
    const humidityParagraph = createParagraphElement();
    humidityParagraph.innerHTML = data.main.humidity + "<span>%</span>";
    day1.append(humidityParagraph);
  }


})