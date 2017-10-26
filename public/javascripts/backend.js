function storeRepo() {


    var theGit = document.getElementById("repoInput").value;

    var check = /https?:\/\/(.+?\.)?github\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/;

    if (theGit.match(check)) {
        //Gitrepository är sparat i variabeln theGIT. Här, i if satsen kan exempelvis ett anrop till funktionen som skickar
        //Gitrepot till Jenkins.



    } else {
        document.getElementById("headLine").innerHTML = "Are you kidding?";
    }
}


var yaml = require('js-yaml'),
    fs = require('fs');
//Reading from a blueprint yaml file
fs.readFile('./job2.yml', 'utf8', function (e, data) {
    var file;
    if (e) {
        console.log('job2.yml not found.');
    } else {
        file = yaml.safeLoad(data, 'utf8');

        var newJobName = "newJobName7";
        var newGitRepo = "testgit.com";
        var newGitConfigName = "confname"; // users name
        var newGitConfigEmail = "confemail"; // user email

        file[0].defaults.scm[0].git.url = newGitRepo;
        file[0].defaults.scm[0].git['git-config-name'] = newGitConfigName;
        file[0].defaults.scm[0].git['git-config-email'] = newGitConfigEmail;
        file[1].job.name = newJobName;
        file[1].job.properties[0].github.url = newGitRepo;

        console.log(file[0].defaults.scm[0].git['git-config-name']);

        fs.writeFileSync("testa.json", JSON.stringify(file, null, 2));


        const execSync = require('child_process').execSync;
        var cmd = execSync('jenkins-jobs --conf jenkins_jobs.ini update testa.json');
    }
});

