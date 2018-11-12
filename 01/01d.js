const os = require('os')
const fs = require('fs')
const userInfo = os.userInfo().username
const userHomedir = os.userInfo().homedir


fs.readFile('./01a.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log(fs.readFileSync('./01a.txt', 'utf8'))