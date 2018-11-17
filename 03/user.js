const request = require('request');
module.exports.getUser = function(userId, callback) {


    request('https://jsonplaceholder.typicode.com/users/' + userId, function(error, response, body) {
        if (error) {
            let responseUser = 'error: ' + error
            console.log(responseUser);

        } else if (response.statusCode === 200) {
            let responseUser = body
            callback(responseUser);

        } else {
            let responseUser = 'User not found.'
            console.log(responseUser);
        }
    });



};