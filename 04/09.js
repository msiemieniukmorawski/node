//Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście albumie i przypisanych do niego zdjęciach. Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika. Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich. Z pobranych zdjęć wyświetlmy wszystkie tytuły. Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek (.catch())

const axios = require("axios");

getUser = () => axios.get("https://jsonplaceholder.typicode.com/users/2");
getAlbums = () =>
  axios.get("https://jsonplaceholder.typicode.com/albums?userId=2");
getImages = () =>
  axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");

Promise.all([getUser(), getAlbums(), getImages()]).then(args => {
  let user = args[0].data;
  let albums = args[1].data;
  let images = args[2].data;
  console.log(user.name);
  console.log(albums[0].title);
  console.log(albums.length);
  console.log(images.map(img => img.title));
});
