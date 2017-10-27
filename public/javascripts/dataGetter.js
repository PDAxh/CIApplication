const request = require('request');
var fs = require('fs');

var data;
var author;
var gitUserName;
var dateTime;

var gitProject = 'PDAxh/Jenkins';
var commitIdentifier = 'b96d94c9176b4cbdae290ace6f1981b95d856a79';

var fullLink = 'https://api.github.com/repos/' + gitProject + '/commits/' + commitIdentifier;
// = https://api.github.com/repos/PDAxh/Jenkins/commits/b96d94c9176b4cbdae290ace6f1981b95d856a79

var options = {
    url: fullLink,
    headers: {
        'User-Agent': 'request'
    },
    json: true

};

request.get(options, function(error, response, body){
    data = body;
    author = body.commit.author.name;
    gitUserName = body.author.login;
    dateTime = body.commit.author.date;

    console.log('Author: ' + author);
    console.log('Git username: ' + gitUserName);
    console.log('Date & time: ' + dateTime);
});

console.log("The author is: " + author);