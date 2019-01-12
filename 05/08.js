const axios = require("axios");
const userArray = [2, 3, 5, 7, 8, 10];

getUser = user =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${user}`);

(async () => {
  try {
    await Promise.all(userArray.map(user => getUser(user))).then(args => {
      let user1 = args[0].data.name;
      let user2 = args[1].data.name;
      let user3 = args[2].data.name;
      let user4 = args[3].data.name;
      let user5 = args[4].data.name;
      let user6 = args[5].data.name;
      console.log(user1);
      console.log(user2);
      console.log(user3);
      console.log(user4);
      console.log(user5);
      console.log(user6);
    });
  } catch {
    console.log("error");
  }
})();
