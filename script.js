import weatherKey from "./config.js";

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + weatherKey.key)
    .then(response => response.json())
    .then(data => {
      let everyDay = [];
      for (let i = 0; i < 5; i++) {
        let day = new Date().getDay();
        console.log(day)
        everyDay.push(weekDay[(day+i) % 7]);
      }
      chart(data, everyDay);
      cardInfo(data);
      // TODO: check forecast per hour
      addCard(data.list[0], "", everyDay[0]);
      addCard(data.list[8], "", everyDay[1]);
      addCard(data.list[16], "", everyDay[2]);
      addCard(data.list[24], "", everyDay[3]);
      addCard(data.list[32], "", everyDay[4]);
    })

  const chart = (data, everyDay) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx,  {
      type: 'bar',
      data: {
        labels: [everyDay[0], everyDay[1], everyDay[2], everyDay[3], everyDay[4]],
        datasets: [{
          label: 'Temperature',
          data: [data.list[0].main.temp, data.list[8].main.temp, data.list[16].main.temp, data.list[24].main.temp, data.list[32].main.temp, ],
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

  const cardInfo = (data) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);
    const infoCard = document.createElement("div");
    infoCard.className = "infoCard";
    section.appendChild(infoCard);
    const locationH1 = document.createElement("h1");
    locationH1.innerText = data.city.name;
    infoCard.appendChild(locationH1);
    const city = document.createElement("p");
    city.innerText = data.city.country;
    infoCard.appendChild(city);
  }

  const addCard = (data, style, weekDay) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);

    const day1 = document.createElement("div");
    day1.className = style;
    section.appendChild(day1);

    const mondayH1 = document.createElement("h1");
    mondayH1.innerText = weekDay;
    day1.appendChild(mondayH1);

    const dateParagraph = document.createElement("p");
    day1.appendChild(dateParagraph);
    dateParagraph.innerHTML = data.dt_txt;

    const tempH3 = document.createElement("h3");
    tempH3.innerText = "Temperature:";
    day1.appendChild(tempH3);

    const temperature = document.createElement("div");
    temperature.className = "temperature";
    day1.append(temperature);

    const tempParagraph = document.createElement("p");
    day1.append(tempParagraph);
    tempParagraph.innerHTML = data.main.temp + "<span>&#8451;</span>";

    const weatherH3 = document.createElement("h3");
    weatherH3.innerText = "Weather:";
    day1.append(weatherH3);

    const weather = document.createElement("div");
    weather.className = "weather";
    day1.append(weather);

    const weatherParagraph = document.createElement("p");
    weatherParagraph.innerHTML = data.weather[0].main;
    day1.append(weatherParagraph);

    const windH3 = document.createElement("h3");
    windH3.innerText = "Wind:";
    day1.append(windH3);

    const wind = document.createElement("div");
    wind.className = "wind";
    day1.append(wind);

    const windParagraph = document.createElement("p");
    windParagraph.innerHTML = data.wind.speed + "<span> Meters Per Second</span>";
    day1.append(windParagraph);
  }

})