const request = require('request');
const argv = require('yargs').argv;
let login = argv.login;
let url;
if (login) {
    url = 'https://api.github.com/users/' + login;
} else {
    url = 'https://api.github.com/users/msiemieniukmorawski';
}
const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request.get(url, requestOptions, function(error, response, body) {
    if (body) {
        console.log(body);
    }
});