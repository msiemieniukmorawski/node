const os = require('os')
const fs = require('fs')
const userInfo = os.userInfo().username
const userHomedir = os.userInfo().homedir

fs.writeFile('01bWire.txt', userInfo, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.writeFileSync('01bWriteSync.txt', userInfo, 'utf8', () => {});

fs.appendFile('01bAppend.txt', userHomedir, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});