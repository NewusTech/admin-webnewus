var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var portofolioRouter = require('./routes/portofolio');
var blogRouter = require('./routes/blog');
var serviceRouter = require('./routes/service');
var jobrecruitmentRouter = require('./routes/jobrecruitment');
var internrecruitmentRouter = require('./routes/internrecruitment');
var companyRouter = require('./routes/company');
var teamRouter = require('./routes/team');
var messageRouter = require('./routes/message');
var settingRouter = require('./routes/setting');
var galeriRouter = require('./routes/galeri');
var clientRouter = require('./routes/client');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', portofolioRouter);
app.use('/', blogRouter);
app.use('/', serviceRouter);
app.use('/', jobrecruitmentRouter);
app.use('/', internrecruitmentRouter);
app.use('/', companyRouter);
app.use('/', teamRouter);
app.use('/', messageRouter);
app.use('/', settingRouter);
app.use('/', galeriRouter);
app.use('/', clientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
