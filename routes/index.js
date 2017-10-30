var express = require('express');
var router = express.Router();
var dataGetter = require('../public/javascripts/dataGetter');


/* GET home page. */
  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/results', function(req, res, next) {
    res.render('results', { title: 'reportsite' });
});

router.get('/results2', function(req, res, next) {
    var jobNames = [];

    dataGetter.getAllJobNames('http://10.90.131.114:8080');

    exports.loadJobs = function (jobsList) {
        jobNames = jobsList;
        var table = "";
        for(var i = 0; i < jobsList.length; i++) {
            table += '<tr><td>' + jobsList[i] + '</td><td>2</td><td>3</td><td>4</td></tr>';
        }
        res.render('results2', { title: 'reportsite2', insertRow: table });
    };
});

module.exports = router;