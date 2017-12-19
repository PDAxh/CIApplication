/**
 * Thios files contains mostly
 *
 * 1.1 Starts the homepage
 * 1.2 Gets all job from jenkins server and 1.3publish it on result screen
 * 1.4 Creates the tables and sorts the data into each correct column
 *
 *
 */


    var express = require('express');
    var router = express.Router();
    var dataGetter = require('../public/javascripts/dataGetter');


    /* 1.1 GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Index'});
    });
    //1.2Getting Jenkins jobs
    router.get('/results', function (req, res, next) {

        dataGetter.getAllJobs('http://10.90.131.154:8080');

        //1. 3 Builds the table and then renders the results site
        exports.loadJobs = function (jobsList) {
            //Sort jobs by date
            jobsList.sort(function compare(a, b) {
                var dateA = new Date(a.pushDate);
                var dateB = new Date(b.pushDate);
                return dateB - dateA;
            });
            //1.4
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