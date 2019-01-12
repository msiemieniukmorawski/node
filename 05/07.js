const axios = require("axios");
getUser = () => axios.get("https://jsonplaceholder.typicode.com/users/2");

(async () => {
  try {
    console.log(await getUser());
  } catch ({ response: { statusText: } }) {
    console.log(statusText);
  }
})();
