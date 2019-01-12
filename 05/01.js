// const fs = require("fs");

// let fileContent = fs.readFileSync("./user.json", "utf8", (err, data) => {
//   try {
//     if (err) throw err;
//     return data;
//   } catch (err) {
//     console.log(err.message);
//   }
// });
// try {
//   JSON.parse(fileContent);
// } catch (err) {
//   console.log(err);
// }

const { readFileSync } = require("fs");
try {
  const data = readFileSync("user.json");
  const user = JSON.parse(data);
  console.log("parse OK");
} catch (err) {
  console.log(err.message);
} finally {
}
