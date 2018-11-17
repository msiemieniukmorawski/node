const argv = require('yargs').argv;
const fs = require('fs');

function saveToFile(argv) {
    let person = {
        "name": argv.name,
        "lastname": argv.lastname
    }
    let personString = JSON.stringify(person);
    fs.writeFile('01.txt', personString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

saveToFile(argv)