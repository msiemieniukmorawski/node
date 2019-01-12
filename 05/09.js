const axios = require("axios");
const userArray = [2, 3, 5, 7, 8, 10];

getUser = user =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${user}`);

getWeather = (lat, lng) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
  );

(async () => {
  try {
    await Promise.all(userArray.map(user => getUser(user))).then(argsUser => {
      Promise.all(
        argsUser.map(arg =>
          getWeather(arg.data.address.geo.lat, arg.data.address.geo.lng)
        )
      ).then(argsWeather => {
        console.log(argsUser[0].data.name);
        console.log(argsWeather[0].data.main.temp);
      });
    });
  } catch {
    console.log("error");
  }
})();
