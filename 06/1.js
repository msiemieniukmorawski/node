const axios = require("axios");
const newUserData = {
  name: "Marcin",
  username: "MSM",
  email: "msiemieniukmorawski@gmail.com"
};
const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});
myAxios.post("http://localhost:4800/users", newUserData).then(response => {
  console.log(`response ${response.statusText} id: ${response.data.id}`);
});
