const axios = require("axios");

const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports.addUser = newUserData => {
  myAxios.post("http://localhost:4800/users", newUserData).then(response => {
    // console.log(`response ${response.statusText} id: ${response.data.id}`);
    return `response ${response.statusText} id: ${response.data.id}`;
  });
};
