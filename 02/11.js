const request = require('request');

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request.get('https://api.openweathermap.org/data/2.5/weather?id=858789&APPID=0ed761300a2725ca778c07831ae64d6e', function(error, response, body) {
    if (body) {
        console.log(JSON.parse(body));
    }
});