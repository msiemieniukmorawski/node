// 6. 
const os = require('os');
console.log('start app');
setTimeout(() => {
    let name = os.userInfo().username;
    console.log('hello ' + name);
}, 5000);