//Stwórzmy Promise wykorzystujący funkcję `setTimeout` która wykona się po 5 sekundach i rozwiąże nasz Promise z naszym przywitaniem `Hello world!`
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (resolve) {
      resolve("Hello world!");
    } else {
      reject("błąd/przyczyna błędu itp...");
    }
  }, 5000);
});

myPromise.then(result => {
  console.log(result);
});
