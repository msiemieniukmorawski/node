//Zmodyfikujmy zadanie 4 tak aby pobrać kilku użytkowników w tej samej chwili wykorzystując `Promise.all()`. Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,3,5,7,8,10). Poinformujmy iż nasz Promise został w pełni rozwiązany.
const request = require("request");
let id = [2, 3, 5, 7, 8, 10];

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

// getUser(2).then(user => console.log(user))
//     .catch(error => console.log(error))

Promise.all(id.map(x => getUser(x)))
  .then(resp => {})
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
