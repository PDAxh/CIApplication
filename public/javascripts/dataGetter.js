/*
 * dataGetter.js is used for gathering all jobs created in the Jenkins server.
 * It consists of following steps:
 * -------------------------------------------------------------------------------------------------------------------
 * 1.1. exports.GetAllJobs() is called from index.js whenever user requests '/results' page
 * 1.2. Creates an array jobsList[] and fills it with job objects. This array is sent through all dataGetter functions
 * 1.3. Fills all job objects with property 'name'
 * 1.4. Executes getCheckStyle()
 * -------------------------------------------------------------------------------------------------------------------
 * 2.1. getCheckStyle() fills all job objects with properties 'checkstyle' and 'checkstyleNew'
 * 2.2. Executes getFindbugs()
 * -------------------------------------------------------------------------------------------------------------------
 * 3.1  getFindbugs() fills all job objects with properties 'findbugs' and 'findbugsNew'
 * 3.2. Executes getCommitInfo()
 * -------------------------------------------------------------------------------------------------------------------
 * 4.1  getCommitInfo() fills all job objects with properties 'commitUrl', 'pushDate' and 'commitComment'
 * 4.2  Executes index.loadJobs(jobsList) now that the jobs array is complete with data
 * -------------------------------------------------------------------------------------------------------------------
 */


const request = require('request');
const index = require('../../routes/index.js');

// 1. Creates array filled with job objects, gathers job names
exports.getAllJobs = function (host) {
    var jobsList = [];
    var link = host + '/api/json?pretty=true';
    var options = {
        url: link,
        auth: {
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
                checkstyleNew: '',
                findbugs: '',
                findbugsNew: '',
                commitId: '',
                author: '',
                gitUser: '',
                pushDate: '',
                commitComment: '',
                commitUrl: ''
            });
        });
        getCheckStyle(host, 'lastBuild', jobsList) // Go to next step, fill with checkstyle-results
    });
};

// 2. Gathers checkstyle-results
function getCheckStyle(host, buildNr, jobsList) {
    var i = 0;

    // Looping through jobslist, attaching checkstyle-results to each job object
    jobsList.forEach(function(job) {
        var reportLink = host + '/job/' + job.name + '/' + buildNr + '/checkstyleResult/api/json';

        var options = {
            url: reportLink,
            auth: {
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
                if(jobsList[j].name === job.name && typeof body.numberOfWarnings !== 'undefined') {
                    jobsList[j].checkstyle = body.numberOfWarnings;
                    jobsList[j].checkstyleNew = body.numberOfNewWarnings;
                }
            }
            i++;
            if(i === jobsList.length)
                getFindbugs(host, 'lastBuild', jobsList) //Go to step 3, gather findbugs-results
        });
    });
}

// 3. Gathers findbugs-results
function getFindbugs(host, buildNr, jobsList) {
    var i = 0;

    jobsList.forEach(function(job) {
        var reportLink = host + '/job/' + job.name + '/' + buildNr + '/findbugsResult/api/json';

        var options = {
            url: reportLink,
            auth: {
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
                if(jobsList[j].name === job.name && typeof body.numberOfWarnings !== 'undefined') {
                    jobsList[j].findbugs = body.numberOfWarnings;
                    jobsList[j].findbugsNew = body.numberOfNewWarnings;
                }
            }
            i++;
            if(i === jobsList.length)
                getCommitInfo(host, buildNr, jobsList); //Go to step 4, gather latest commit-info
        });
    });
}

// 4 Get commidId, commitUrl, lastPushDate, lastCommitComment
function getCommitInfo(host, buildNr, jobsList) {
    var i= 0;
    var fullLink;

    jobsList.forEach(function(job) {
        fullLink = host + '/job/' + job.name + '/' + buildNr + '/api/json?pretty=true';

        var options = {
            url: fullLink,
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

        request.get(options, function(error, response, body){
            var gitUser = '-';
            var author = '-';
            var gitUrl = '-';
            var date = "1900-01-01 00:00:00 +0100";
            var comment = "-";
            var commitId = "-";

            if(typeof body.changeSet.items[0] !== 'undefined') {
                for(var n = 0; n < body.changeSet.items.length; n++) {
                    var date = body.changeSet.items[n].date;
                    var comment = body.changeSet.items[n].comment;
                    var commitId = body.changeSet.items[n].commitId;
                    author = body.changeSet.items[n].author.fullName;
                }

                for(var o = 0; o < body.actions.length; o++) {
                    if(typeof body.actions[o].remoteUrls !== 'undefined') {
                        gitUrl = body.actions[3].remoteUrls[0] + '/commit/' + commitId;
                        var gitUrlSplit = gitUrl.split('.com/');
                        var gitUrlSplit2 = gitUrlSplit[1].split('/');
                        gitUser = gitUrlSplit2[0];
                    }
                }
            }

            // For loop is to deal with data returning in random order because of varying request times
            for(var j = 0; j < jobsList.length; j++) {
                if(jobsList[j].name === job.name) {
                    jobsList[j].commitId = commitId;
                    jobsList[j].gitUser = gitUser;
                    jobsList[j].author = author;
                    jobsList[j].pushDate = date;
                    jobsList[j].commitComment = comment;
                    jobsList[j].commitUrl = gitUrl;
                }
            }
            i++;
            if(i === jobsList.length)
                index.loadJobs(jobsList); //Send for building results table with jobsList
        });
    });
}