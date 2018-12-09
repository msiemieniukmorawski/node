//Dodajmy do zadania 9 kolejny element łańcucha o zapis wczytanej listy zdjęć. Wykorzystujemy tutaj moduł wbudowany `fs` i funkcje `writeFile`. Zamiast opakowywać samodzielnie funkcję w Promise wykorzystajmy wbudowane narzędzie z modułu `util` (więcej na: https://nodejs.org/dist/latest-v11.x/docs/api/util.html#util_util_promisify_original)

const axios = require("axios");
const util = require("util");
const fs = require("fs");

getUser = () => axios.get("https://jsonplaceholder.typicode.com/users/2");
getAlbums = () =>
  axios.get("https://jsonplaceholder.typicode.com/albums?userId=2");
getImages = () =>
  axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");

Promise.all([getUser(), getAlbums(), getImages()]).then(args => {
  callStat(args);
});

const writeFilePromise = util.promisify(fs.writeFile);

async function callStat(args) {
  let user = args[0].data;
  let albums = args[1].data;
  let images = args[2].data;

  let message = `user name: ${user.name}; \n title first album: ${
    albums[0].title
  }; \n number albums: ${albums.length}; \n list title: ${images.map(
    img => img.title + "\n"
  )}`;

  writeFilePromise("./04/10.txt", message)
    .then(() => console.log("file created successfully with promisify!"))
    .catch(error => console.log(error));
}
