const request = require('request');
var jobname;
var lastBuild;
const host1 = 'http://10.90.131.114:8080/job/';
var fullLink = 'host1'+jobname+'/'+lastBuild+'/HTML_Report';

var resultConnection = {
    url: fullLink,
    'auth': {
        'user': 'admin1',
        'pass': 'admin1',
        'sendImmediately': true
    },
    json: true
};

//Get user info on who made the commit, and date&time of commit
function getreporthtml() {
    var request = url.format({
        protocol: req.protocol,
        host: req.get(fullLink),
        pathname: req.originalUrl,
    });

}


