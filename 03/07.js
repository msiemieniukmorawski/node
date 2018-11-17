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
            getWeather(personObj.address.geo);
        } else {
            console.log('User not found.')
        }
    });
}

function getWeather(latLong) {
    request('https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=' + latLong.lat + '&lon=' + latLong.lng,
        function(error, response, body) {
            if (error) {
                console.log('error:', error);
            } else if (response.statusCode === 200) {
                let weather = body;
                let weatherObj = JSON.parse(weather)
                console.log('temp: ' + weatherObj.main.temp);

            } else {
                console.log('User not found.')
            }
        });
}

getUser(userId);