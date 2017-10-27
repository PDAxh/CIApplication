const request = require('request');
var fs = require('fs');

var options = {
    url: 'https://api.github.com/repos/PDAxh/Jenkins/commits/b96d94c9176b4cbdae290ace6f1981b95d856a79',
    headers: {
        'User-Agent': 'request'
    },
    method: 'GET',

};

var data;

request(options, function(error, response, body){
    if(error) console.log(error);
    else  {
        //console.log(JSON.parse(body));
        data = JSON.parse(body);
        console.log(data);
    }
});






