const argv = require('yargs').argv;
const user = require('./user');
const weather = require('./weather');

let userId = argv.id;

function printWeather(userWeather){
	let userWeatherObj = JSON.parse(userWeather);
	console.log('temp: ' + userWeatherObj.main.temp)
}

function callback(userDate) {
	let userDateObj = JSON.parse(userDate);
    console.log(userDateObj.name);
    console.log('lat ' + userDateObj.address.geo.lat);
    console.log('lng ' + userDateObj.address.geo.lng);
    let userLatLng = userDateObj.address.geo;
    weather.getWeather(userLatLng, printWeather);
}


user.getUser(userId, callback)