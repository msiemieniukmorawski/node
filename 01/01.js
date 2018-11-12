//console.log('hellow word');

const os = require('os')
const fs = require('fs')
const userInfo = os.userInfo().username
const userHomedir = os.userInfo().homedir


// fs.appendFile('test.txt', userInfo.username, () => {});

// fs.writeFile('test.txt', userInfo, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.writeFileSync('test.txt', userInfo, 'utf8', () => {});

// fs.appendFile('test.txt', userHomedir, (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log(fs.readFileSync('./test.txt', 'utf8'))