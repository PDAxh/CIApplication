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
    dataGetter.getAllJobs('http://http://10.2.2.33:8080');

    //Builds the table and then renders the results site
    exports.loadJobs = function (jobsList) {
        var table = "";
        for(var i = 0; i < jobsList.length; i++) {
            table += '<tr><td class="col-md-5ths col-xs-6" id="cProject">' + jobsList[i].name + '</td>' +
                '<td class="col-md-5ths col-xs-6"  id="cPush">' + i + '</td>' +
                '<td class="col-md-2ths col-xs-6" id="cBugs" >' + jobsList[i].findbugs + '</td>' +
                '<td class="col-md-2ths col-xs-6" id="cStyle" >' + jobsList[i].checkstyle + '</td>' +
                '<td class="col-md-5ths col-xs-6" id="cDetails" >' +  'null' + '</td></tr>' ;
        }
        res.render('results', {title: 'reportsite', insertRow: table});
    };

});
/*document.getElementById("cProject").style.backgroundColor = rgba(255, 255, 255, 0.9);
document.getElementById("cPush").style.backgroundColor = rgba(255, 255, 255, 0.9);
document.getElementById("cBugs").style.backgroundColor = rgba(255, 255, 255, 0.9);
document.getElementById("cStyle").style.backgroundColor = rgba(255, 255, 255, 0.9);
document.getElementById("cDetails").style.backgroundColor = rgba(255, 255, 255, 0.9);*/


module.exports = router;