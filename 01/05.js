const Mymath = require('./Mymath2.js');

let args = process.argv.slice(2);
let arg1 = parseInt(args[0]);
let arg2 = parseInt(args[1]);
let arg3 = args[2];

if (arg3 == '+') {
    console.log(Mymath.add(arg1, arg2))
} else if (arg3 == '-') {
    console.log(Mymath.sub(arg1, arg2))
}