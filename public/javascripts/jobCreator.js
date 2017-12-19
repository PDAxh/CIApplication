/**
 * jobCreator purpose is to do just as it stand, creates the job depending och users selection.
 *
 * 1.1 Creates new java-maven projects, using blueprints for each type of project avaible
 * 1.2 Function that selects job blueprints for project, this one need to be worked with futheron to fit more projects
 *
 * 2.1 Git global configure variables
 * 2.2 Declares global variables and setup for yml file.
 *
 * 3.1 Using job builder to create new job from json file,
 * trying to establis connection via ssh keys.
 * - this part is a work in progress, TODO Get ssh connection work propertly need to be done ASAP before anythiong else
 *
 */



//1.1 Creates a new Jenkins job for a Java Maven project

exports.createJavaMavenJob = function (newJobName, newGitRepo, checkCheck, checkBugs, sshKey, username) {
    console.log('Function createJavaMavenJob initialized');
    var yaml = require('js-yaml');
    var fs = require('fs');

 //1.2 Function that selects job blueprints for project

    if ((checkCheck === 'on') && (checkBugs === 'on')) {
        var data = fs.readFileSync('./mavenjobs/javamaven.yml', 'utf8');
        console.log('findbugs and checkstyles')
    }

    else if ((checkCheck !== 'on') && (checkBugs === 'on')) {
        var data = fs.readFileSync('./mavenjobs/javamaven_findbug.yml', 'utf8');
        console.log('findbugs only')
    }
    else if ((checkCheck === 'on') && (checkBugs !== 'on')) {
        var data = fs.readFileSync('./mavenjobs/javamaven_checkstyles.yml', 'utf8');
        console.log('checkstyles only')
    }
    else if ((checkCheck !== 'on') && (checkBugs !== 'on')) {
        var data = fs.readFileSync('./mavenjobs/javamaven_no_check_and_bugs.yml', 'utf8');
        console.log('just simple sync with CI-server')
    }
    else console.log("system failure");
    {
    }

    var file = yaml.safeLoad(data, 'utf8');

    //2.1 Git global configure variables
    var newGitConfigName = "confname";
    var newGitConfigEmail = "confemail";

    //2.2Editing the yaml file
    file[0].defaults.scm[0].git.url = newGitRepo;
    file[0].defaults.scm[0].git['git-config-name'] = newGitConfigName;
    file[0].defaults.scm[0].git['git-config-email'] = newGitConfigEmail;
    file[0].defaults.scm[0].git.add.key = sshKey;
    file[0].defaults.scm[0].git.add.user = username;
    file[1].job.name = newJobName + "-maven-job";
    file[1].job.properties[0].github.url = newGitRepo;

    //2.3 Saving as a new json-file
    fs.writeFileSync("newjob.json", JSON.stringify(file, null, 2));



    //TODO Create Connection where Credentialas ID and username will be connected for Jenkins.
    // 3.1 Using job builder to create new job from json file
    const execSync = require('child_process').execSync;
    var cmd = execSync('jenkins-jobs --conf jenkins_jobs.ini update newjob.json');

    const request = require('request');

    request({
        url: "http://10.90.131.154:8080/credentials/store/system/domain/_/createCredentials",
        method: "POST",
        auth: {

            'user': 'admin1',
            'pass': 'f564c4170d78015fbc51e4ad1d2ab084',
            'sendImmediately': true
        },
        headers: {
            'User-Agent': 'request',
            "content-type": "application/json"
        },
        json: {
            "": "0",
            'credentials': {
                'scope': "GLOBAL",
                'id': "MATT10",
                'username': "usernameGoesHere",
                'password': "",
                'privateKeySource': {
                    "stapler-class": "com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey$DirectEntryPrivateKeySource",
                    'privateKey': "keyGoesHere"
                },
                'description': "",
                "stapler-class": "com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey"
            }
        }
    });
}