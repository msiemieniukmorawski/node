const fs = require('fs');

function readFile() {
    fs.readFile('./01.txt', 'utf8', (err, data) => {
        if (err) throw err;
        let personString = data;
        let personObject = JSON.parse(personString);
        console.log(personObject.name)
    });

}

readFile()