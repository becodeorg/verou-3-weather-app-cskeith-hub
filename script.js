import weatherKey from "./config.js";

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + weatherKey.key)
    .then(response => response.json())
    .then(data => {
      chart(data);
      cardInfo(data);
      card1(data);
      
      // card2(data);
      // card3(data);
      // card4(data);
      // card5(data);
      console.log(data);
    })

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
  const card1 = (data) => {
    // for (let i = 0; i < data.list.length; *10 i++)
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);

    const day1 = document.createElement("div");
    day1.className = "today";
    section.appendChild(day1);

    const mondayH1 = document.createElement("h1");
    mondayH1.innerText = "Today";
    day1.appendChild(mondayH1);

    const dateParagraph = document.createElement("p");
    day1.appendChild(dateParagraph);
    dateParagraph.innerHTML = data.list[0].dt_txt;

    const tempH3 = document.createElement("h3");
    tempH3.innerText = "Temperature";
    day1.appendChild(tempH3);

    const temperature = document.createElement("div");
    temperature.className = "temperature";
    day1.append(temperature);

    const tempParagraph = document.createElement("p");
    day1.append(tempParagraph);
    tempParagraph.innerHTML = data.list[0].main.temp + "<span>&#8451;</span>";

    const weatherH3 = document.createElement("h3");
    weatherH3.innerText = "Weather";
    day1.append(weatherH3);

    const weather = document.createElement("div");
    weather.className = "weather";
    day1.append(weather);

    const weatherParagraph = document.createElement("p");
    weatherParagraph.innerHTML = data.list[0].weather[0].main;
    day1.append(weatherParagraph);

    const windH3 = document.createElement("h3");
    windH3.innerText = "Wind";
    day1.append(windH3);

    const wind = document.createElement("div");
    wind.className = "wind";
    day1.append(wind);

    const windParagraph = document.createElement("p");
    windParagraph.innerHTML = data.list[1].wind.speed + "<span> Meters Per Second</span>";
    day1.append(windParagraph);
  }
  // const card2 = (data) => {
  //   // for (let i = 0; i < data.list.length; *10 i++)
  //   const main = document.querySelector("main");
  //   const section = document.createElement("section");
  //   main.appendChild(section);

  //   const today = document.createElement("div");
  //   today.className = "today";
  //   section.appendChild(today);

  //   const mondayH1 = document.createElement("h1");
  //   mondayH1.innerText = "";
  //   today.appendChild(mondayH1);

  //   const dateH3 = document.createElement("h3");
  //   dateH3.innerText = "Date:";
  //   today.appendChild(dateH3);

  //   const dateParagraph = document.createElement("p");
  //   today.appendChild(dateParagraph);
  //   dateParagraph.innerHTML = data.list[8].dt_txt;

  //   const tempH3 = document.createElement("h3");
  //   tempH3.innerText = "Temperature:";
  //   today.appendChild(tempH3);

  //   const temperature = document.createElement("div");
  //   temperature.className = "temperature";
  //   today.append(temperature);

  //   const tempParagraph = document.createElement("p");
  //   today.append(tempParagraph);
  //   tempParagraph.innerHTML = data.list[8].main.temp + "<span>&#8451;</span>";

  //   const rainH3 = document.createElement("h3");
  //   rainH3.innerText = "Rain:";
  //   today.append(rainH3);

  //   const rain = document.createElement("div");
  //   rain.className = "rain";
  //   today.append(rain);

  //   const rainParagraph = document.createElement("p");
  //   rainParagraph.innerHTML = data.list[8].weather[0].main;
  //   today.append(rainParagraph);

  //   const windH3 = document.createElement("h3");
  //   windH3.innerText = "Wind:";
  //   today.append(windH3);

  //   const wind = document.createElement("div");
  //   wind.className = "wind";
  //   today.append(wind);

  //   const windParagraph = document.createElement("p");
  //   windParagraph.innerHTML = data.list[8].wind.speed + "<span> Meters Per Second</span>";
  //   today.append(windParagraph);
  // }
  // const card3 = (data) => {
  //   // for (let i = 0; i < data.list.length; *10 i++)
  //   const main = document.querySelector("main");
  //   const section = document.createElement("section");
  //   main.appendChild(section);

  //   const today = document.createElement("div");
  //   today.className = "today";
  //   section.appendChild(today);

  //   const mondayH1 = document.createElement("h1");
  //   mondayH1.innerText = "";
  //   today.appendChild(mondayH1);

  //   const dateH3 = document.createElement("h3");
  //   dateH3.innerText = "Date:";
  //   today.appendChild(dateH3);

  //   const dateParagraph = document.createElement("p");
  //   today.appendChild(dateParagraph);
  //   dateParagraph.innerHTML = data.list[16].dt_txt;

  //   const tempH3 = document.createElement("h3");
  //   tempH3.innerText = "Temperature:";
  //   today.appendChild(tempH3);

  //   const temperature = document.createElement("div");
  //   temperature.className = "temperature";
  //   today.append(temperature);

  //   const tempParagraph = document.createElement("p");
  //   today.append(tempParagraph);
  //   tempParagraph.innerHTML = data.list[16].main.temp + "<span>&#8451;</span>";

  //   const rainH3 = document.createElement("h3");
  //   rainH3.innerText = "Rain:";
  //   today.append(rainH3);

  //   const rain = document.createElement("div");
  //   rain.className = "rain";
  //   today.append(rain);

  //   const rainParagraph = document.createElement("p");
  //   rainParagraph.innerHTML = data.list[16].weather[0].main;
  //   today.append(rainParagraph);

  //   const windH3 = document.createElement("h3");
  //   windH3.innerText = "Wind:";
  //   today.append(windH3);

  //   const wind = document.createElement("div");
  //   wind.className = "wind";
  //   today.append(wind);

  //   const windParagraph = document.createElement("p");
  //   windParagraph.innerHTML = data.list[16].wind.speed + "<span> Meters Per Second</span>";
  //   today.append(windParagraph);
  // }
  // const card4 = (data) => {
  //   // for (let i = 0; i < data.list.length; *10 i++)
  //   const main = document.querySelector("main");
  //   const section = document.createElement("section");
  //   main.appendChild(section);

  //   const today = document.createElement("div");
  //   today.className = "today";
  //   section.appendChild(today);

  //   const mondayH1 = document.createElement("h1");
  //   mondayH1.innerText = "";
  //   today.appendChild(mondayH1);

  //   const dateH3 = document.createElement("h3");
  //   dateH3.innerText = "Date:";
  //   today.appendChild(dateH3);

  //   const dateParagraph = document.createElement("p");
  //   today.appendChild(dateParagraph);
  //   dateParagraph.innerHTML = data.list[24].dt_txt;

  //   const tempH3 = document.createElement("h3");
  //   tempH3.innerText = "Temperature:";
  //   today.appendChild(tempH3);

  //   const temperature = document.createElement("div");
  //   temperature.className = "temperature";
  //   today.append(temperature);

  //   const tempParagraph = document.createElement("p");
  //   today.append(tempParagraph);
  //   tempParagraph.innerHTML = data.list[24].main.temp + "<span>&#8451;</span>";

  //   const rainH3 = document.createElement("h3");
  //   rainH3.innerText = "Rain:";
  //   today.append(rainH3);

  //   const rain = document.createElement("div");
  //   rain.className = "rain";
  //   today.append(rain);

  //   const rainParagraph = document.createElement("p");
  //   rainParagraph.innerHTML = data.list[24].weather[0].main;
  //   today.append(rainParagraph);

  //   const windH3 = document.createElement("h3");
  //   windH3.innerText = "Wind:";
  //   today.append(windH3);

  //   const wind = document.createElement("div");
  //   wind.className = "wind";
  //   today.append(wind);

  //   const windParagraph = document.createElement("p");
  //   windParagraph.innerHTML = data.list[24].wind.speed + "<span> Meters Per Second</span>";
  //   today.append(windParagraph);
  // }
  // const card5 = (data) => {
  //   // for (let i = 0; i < data.list.length; *10 i++)
  //   const main = document.querySelector("main");
  //   const section = document.createElement("section");
  //   main.appendChild(section);

  //   const today = document.createElement("div");
  //   today.className = "today";
  //   section.appendChild(today);

  //   const mondayH1 = document.createElement("h1");
  //   mondayH1.innerText = "";
  //   today.appendChild(mondayH1);

  //   const dateH3 = document.createElement("h3");
  //   dateH3.innerText = "Date:";
  //   today.appendChild(dateH3);

  //   const dateParagraph = document.createElement("p");
  //   today.appendChild(dateParagraph);
  //   dateParagraph.innerHTML = data.list[32].dt_txt;

  //   const tempH3 = document.createElement("h3");
  //   tempH3.innerText = "Temperature:";
  //   today.appendChild(tempH3);

  //   const temperature = document.createElement("div");
  //   temperature.className = "temperature";
  //   today.append(temperature);

  //   const tempParagraph = document.createElement("p");
  //   today.append(tempParagraph);
  //   tempParagraph.innerHTML = data.list[32].main.temp + "<span>&#8451;</span>";

  //   const rainH3 = document.createElement("h3");
  //   rainH3.innerText = "Rain:";
  //   today.append(rainH3);

  //   const rain = document.createElement("div");
  //   rain.className = "rain";
  //   today.append(rain);

  //   const rainParagraph = document.createElement("p");
  //   rainParagraph.innerHTML = data.list[32].weather[0].main;
  //   today.append(rainParagraph);

  //   const windH3 = document.createElement("h3");
  //   windH3.innerText = "Wind:";
  //   today.append(windH3);

  //   const wind = document.createElement("div");
  //   wind.className = "wind";
  //   today.append(wind);

  //   const windParagraph = document.createElement("p");
  //   windParagraph.innerHTML = data.list[32].wind.speed + "<span> Meters Per Second</span>";
  //   today.append(windParagraph);
  // }

})