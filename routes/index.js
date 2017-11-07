$(document).ready(function () {
    $('#resultsTable').DataTable({
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            if (aData[2] || aData[3] == 0) {
                $('td', nRow).css('background-color', "rgb(0,255,75)");
                /* Grön */
            }
            else if (( aData[2] || aData[3] > 1 && ( aData[2] || aData[3] < 10 ))) {
                $('td', nRow).css('background-color', "rgb(3,255,171)");
                /* Ocean blue */
            }
            else if (( aData[2] || aData[3] > 11 && ( aData[2] || aData[3] < 20 ))) {
                $('td', nRow).css('background-color', "rgb(6,245,255)");
                /* Light blue */
            }
            else if (( aData[2] || aData[3] > 21 && ( aData[2] || aData[3] < 30 ))) {
                $('td', nRow).css('background-color', "rgb(10,145,255)");
                /* Medium blue*/
            }
            else if (( aData[2] || aData[3] > 31 && ( aData[2] || aData[3] < 40 ))) {
                $('td', nRow).css('background-color', "rgb(13,66,255)");
                /* Blue */
            }
            else if (( aData[2] || aData[3] > 41 && ( aData[2] || aData[3] < 50 ))) {
                $('td', nRow).css('background-color', "rgb(53,16,255)");
                /* Dark blue */
            }
            else if (( aData[2] || aData[3] > 51 && ( aData[2] || aData[3] < 60 ))) {
                $('td', nRow).css('background-color', "rgb(143,20,255)");
                /* Purple */
            }
            else if (( aData[2] || aData[3] > 61 && ( aData[2] || aData[3] < 70 ))) {
                $('td', nRow).css('background-color', "rgb(230,23,255)");
                /* Pink */
            }
            else if (( aData[2] || aData[3] > 71 && ( aData[2] || aData[3] < 80 ))) {
                $('td', nRow).css('background-color', "rgb(255,30,194)");
                /* Dark pink */
            }
            else if (( aData[2] || aData[3] > 81 && ( aData[2] || aData[3] < 90 ))) {
                $('td', nRow).css('background-color', "rgb(255,36,33)");
                /* Red */
            }
        }
    });

    var express = require('express');
    var router = express.Router();
    var dataGetter = require('../public/javascripts/dataGetter');


    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Index'});
    });

    /*
    router.get('/results', function(req, res, next) {
        res.render('results', { title: 'reportsite' });
    }); */

    router.get('/results', function (req, res, next) {
        //Getting Jenkins jobs
        dataGetter.getAllJobs('http://10.2.2.33:8080');

        //Builds the table and then renders the results site
        exports.loadJobs = function (jobsList) {
            var table = "";
            for (var i = 0; i < jobsList.length; i++) {
                table += '<tr><td class="col-md-5ths col-xs-6" id="cProject">' + jobsList[i].name + '</b></td>' +
                    '<td class="col-md-5ths col-xs-6"  id="cPush"><b style="font-weight:700;"><a href="' + jobsList[i].commitUrl + '">' + jobsList[i].pushDate + '</a></b><br>' +
                    '<b style="font-weight:700;">Comment: </b>' + jobsList[i].commitComment + '<br>' +
                    '<b style="font-weight:700;">Author: </b>' + jobsList[i].commitAuthor + '</td>' +
                    '<td class="col-md-2ths col-xs-6" id="cBugs" >' + jobsList[i].findbugs + '</td>' +
                    '<td class="col-md-2ths col-xs-6" id="cStyle" >' + jobsList[i].checkstyle + '</td>' +
                    '<td class="col-md-5ths col-xs-6" id="cDetails" >' + 'null' + '</td></tr>';
            }
            res.render('results', {title: 'Results', insertRow: table});
        };

    });
    /*document.getElementById("cProject").style.backgroundColor = rgba(255, 255, 255, 0.9);
    document.getElementById("cPush").style.backgroundColor = rgba(255, 255, 255, 0.9);
    document.getElementById("cBugs").style.backgroundColor = rgba(255, 255, 255, 0.9);
    document.getElementById("cStyle").style.backgroundColor = rgba(255, 255, 255, 0.9);
    document.getElementById("cDetails").style.backgroundColor = rgba(255, 255, 255, 0.9);*/


    module.exports = router;