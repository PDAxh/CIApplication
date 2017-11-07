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
                checkstyleNew: '',
                findbugs: '',
                findbugsNew: '',
                commitId: '',
                author: '',
                gitUser: '',
                pushDate: '',
                commitComment: '',
                commitUrl: '',
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
                if(jobsList[j].name === job.name && typeof body.numberOfWarnings !== 'undefined') {
                    jobsList[j].checkstyle = body.numberOfWarnings;
                    jobsList[j].checkstyleNew = body.numberOfNewWarnings;
                }
            }
            i++;
            if(i === jobsList.length)
                getFindbugs(host, 'lastBuild', jobsList) // //Goto step 3, gather findbugs-results
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
                if(jobsList[j].name === job.name && typeof body.numberOfWarnings !== 'undefined') {
                    jobsList[j].findbugs = body.numberOfWarnings;
                    jobsList[j].findbugsNew = body.numberOfNewWarnings;
                }
            }
            i++;
            if(i === jobsList.length)
                getCommitInfo2(host, buildNr, jobsList);
                //index.loadJobs(jobsList);   //Send for building table
        });
    });
}

// 4. Get commidId, commitUrl, lastPushDate, lastCommitComment
function getCommitInfo(host, buildNr, jobsList) {
    var cheerio = require("cheerio");
    var i= 0;
    var gitProject; // = gitusername/projectname
    var commitIdentifier;
    var date = '';
    var comment = '';
    var fullLink; // Link is used to access github api and extract username + date & time of specific commit

    jobsList.forEach(function(job) {
        console.log(job.name);
        fullLink = host + '/job/' + 'MattiasTest2-maven-job' + '/' + buildNr + '/api/json?pretty=true';

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
            var cheerio = require("cheerio");

            for(var o = 0; o < body.actions.length; o++) {
                if(typeof body.actions[o].text !== 'undefined')
                    var htmlObj = body.actions[o].text;
            }

            //console.log(htmlObj);

            var c = cheerio.load(htmlObj);
            var lastCommit = c(".commit").html();
            var time = c(".commitTime").html();
            var author = c(".author").html();
            var message = c(".message").html();
            var commitLink = c("a").attr("href");

            console.log("------ " + job.name + " -------");
            console.log("Commit: " + lastCommit);
            console.log("Author: " + author);
            console.log("Date & Time: " + time);
            console.log("Message: " + message);


            // For loop is to deal with data returning in random order because of varying request times
            for(var j = 0; j < jobsList.length; j++) {
                if(jobsList[j].name === job.name) {
                    jobsList[j].commitId = lastCommit;
                    jobsList[j].commitAuthor = author;
                    jobsList[j].pushDate = time;
                    jobsList[j].commitComment = message;
                    jobsList[j].commitUrl = commitLink;
                }
            }
            i++;
            if(i === jobsList.length)
                index.loadJobs(jobsList);   //Send for building table
        });
    });

}

// 4 alternative. Get commidId, commitUrl, lastPushDate, lastCommitComment
function getCommitInfo2(host, buildNr, jobsList) {
    var i= 0;
    var gitProject; // = gitusername/projectname
    var commitIdentifier;
    var date = '';
    var comment = '';
    var fullLink; // Link is used to access github api and extract username + date & time of specific commit

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

            if(typeof body.changeSet.items[0] !== 'undefined') {
                for(var n = 0; n < body.changeSet.items.length; n++) {
                    var date = body.changeSet.items[n].date;
                    var comment = body.changeSet.items[n].comment;
                    var commitId = body.changeSet.items[n].commitId;
                    var author = body.changeSet.items[n].author.fullName;
                }

                for(var o = 0; o < body.actions.length; o++) {
                    if(typeof body.actions[o].remoteUrls !== 'undefined') {
                        var gitUrl = body.actions[3].remoteUrls[0] + '/commit/' + commitId;
                        var gitUrlSplit = gitUrl.split('.com/');
                        var gitUrlSplit2 = gitUrlSplit[1].split('/');
                        gitUser = gitUrlSplit2[0];
                        console.log(gitUrl);
                    }
                }
            } else {
                var date = "1900-01-01 00:00:00 +0100";
                var comment = "-";
                var commitId = "-";
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
                index.loadJobs(jobsList);   //Send for building table
        });
    });

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