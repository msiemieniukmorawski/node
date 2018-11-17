const request = require('request');

request('https://jsonplaceholder.typicode.com/users/2', function(error, response, body) {
    if (error) {

    } else if (response.statusCode === 200) {
        let person = body;
        let personObj = JSON.parse(person)
        console.log('lat ' + personObj.address.geo.lat);
        console.log('lng ' + personObj.address.geo.lng);
    }
});