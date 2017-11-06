const request = require('request');

var jsonString = "{\n" +
    "  \"_class\" : \"hudson.model.FreeStyleBuild\",\n" +
    "  \"actions\" : [\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.model.CauseAction\",\n" +
    "      \"causes\" : [\n" +
    "        {\n" +
    "          \"_class\" : \"hudson.model.Cause$UserIdCause\",\n" +
    "          \"shortDescription\" : \"Started by user Cybercom Server\",\n" +
    "          \"userId\" : \"admin1\",\n" +
    "          \"userName\" : \"Cybercom Server\"\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.git.util.BuildData\",\n" +
    "      \"buildsByBranchName\" : {\n" +
    "        \"origin/master\" : {\n" +
    "          \"_class\" : \"hudson.plugins.git.util.Build\",\n" +
    "          \"buildNumber\" : 6,\n" +
    "          \"buildResult\" : null,\n" +
    "          \"marked\" : {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          },\n" +
    "          \"revision\" : {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          }\n" +
    "        }\n" +
    "      },\n" +
    "      \"lastBuiltRevision\" : {\n" +
    "        \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "        \"branch\" : [\n" +
    "          {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"name\" : \"origin/master\"\n" +
    "          }\n" +
    "        ]\n" +
    "      },\n" +
    "      \"remoteUrls\" : [\n" +
    "        \"https://github.com/MattiasC86/MavenProject2\"\n" +
    "      ],\n" +
    "      \"scmName\" : \"\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.git.GitTagAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.checkstyle.CheckStyleResultAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.findbugs.FindBugsResultAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    }\n" +
    "  ],\n" +
    "  \"artifacts\" : [\n" +
    "    \n" +
    "  ],\n" +
    "  \"building\" : false,\n" +
    "  \"description\" : null,\n" +
    "  \"displayName\" : \"#6\",\n" +
    "  \"duration\" : 12713,\n" +
    "  \"estimatedDuration\" : 13074,\n" +
    "  \"executor\" : null,\n" +
    "  \"fullDisplayName\" : \"MattiasTest2-maven-job #6\",\n" +
    "  \"id\" : \"6\",\n" +
    "  \"keepLog\" : false,\n" +
    "  \"number\" : 6,\n" +
    "  \"queueId\" : 95,\n" +
    "  \"result\" : \"FAILURE\",\n" +
    "  \"timestamp\" : 1509539769744,\n" +
    "  \"url\" : \"http://localhost:8080/job/MattiasTest2-maven-job/6/\",\n" +
    "  \"builtOn\" : \"\",\n" +
    "  \"changeSet\" : {\n" +
    "    \"_class\" : \"hudson.plugins.git.GitChangeSetList\",\n" +
    "    \"items\" : [\n" +
    "      \n" +
    "    ],\n" +
    "    \"kind\" : \"git\"\n" +
    "  },\n" +
    "  \"culprits\" : [\n" +
    "    {\n" +
    "      \"absoluteUrl\" : \"http://localhost:8080/user/froggehxl\",\n" +
    "      \"fullName\" : \"froggehxl\"\n" +
    "    }\n" +
    "  ]\n" +
    "}";

var jsonString2 = "{\n" +
    "  \"_class\" : \"hudson.model.FreeStyleBuild\",\n" +
    "  \"actions\" : [\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.model.CauseAction\",\n" +
    "      \"causes\" : [\n" +
    "        {\n" +
    "          \"_class\" : \"hudson.triggers.SCMTrigger$SCMTriggerCause\",\n" +
    "          \"shortDescription\" : \"Started by an SCM change\"\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.git.util.BuildData\",\n" +
    "      \"buildsByBranchName\" : {\n" +
    "        \"origin/master\" : {\n" +
    "          \"_class\" : \"hudson.plugins.git.util.Build\",\n" +
    "          \"buildNumber\" : 3,\n" +
    "          \"buildResult\" : null,\n" +
    "          \"marked\" : {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          },\n" +
    "          \"revision\" : {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          }\n" +
    "        }\n" +
    "      },\n" +
    "      \"lastBuiltRevision\" : {\n" +
    "        \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "        \"branch\" : [\n" +
    "          {\n" +
    "            \"SHA1\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "            \"name\" : \"origin/master\"\n" +
    "          }\n" +
    "        ]\n" +
    "      },\n" +
    "      \"remoteUrls\" : [\n" +
    "        \"https://github.com/MattiasC86/MavenProject2\"\n" +
    "      ],\n" +
    "      \"scmName\" : \"\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.git.GitTagAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.checkstyle.CheckStyleResultAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"_class\" : \"hudson.plugins.findbugs.FindBugsResultAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
    "    }\n" +
    "  ],\n" +
    "  \"artifacts\" : [\n" +
    "    \n" +
    "  ],\n" +
    "  \"building\" : false,\n" +
    "  \"description\" : null,\n" +
    "  \"displayName\" : \"#3\",\n" +
    "  \"duration\" : 13637,\n" +
    "  \"estimatedDuration\" : 13074,\n" +
    "  \"executor\" : null,\n" +
    "  \"fullDisplayName\" : \"MattiasTest2-maven-job #3\",\n" +
    "  \"id\" : \"3\",\n" +
    "  \"keepLog\" : false,\n" +
    "  \"number\" : 3,\n" +
    "  \"queueId\" : 89,\n" +
    "  \"result\" : \"FAILURE\",\n" +
    "  \"timestamp\" : 1509530168471,\n" +
    "  \"url\" : \"http://localhost:8080/job/MattiasTest2-maven-job/3/\",\n" +
    "  \"builtOn\" : \"\",\n" +
    "  \"changeSet\" : {\n" +
    "    \"_class\" : \"hudson.plugins.git.GitChangeSetList\",\n" +
    "    \"items\" : [\n" +
    "      {\n" +
    "        \"_class\" : \"hudson.plugins.git.GitChangeSet\",\n" +
    "        \"affectedPaths\" : [\n" +
    "          \"src/main/java/test/MavenTest.java\"\n" +
    "        ],\n" +
    "        \"commitId\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "        \"timestamp\" : 1509530056000,\n" +
    "        \"author\" : {\n" +
    "          \"absoluteUrl\" : \"http://localhost:8080/user/froggehxl\",\n" +
    "          \"fullName\" : \"froggehxl\"\n" +
    "        },\n" +
    "        \"authorEmail\" : \"froggehxl@gmail.com\",\n" +
    "        \"comment\" : \"up\\n\",\n" +
    "        \"date\" : \"2017-11-01 10:54:16 +0100\",\n" +
    "        \"id\" : \"e1cd2b98ef2d9308e28a36957da450cf11570172\",\n" +
    "        \"msg\" : \"up\",\n" +
    "        \"paths\" : [\n" +
    "          {\n" +
    "            \"editType\" : \"edit\",\n" +
    "            \"file\" : \"src/main/java/test/MavenTest.java\"\n" +
    "          }\n" +
    "        ]\n" +
    "      }\n" +
    "    ],\n" +
    "    \"kind\" : \"git\"\n" +
    "  },\n" +
    "  \"culprits\" : [\n" +
    "    {\n" +
    "      \"absoluteUrl\" : \"http://localhost:8080/user/froggehxl\",\n" +
    "      \"fullName\" : \"froggehxl\"\n" +
    "    }\n" +
    "  ]\n" +
    "}";

var obj1 = JSON.parse(jsonString);
var obj2 = JSON.parse(jsonString2);

var keys1 = Object.keys(obj1);
var keys2 = Object.keys(obj2);

var cheerio = require("cheerio");

var options = {
    url: 'http://10.2.2.33:8080/job/Mavenproject/lastBuild/api/json?pretty=true',
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

request.get(options, function (error, response, body) {
    console.log(body.actions[1].text);


    for(var i = 0; i < 9; i++) {
        if(typeof body.actions[i].text === 'undefined') {
            console.log('undefined');
        } else {
            console.log('defined');
        }

    }
    //console.log(htmlObj);

    /*var cheerio = require("cheerio");
    if(typeof body.actions[8].text === 'undefined') {
        console.log('undefined');
    } else {
        console.log('defined');
        console.log(body.actions[8].text);
    }*/

    //var htmlObj = body.actions[7].text;
    //console.log(htmlObj);


    /*var c = cheerio.load(htmlObj);
    var lastCommit = c(".commit").html();
    var time = c(".commitTime").html();
    var author = c(".author").html();
    var message = c(".message").html();



    c(".messageBody").each(function() {
        var link = c(this);
        var text = link.text();
        //var href = link.attr("href");

        console.log(text + " -> ");
    });
    console.log("Commit: " + lastCommit);
    console.log("Author: " + author);
    console.log("Date & Time: " + time);
    console.log("Message: " + message);*/


});

/*
for(var i = 0; i < keys1.length; i++) {
    console.log(i + ':  ' + obj1[keys1[i]]);
}

for(var i = 0; i < keys2.length; i++) {
    console.log(i + ':  ' + obj2[keys2[i]]);
}*/
