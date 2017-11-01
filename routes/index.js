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
    dataGetter.getAllJobs('http://10.90.131.114:8080');

    //Builds the table and then renders the results site
    exports.loadJobs = function (jobsList) {
        console.log(jobsList);
        var table = "";
        for (var i = 0; i < jobsList.length; i++) {
            table += '<tr> <td class="col-md-5ths col-xs-6">' + jobsList[i].name + '</td> <td class="col-md-5ths col-xs-6">' + i + '</td> <td class="col-md-2ths col-xs-6">' + jobsList[i].findbugs + '</td> <td class="col-md-2ths col-xs-6">' + jobsList[i].checkstyle + ' </td> <td class="col-md-5ths col-xs-6">' + 'null' + ' </td> </tr>';
        }
        res.render('results', {title: 'reportsite', insertRow: table});
    };
});

module.exports = router;