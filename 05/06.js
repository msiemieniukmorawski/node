const axios = require("axios");
getUser = async () => axios.get("https://jsonplaceholder.typicode.com/users/2");

(async () => {
  console.log(await getUser());
})();
