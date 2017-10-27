const request = require('request');

var gitProject;
var commitIdentifier;

var fullLink;
// = https://api.github.com/repos/PDAxh/Jenkins/commits/b96d94c9176b4cbdae290ace6f1981b95d856a79

var author;
var gitUserName;
var dateTime;
var date;
var time;



// Getting Git project name and commit identifier
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
    console.log('')
    getCommitInfo();
});




//var gitProject = 'PDAxh/Jenkins';
//var commitIdentifier = 'b96d94c9176b4cbdae290ace6f1981b95d856a79';


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

        console.log('Author: ' + author);
        console.log('Git username: ' + gitUserName);
        console.log('Date & time: ' + dateTime);
    });
}


