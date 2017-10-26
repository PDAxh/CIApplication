
//Creates a Jenkins job for a Java Maven project
exports.createJavaMavenJob = function (newJobName, newGitRepo) {
    console.log('Function createJavaMavenJob initialized')
    var yaml = require('js-yaml');
    var fs = require('fs');

    //Reading from a blueprint yaml file
    var data = fs.readFileSync('./javamaven.yml', 'utf8');
    var file = yaml.safeLoad(data, 'utf8');

    //Variables
    //var newJobName = req.body.jobname;
    //var newGitRepo = req.body.gitrep;
    var newGitConfigName = "confname";
    var newGitConfigEmail = "confemail";

    //Editing the yaml file
    file[0].defaults.scm[0].git.url = newGitRepo;
    file[0].defaults.scm[0].git['git-config-name'] = newGitConfigName;
    file[0].defaults.scm[0].git['git-config-email'] = newGitConfigEmail;
    file[1].job.name = newJobName + "-maven-job";
    file[1].job.properties[0].github.url = newGitRepo;

    //Saving as a new yaml-file
    fs.writeFileSync("testa.json", JSON.stringify(file, null, 2));

    //Using job builder to create new job from json file
    const execSync = require('child_process').execSync;
    var cmd = execSync('jenkins-jobs --conf jenkins_jobs.ini update testa.json');
};