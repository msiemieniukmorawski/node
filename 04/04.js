//Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki `request` i pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). Przeróbmy tak wywołanie naszego zapytania aby wykorzystywało Promise zamiast Callback:
const request = require("request");

function getUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode === 200) {
        resolve(body);
      } else {
      }
    });
  });
}

getUser(2)
  .then(user => console.log(user))
  .catch(error => console.log(error));
