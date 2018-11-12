const request = require('request');
const fs = require('fs')
const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request.get('https://api.github.com/users/msiemieniukmorawski', requestOptions, function(error, response, body) {
    if (body) {
        let jsonBody = JSON.parse(body);
        let userName = jsonBody.login;
        setTimeout(function() {
            fs.appendFile('githubUserName.txt', userName, () => {
                console.log('the record has been finished');
            });
        }, 1000);
    }
});