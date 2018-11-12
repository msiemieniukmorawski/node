const os = require('os')
const fs = require('fs')
const userInfo = os.userInfo().username
const userHomedir = os.userInfo().homedir
fs.appendFile('01a.txt', userInfo, () => {});