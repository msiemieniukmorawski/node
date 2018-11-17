const request = require('request');
module.exports.getWeather = function(weatherLanLng, callback) {
    request('https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=' + weatherLanLng.lat + '&lon=' + weatherLanLng.lng,
        function(error, response, body) {
            if (error) {
                console.log('error:', error);
            } else if (response.statusCode === 200) {
                let weather = body;
                callback(weather);

            } else {
                console.log('User not found.')
            }
        });



};