//Wykorzystując bibliotekę `axios` zamieńmy z zadania 7 `request` wraz z naszymi Promise na bibliotekę `axios`.
const fs = require("fs");
const axios = require("axios");

function getWeather({ lat, lng }) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
  );
}

function saveToFile(obj) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./04/08.txt", obj, "utf8", err => {
      if (err) throw reject(error);
      console.log("The file has been saved!");
    });
  });
}

axios
  .get("https://jsonplaceholder.typicode.com/users/2")
  .then(response => getWeather(response.data.address.geo))
  .then(response => saveToFile(response.data.main.temp))
  .catch(error => {
    console.log(error);
  });
