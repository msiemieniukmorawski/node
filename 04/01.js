//Stwórzmy pierwszy nasz obiekt Promise, który zwróci nam w rezultacie `Hello world!`
const myPromise = new Promise((resolve, reject) => {
  if (resolve) {
    resolve("Hello world!");
  } else {
    reject("błąd/przyczyna błędu itp...");
  }
});

myPromise.then(result => {
  console.log(result);
});
