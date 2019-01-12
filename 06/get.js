const axios = require("axios");

const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports.getUser = userID => {
  myAxios.get(`http://localhost:4800/users/${userID}`).then(response => {
    // console.log(`response ${response.statusText} name: ${response.data.name}`);
    return `response ${response.statusText} name: ${response.data.name}`;
  });
};
