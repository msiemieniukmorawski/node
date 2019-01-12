const axios = require("axios");

const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports.deleteUser = userID => {
  myAxios.delete(`http://localhost:4800/users/${userID}`).then(response => {
    console.log(`response ${response.statusText}`);
    return `response ${response.statusText} name: ${response.data.name}`;
  });
};
