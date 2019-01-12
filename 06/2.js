const adduser = require("./post");
const getUser = require("./get");

const newUserData = {
  name: "Marcin",
  username: "MSM",
  email: "msiemieniukmorawski@gmail.com"
};

const id = 9;

console.log(adduser.addUser(newUserData));
console.log(getUser.getUser(id));
