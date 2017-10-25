var express = require('express');
var router = express.Router();

/* GET home page. */
  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/reports', function(req, res, next) {
    res.render('reports', { title: 'reportsite' });
});


module.exports = router;