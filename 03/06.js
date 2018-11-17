const request = require('request');
const argv = require('yargs').argv;
let userId = argv.id;

function getUser(userId) {
    request('https://jsonplaceholder.typicode.com/users/' + userId, function(error, response, body) {
        if (error) {
            console.log('error:', error);
        } else if (response.statusCode === 200) {
            let person = body;
            let personObj = JSON.parse(person)
            console.log(personObj.name);
            console.log('lat ' + personObj.address.geo.lat);
            console.log('lng ' + personObj.address.geo.lng);
        } else {
            console.log('User not found.')
        }
    });
}

getUser(userId);