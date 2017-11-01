var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var jobCreator = require('./public/javascripts/jobCreator');
var dataGetter = require('./public/javascripts/dataGetter');

var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// When submit button is pushed
app.post('/', function(req, res, next) {
    console.log('Button clicked!');
    console.log(req.body.checkStyle);
    console.log(req.body.findBugs);
    jobCreator.createJavaMavenJob(req.body.jobname, req.body.gitrep, req.body.checkStyle, req.body.findBugs);
    res.render('index');
});

//Jenkins will notify after job(build) is finilized
app.post('/notification', function(req, res, next) {
    console.log('\n---- Incoming notification from Jenkins ----');
    console.log('Job name: ' + req.body.name);
    console.log('Build nr: ' + req.body.build.number);
    console.log('Git url: ' + req.body.build.scm.url);
    console.log('Commit: ' + req.body.build.scm.commit);
    console.log('Build Status: ' + req.body.build.status);



    dataGetter.getFindbugsReport('http://10.90.131.114:8080', req.body.name, req.body.build.number);
    dataGetter.getCheckstyleReport('http://10.90.131.114:8080', req.body.name, req.body.build.number);
});
// Getting the detailed html report from jenkins.
app.post('/result', function(req, res, next){
    console.log("checking for detailed report");
    dataGetter.getHtmlDetailReport(reportLink,req.body.name, req.body.build.number)

});

app.use('/', index);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3300, function() {
    console.log('Server started on port 3300...');
});



module.exports = app;
