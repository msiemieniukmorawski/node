const fs = require('fs');

function readFile() {
    fs.readFile('./02.txt', 'utf8', (err, data) => {
        if (err) {
            if (err.errno === -4058) {
                console.log('niepoprawny plik')
            }
        } else {
            let personString = data;
            let personObject = JSON.parse(personString);
            console.log(personObject.name)
        }
    });

}

readFile()