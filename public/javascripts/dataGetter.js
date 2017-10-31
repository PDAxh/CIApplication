const request = require('request');

/*var gitProject; // = gitusername/projectname
var commitIdentifier;

var fullLink; // Link is used to access github api and extract username + date & time of specific commit

var author;
var gitUserName;
var dateTime;
var date;
var time;



// Get Git project name and commit-identifier
var options = {
    url: 'http://10.90.131.179:8080/job/Mavenproject/62/api/json?pretty=true',
    'auth': {
        'user': 'admin1',
        'pass': 'admin1',
        'sendImmediately': true
    },
    json: true

};
request.get(options, function(error, response, body){
    commitIdentifier = body.actions[3].lastBuiltRevision.SHA1;
    console.log('CommitIdentifier: ' + commitIdentifier);

    var data = String(body.actions[3].remoteUrls);
    var splitter = data.split('com/');
    gitProject = splitter[1];
    console.log('Git Project: ' + gitProject);

    fullLink = 'https://api.github.com/repos/' + gitProject + '/commits/' + commitIdentifier;
    console.log('Full get link is: ' + fullLink);
    console.log('');

    getCommitInfo();
});


//Get user info on who made the commit, and date&time of commit
function getCommitInfo() {
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
        var dateTimeS = dateTime.split('T');
        date = dateTimeS[0];
        var timeS = dateTimeS[1].split('Z');
        time = timeS[0];

        console.log('LAST COMMIT INFO:');
        console.log('Author: ' + author);
        console.log('Git username: ' + gitUserName);
        console.log('Date: ' + date + '\nTime: ' + time);
    });
}*/

//Get findbugs report data on specific job and build
exports.getFindbugsReport = function (host, jobName, buildNr) {
    var reportLink = host + '/job/' + jobName + '/' + buildNr + '/findbugsResult/api/json';

    var options = {
        url: reportLink,
        'auth': {
            'user': 'admin1',
            'pass': 'admin1',
            'sendImmediately': true
        },
        headers: {
            'User-Agent': 'request'
        },
        json: true
    };

    request.get(options, function(error, response, body){
        var data = body;
        console.log('\n---- Findbugs results ----');
        console.log('Number of new warnings: ' + data.numberOfNewWarnings);
        console.log('Number of warnings: ' + data.numberOfWarnings);
    });
};

//Get checkstyle report data on specific job and build
exports.getCheckstyleReport = function (host, jobName, buildNr) {
    var reportLink = host + '/job/' + jobName + '/' + buildNr + '/checkstyleResult/api/json';

    var options = {
        url: reportLink,
        'auth': {
            'user': 'admin1',
            'pass': 'admin1',
            'sendImmediately': true
        },
        headers: {
            'User-Agent': 'request'
        },
        json: true
    };

    request.get(options, function(error, response, body){
        /*console.log('\n----' + jobName + ' Checkstyle results ----');
        console.log('Number of new warnings: ' + body.numberOfNewWarnings);
        console.log('Number of warnings: ' + body.numberOfWarnings);*/
        return body.numberOfWarnings;
    });
};

// Creates array filled with job objects
exports.getAllJobs = function (host) {
    var jobsList = [];
    var link = host + '/api/json?pretty=true';
    var options = {
        url: link,
        'auth': {
            'user': 'admin1',
            'pass': 'admin1',
            'sendImmediately': true
        },
        headers: {
            'User-Agent': 'request'
        },
        json: true
    };
    request.get(options, function(error, response, body){

        /*body.jobs.each(function() {
            jobsList.push({
                name: body.jobs[i].name,
                checkstyle: exports.getCheckstyleReport(host, body.jobs[i].name, 'lastBuild'),
                findbugs: 17});
        });*/
        for(var i = 0; i < body.jobs.length; i++) {
            jobsList.push({
                name: body.jobs[i].name,
                checkstyle: exports.getCheckstyleReport(host, body.jobs[i].name, 'lastBuild'),
                findbugs: 17
            });
        }
        //exports.getCheckstyleReport(host, jobsList[8].name, 'lastBuild');

        /*loadcheckstyleResults(jobsList);
        function loadcheckstyleResults(jobsList) {
            for(var i = 0; i < jobsList.length; i++) {
                jobsList[i].checkstyle = exports.getCheckstyleReport(host, jobsList[i].name, 'lastBuild');
            }
        }*/
        index.loadJobs(jobsList);
    });
};

// Get a list of all job names on Jenkins server
exports.getAllJobNames = function (host) {
    var link = host + '/api/json?pretty=true';
    var options = {
        url: link,
        'auth': {
            'user': 'admin1',
            'pass': 'admin1',
            'sendImmediately': true
        },
        headers: {
            'User-Agent': 'request'
        },
        json: true
    };

    request.get(options, function(error, response, body){
        console.log(body.jobs);
        var jobsList = [];
        for(i = 0; i < body.jobs.length; i++) {
            jobsList.push(body.jobs[i].name);
        }
        console.log(jobsList);
    });
};
// Kolla om funktion fungerar när knappar jkkommit up

exports.getreportDetails = function (host, jobName, buildNr) {
    var reportLink = 'http://10.90.131.114:8080/job/Mavenproject/HTML_Report/';
    //var reportLink = host + '/job/' + jobName + '/' + buildNr + '/HTML_Report';
    function getDetailResults(req) {

        var gethtml = {
            url: reportLink,
            'auth': {
                'user': 'admin1',
                'pass': 'admin1',
                'sendImmediately': true
            },
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(gethtml, function (error, response, body) {
            open(reportLink, function (err) {
                if (err) throw err;
            });

        });
    }
};