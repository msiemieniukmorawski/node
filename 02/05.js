// 5.
const argv = require('yargs').argv
let a = argv.a
let b = argv.b
let operation = argv.operation
if (operation === '*') {
    console.log(a * b)
}