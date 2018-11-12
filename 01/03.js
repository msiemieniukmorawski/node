let args = process.argv.slice(2);
let hello = 'Hello ';
console.log((args === []) ? hello + args : hello + 'Word');