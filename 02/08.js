const request = require('request');

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request.get('https://api.github.com/users/msiemieniukmorawski', requestOptions, function(error, response, body) {
    if (body) {
        console.log(body);
    }
});