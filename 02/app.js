const _ = require('lodash');

//1.
// let list = ['ala', 3, 'ma', 'kota', 1, 'ala', 1, 4, 3];
// console.log(_.uniq(list));


//3.
// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];
// console.log(_.xor(tabB, tabA));

//4. 
// let list = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
// console.log(_.max(list));
// console.log(_.min(list));

// 5.
// const argv = require('yargs').argv
// let a = argv.a
// let b = argv.b
// let operation = argv.operation
// if (operation === '*') {
//     console.log(a * b)
// }

// 6. 
// const os = require('os');
// console.log('start app');
// setTimeout(() => {
//     let name = os.userInfo().username;
//     console.log('hello ' + name);
// }, 5000);


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