//Rozszerzając zadanie 6 z wykorzystaniem wiedzy z poprzednich zajęć, zapiszmy nasz cały obiekt pogody do pliku wykorzystując wbudowany moduł `fs` i funkcję `writeFile`. Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby obsługiwała Promise.
const request = require("request");
const fs = require("fs");

function getUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode === 200) {
        let Preson = JSON.parse(body);
        let geoPreson = Preson.address.geo;
        resolve(geoPreson);
      } else {
      }
    });
  });
}

function getWeather({ lat, lng }) {
  url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode === 200) {
        let weatherObj = JSON.parse(body);
        let weatherObjTemp = weatherObj.main.temp;
        resolve(weatherObjTemp);
      } else {
      }
    });
  });
}

function saveToFile(obj) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./04/07.txt", obj, "utf8", err => {
      if (err) throw reject(error);
      console.log("The file has been saved!");
    });
  });
}

getUser(2)
  .then(getWeather)
  .then(weather => {
    console.log(weather);
    return weather;
  })
  .catch(error => console.log(error))
  .finally(weather => saveToFile(weather));
