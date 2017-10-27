const request = require('request');
var url = require('url');

function gethtmlresult(req) {
    return url.format({
        protocol: req.protocol,
        host: req.get('http://10.90.131.179:8080/job/'+jobname+'/'+lastBuild+'/HTML_Report/'),
        pathname: req.originalUrl
    });

}