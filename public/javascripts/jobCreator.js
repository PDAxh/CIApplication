
//Creates a new Jenkins job for a Java Maven project
exports.createJavaMavenJob = function (newJobName, newGitRepo, checkCheck, checkBugs) {
    console.log('Function createJavaMavenJob initialized');
    var yaml = require('js-yaml');
    var fs = require('fs');

    //Reading from a blueprint yaml file
    // Select type of job function
    if((checkCheck === 'on') && (checkBugs === 'on')){
        var data = fs.readFileSync('./javamaven.yml', 'utf8');
        console.log('findbugs and checkstyles')
    }

    else if ((checkCheck === '') && (checkBugs === 'on')) {
        var data = fs.readFileSync('./javamaven_findbugs.yml', 'utf8');
        console.log('findbugs only')
    }
    else if ((checkCheck === 'on') && (checkBugs === '')) {
        var data = fs.readFileSync('./javamaven_checkstyles.yml', 'utf8');
        console.log('checksings only')
    }
    else if ((checkCheck === '') && (checkBugs === '')) {
        var data = fs.readFileSync('./javamaven_no_check_and_bugs.yml', 'utf8');
        console.log('just simple synk with CI')
    }
    else console.log("system failure");{
    }

    //var data = fs.readFileSync('./javamaven.yml', 'utf8');
    var file = yaml.safeLoad(data, 'utf8');

    //Git global configure variables
    var newGitConfigName = "confname";
    var newGitConfigEmail = "confemail";

    //Editing the yaml file
    file[0].defaults.scm[0].git.url = newGitRepo;
    file[0].defaults.scm[0].git['git-config-name'] = newGitConfigName;
    file[0].defaults.scm[0].git['git-config-email'] = newGitConfigEmail;
    file[1].job.name = newJobName + "-maven-job";
    file[1].job.properties[0].github.url = newGitRepo;

    //Saving as a new json-file
    fs.writeFileSync("newjob.json", JSON.stringify(file, null, 2));

    //Using job builder to create new job from json file
    const execSync = require('child_process').execSync;
    var cmd = execSync('jenkins-jobs --conf jenkins_jobs.ini update newjob.json');

}