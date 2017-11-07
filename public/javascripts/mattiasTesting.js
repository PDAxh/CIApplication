const request = require('request');


var test = [{name: 'One', date: '2017-11-07 10:20:58'},{name: 'One', date: '2018-11-06 07:20:58'},{name: 'One', date: '2017-11-07 08:20:58'}];

test.sort(function compare(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateA - dateB;
});

console.log(test);

/*
var options = {
    url: 'http://10.2.2.33:8080/job/MattiasTest2-maven-job/lastBuild/api/json?pretty=true',
    headers: {
        'User-Agent': 'request'
    },
    'auth': {
        'user': 'admin1',
        'pass': 'admin1',
        'sendImmediately': true
    },
    json: true
};

request.get(options, function (error, response, body) {
    console.log(body.actions[7].text);


});*/
