const request = require('request');
const index = require('../../routes/index.js');

// 1. Creates array filled with job objects, gathers job names
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
        body.jobs.forEach(function(index) {
            jobsList.push({
                name: index.name,
                checkstyle: '',
                findbugs: ''
            });
        });
        getCheckStyle(host, 'lastBuild', jobsList) // Go to next step, fill with checkstyle-results
    });
};

// 2. Gathers checkstyle-results
function getCheckStyle(host, buildNr, jobsList) {
    var i = 0;  // counter
    var tempList = [];
    // Looping through jobslist, attaching checkstyle-results to each job object
    jobsList.forEach(function(job) {

            //console.log("getCheckstyle namn " + i + ": " + job.name);
            var reportLink = host + '/job/' + job.name + '/' + buildNr + '/checkstyleResult/api/json';

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
                // For loop is to deal with data returning in random order because of varying request times
                for(var j = 0; j < jobsList.length; j++) {
                    if(jobsList[j].name === job.name)
                        jobsList[j].checkstyle = body.numberOfWarnings;
                }
                i++;
                if(i === jobsList.length)
                    getFindbugs(host, 'lastBuild', jobsList) // //Goto step 3, gather findbugs-results
            });
    });
}

// 3. Gathers findbugs-results
function getFindbugs(host, buildNr, jobsList) {
    console.log('Mattias maven job har ' + jobsList[1].checkstyle + ' checkstylevarningar');
    var i = 0;

    jobsList.forEach(function(job) {
        var reportLink = host + '/job/' + job.name + '/' + buildNr + '/findbugsResult/api/json';

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
            // For loop is to deal with data returning in random order because of varying request times
            for(var j = 0; j < jobsList.length; j++) {
                if(jobsList[j].name === job.name)
                    jobsList[j].findbugs = body.numberOfWarnings;
            }
            i++;
            if(i === jobsList.length)
                index.loadJobs(jobsList);   //Send for building table
        });
    });
}

function getLatestCommit() {

}

// Get a list of all job names on Jenkins server
exports.getAllJobNames = function (host) {
    var reportLink = 'http://10.90.131.114:8080/job/Mavenproject/HTML_Report/';
    //var reportLink = host + '/job/' + jobName + '/' + buildNr + '/HTML_Report';
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

    request.get(options, function (error, response, body) {
        open(reportLink, function (err) {
            if (err) throw err;
        });

    });
};

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