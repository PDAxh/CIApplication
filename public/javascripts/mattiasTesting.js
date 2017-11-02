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
    "          \"buildNumber\" : 71,\n" +
    "          \"buildResult\" : null,\n" +
    "          \"marked\" : {\n" +
    "            \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          },\n" +
    "          \"revision\" : {\n" +
    "            \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "                \"name\" : \"origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          }\n" +
    "        },\n" +
    "        \"refs/remotes/origin/master\" : {\n" +
    "          \"_class\" : \"hudson.plugins.git.util.Build\",\n" +
    "          \"buildNumber\" : 63,\n" +
    "          \"buildResult\" : null,\n" +
    "          \"marked\" : {\n" +
    "            \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "                \"name\" : \"refs/remotes/origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          },\n" +
    "          \"revision\" : {\n" +
    "            \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "            \"branch\" : [\n" +
    "              {\n" +
    "                \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "                \"name\" : \"refs/remotes/origin/master\"\n" +
    "              }\n" +
    "            ]\n" +
    "          }\n" +
    "        }\n" +
    "      },\n" +
    "      \"lastBuiltRevision\" : {\n" +
    "        \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "        \"branch\" : [\n" +
    "          {\n" +
    "            \"SHA1\" : \"b96d94c9176b4cbdae290ace6f1981b95d856a79\",\n" +
    "            \"name\" : \"origin/master\"\n" +
    "          }\n" +
    "        ]\n" +
    "      },\n" +
    "      \"remoteUrls\" : [\n" +
    "        \"https://github.com/PDAxh/Jenkins\"\n" +
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
    "      \"_class\" : \"hudson.plugins.analysis.collector.AnalysisResultAction\"\n" +
    "    },\n" +
    "    {\n" +
    "      \n" +
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
    "  \"displayName\" : \"#71\",\n" +
    "  \"duration\" : 11215,\n" +
    "  \"estimatedDuration\" : 51680,\n" +
    "  \"executor\" : null,\n" +
    "  \"fullDisplayName\" : \"Mavenproject #71\",\n" +
    "  \"id\" : \"71\",\n" +
    "  \"keepLog\" : false,\n" +
    "  \"number\" : 71,\n" +
    "  \"queueId\" : 30,\n" +
    "  \"result\" : \"SUCCESS\",\n" +
    "  \"timestamp\" : 1509356038669,\n" +
    "  \"url\" : \"http://localhost:8080/job/Mavenproject/71/\",\n" +
    "  \"builtOn\" : \"\",\n" +
    "  \"changeSet\" : {\n" +
    "    \"_class\" : \"hudson.plugins.git.GitChangeSetList\",\n" +
    "    \"items\" : [\n" +
    "      \n" +
    "    ],\n" +
    "    \"kind\" : \"git\"\n" +
    "  },\n" +
    "  \"culprits\" : [\n" +
    "    \n" +
    "  ]\n" +
    "}";

var obj1 = JSON.parse(jsonString);
var obj2 = JSON.parse(jsonString2);

var keys1 = Object.keys(obj1);
var keys2 = Object.keys(obj2);

console.log(obj1.actions[2].lastBuiltRevision.SHA1);
console.log(obj2.actions[2].lastBuiltRevision.SHA1);
console.log(obj1.actions[2].remoteUrls);
console.log(obj2.actions[2].remoteUrls);

var options = {
    url: 'https://api.github.com/repos/PDAxh/Jenkins/commits/b96d94c9176b4cbdae290ace6f1981b95d856a79',
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

request.get(options, function (error, response, body) {
    var author = body.commit.author.name;
    var gitUserName = body.author.login;
    var dateTime = body.commit.author.date;
    var dateTimeS = dateTime.split('T');
    var date = dateTimeS[0];
    var timeS = dateTimeS[1].split('Z');
    var time = timeS[0];

    console.log('LAST COMMIT INFO:');
    console.log('Author: ' + author);
    console.log('Git username: ' + gitUserName);
    console.log('Date: ' + date + '\nTime: ' + time);
});

/*
for(var i = 0; i < keys1.length; i++) {
    console.log(i + ':  ' + obj1[keys1[i]]);
}

for(var i = 0; i < keys2.length; i++) {
    console.log(i + ':  ' + obj2[keys2[i]]);
}*/
