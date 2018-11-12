const Mymath = require('./Mymath2.js');

let args = process.argv.slice(2);
let arg1 = parseInt(args[0]);
let arg2 = parseInt(args[1]);

console.log(Mymath.add(arg1, arg2))