    var express = require('express');
    var router = express.Router();
    var dataGetter = require('../public/javascripts/dataGetter');


    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Index'});
    });

    router.get('/results', function (req, res, next) {
        //Getting Jenkins jobs
        dataGetter.getAllJobs('http://10.2.2.33:8080');

        //Builds the table and then renders the results site
        exports.loadJobs = function (jobsList) {
            //Sort jobs by date
            jobsList.sort(function compare(a, b) {
                var dateA = new Date(a.pushDate);
                var dateB = new Date(b.pushDate);
                return dateB - dateA;
            });

            var table = "";
            for (var i = 0; i < jobsList.length; i++) {
                table += '<tr><td class="col-md-5ths col-xs-6" id="cProject">' + jobsList[i].name + '</b></td>' +
                    '<td class="col-md-5ths col-xs-6"  id="cPush">' +
                        '<b style="font-weight:700;"><a href="' + jobsList[i].commitUrl + '">' + jobsList[i].pushDate + '</a></b><br>' +
                        '<b style="font-weight:700;">Comment: </b>' + jobsList[i].commitComment + '<br>' +
                        '<b style="font-weight:700;">Author: </b>' + jobsList[i].author + '</td>' +
                    '<td class="col-md-2ths col-xs-6">' +
                        'Total: <div id="cBugs">' + jobsList[i].findbugs + '</div>' +
                        'New: ' + jobsList[i].findbugsNew + '</td>' +
                    '<td class="col-md-2ths col-xs-6">' +
                        'Total: <div id="cStyle">' + jobsList[i].checkstyle + '</div>' +
                        'New: ' + jobsList[i].checkstyleNew + '</td>' +
                    '<td class="col-md-5ths col-xs-6" id="cDetails" >' + 'null' + '</td></tr>';
            }
            res.render('results', {title: 'Results', insertRow: table});
        }
    });



    module.exports = router;