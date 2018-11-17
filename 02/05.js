// 5.
const argv = require('yargs').argv
const Mymath = require('./Mymath.js');

let args = process.argv.slice(2);
let arg1 = parseInt(args[0]);
let arg2 = parseInt(args[1]);
let arg3 = args[2];

if (operator === '*') {
    myMath.multiply(a, b, function (result) {
        console.log('result', result);
    });
} else {
    myMath.divide(a, b, function (result) {
        console.log('result', result);
    });
}