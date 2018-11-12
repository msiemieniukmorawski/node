// 7.
const argv = require('yargs').argv
let a = argv.a
let b = argv.b
let operation = argv.operation

setTimeout(() => {
    if (operation === '*') {
        console.log(a * b)
    } else if (operation === '/') {
        console.log(a / b)
    }
}, 1000);