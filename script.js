import weatherKey from "./config.js";

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + weatherKey.key)
    .then(response => response.json())
    .then(data => {
      dayData(data);
      chart(data);
      cardInfo(data);
      // TODO: use specific weekdays
      // TODO: check forecast per hour
      addCard(data.list[0], "today", "Today");
      addCard(data.list[8], "tomorrow", "Tomorrow");
      addCard(data.list[16], "", "");
      addCard(data.list[24], "", "");
      addCard(data.list[32], "", "");
    })

  const dayData = (data) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let temp = "";
    let weather = "";
    let wind = "";
    if (day === weekday[1]) {

      day = data.list[0].dt_txt;
      temp = data.list[0].main.temp + "<span>&#8451;</span>";
      weather = data.list[0].weather[0].main;
      wind = data.list[0].wind.speed + "<span> Meters Per Second</span>"

    } else if (day === weekday[2]) {

      day = data.list[0].dt_txt;
      temp = data.list[0].main.temp + "<span>&#8451;</span>";
      weather = data.list[0].weather[0].main;
      wind = data.list[0].wind.speed + "<span> Meters Per Second</span>"

    } else if (day === weekday[3]) {

      day = data.list[0].dt_txt;
      temp = data.list[0].main.temp + "<span>&#8451;</span>";
      weather = data.list[0].weather[0].main;
      wind = data.list[0].wind.speed + "<span> Meters Per Second</span>"

    } else if (day === weekday[4]) {

      day = data.list[0].dt_txt;
      temp = data.list[0].main.temp + "<span>&#8451;</span>";
      weather = data.list[0].weather[0].main;
      wind = data.list[0].wind.speed + "<span> Meters Per Second</span>"

    } else if (day === weekday[5]) {

      day = data.list[0].dt_txt;
      temp = data.list[0].main.temp + "<span>&#8451;</span>";
      weather = data.list[0].weather[0].main;
      wind = data.list[1].wind.speed + "<span> Meters Per Second</span>"

    }

  }


  const chart = (data) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Day1", "Day2", "Day3", "Day4", "Day5"],
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
  // TODO  loop for html card
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

  const addCard = (dayData, style, weekDay, dayIndex) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);

    const day1 = document.createElement("div");
    day1.className = style;
    section.appendChild(day1);

    const mondayH1 = document.createElement("h1");
    mondayH1.innerText = weekDay + ":";
    day1.appendChild(mondayH1);

    const dateParagraph = document.createElement("p");
    day1.appendChild(dateParagraph);
    dateParagraph.innerHTML = day1;

    const tempH3 = document.createElement("h3");
    tempH3.innerText = "Temperature:";
    day1.appendChild(tempH3);

    const temperature = document.createElement("div");
    temperature.className = "temperature";
    day1.append(temperature);

    const tempParagraph = document.createElement("p");
    day1.append(tempParagraph);
    tempParagraph.innerHTML = dayData.main.temp + "<span>&#8451;</span>";

    const weatherH3 = document.createElement("h3");
    weatherH3.innerText = "Weather:";
    day1.append(weatherH3);

    const weather = document.createElement("div");
    weather.className = "weather";
    day1.append(weather);

    const weatherParagraph = document.createElement("p");
    weatherParagraph.innerHTML = dayData.weather[0].main;
    day1.append(weatherParagraph);

    const windH3 = document.createElement("h3");
    windH3.innerText = "Wind:";
    day1.append(windH3);

    const wind = document.createElement("div");
    wind.className = "wind";
    day1.append(wind);

    const windParagraph = document.createElement("p");
    windParagraph.innerHTML = dayData.wind.speed + "<span> Meters Per Second</span>";
    day1.append(windParagraph);

    console.log(data.list[dayIndex]);
  }

})