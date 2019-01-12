const adduser = require("./post");
const getUser = require("./get");
const changeUser = require("./put");

const newUserData = {
  name: "Nicholas Runolfsdottir V",
  username: "Maxime_Nienow",
  email: "Sherwood@rosamond.me",
  address: {
    street: "Ellsworth Summit",
    suite: "Suite 729",
    city: "Aliyaview",
    zipcode: "45169",
    geo: {
      lat: "-14.3990",
      lng: "-120.7677"
    }
  },
  phone: "586.493.6943 x140",
  website: "jacynthe.com",
  company: {
    name: "Abernathy Group",
    catchPhrase: "Implemented secondary concept",
    bs: "e-enable extensible e-tailers"
  }
};
const changeUserData = {
  name: "Marcin Siemieniuk-Morawski"
};
const id = 9;

// adduser.addUser(newUserData);
// getUser.getUser(id);
changeUser.changeUser(id, changeUserData);