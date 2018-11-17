// 7.
const argv = require('yargs').argv;
const myMath = require('./my-math');
let a = argv.a
let b = argv.b
let operation = argv.operation

if (operator === '*') {
    myMath.multiply(a, b, function (result) {
        console.log('result', result);
    });
} else {
    myMath.divide(a, b, function (result) {
        console.log('result', result);
    });
}