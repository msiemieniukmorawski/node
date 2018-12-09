//Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika. Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu naszego zapytania do pogody. Analogicznie jak w zadaniu 4.
const request = require("request");

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
        console.log(weatherObj);
        resolve(weatherObjTemp);
      } else {
      }
    });
  });
}

getUser(2)
  .then(getWeather)
  .then(weather => console.log(weather))
  .catch(error => console.log(error));
