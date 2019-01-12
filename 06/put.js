const axios = require("axios");

const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports.changeUser = (userID, data) => {
  myAxios
    .patch(`http://localhost:4800/users/${userID}`, data)
    .then(response => {
      console.log(`response ${response.statusText} data: ${response.data}`);
      return `response ${response.statusText} name: ${response.data.name}`;
    });
};
