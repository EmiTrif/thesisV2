var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

//connect to db
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://emi:hekate00@ds249005.mlab.com:49005/thesis');


var index = require('./routes/index');
var getGazeF = require('./api/routes/Tiers/GazeF');
var getGazeI = require('./api/routes/Tiers/GazeI');
var getHandF = require('./api/routes/Tiers/HandF');
var getHandI = require('./api/routes/Tiers/HandI');
var getHeadF = require('./api/routes/Tiers/HeadF');
var getHeadI = require('./api/routes/Tiers/HeadI');
var getPostureF = require('./api/routes/Tiers/PostureF');
var getPostureI = require('./api/routes/Tiers/PostureI');
var getTouchF = require('./api/routes/Tiers/TouchF');
var getTouchI = require('./api/routes/Tiers/TouchI');

var getS013F = require('./api/routes/Subjects/S013F');
var getS040F = require('./api/routes/Subjects/S040F');
var getS061F = require('./api/routes/Subjects/S061F');
var getS065F = require('./api/routes/Subjects/S065F');
var getS074F = require('./api/routes/Subjects/S074F');
var getS077F = require('./api/routes/Subjects/S077F');
var getS079F = require('./api/routes/Subjects/S079F');
var getS090F = require('./api/routes/Subjects/S090F');
var getS108F = require('./api/routes/Subjects/S108F');
var getS121F = require('./api/routes/Subjects/S121F');

var getS013I = require('./api/routes/Subjects/S013I');
var getS040I = require('./api/routes/Subjects/S040I');
var getS061I = require('./api/routes/Subjects/S061I');
var getS065I = require('./api/routes/Subjects/S065I');
var getS074I = require('./api/routes/Subjects/S074I');
var getS077I = require('./api/routes/Subjects/S077I');
var getS079I = require('./api/routes/Subjects/S079I');
var getS090I = require('./api/routes/Subjects/S090I');
var getS108I = require('./api/routes/Subjects/S108I');
var getS121I = require('./api/routes/Subjects/S121I');

//var getSI = require('./api/routes/Subjects/');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret:'max', saveUninitialized: false, resave:false}));

app.use('/', index);
app.use('/GazeF', getGazeF);
app.use('/GazeI', getGazeI);
app.use('/HandF', getHandF);
app.use('/HandI', getHandI);
app.use('/HeadF', getHeadF);
app.use('/HeadI', getHeadI);
app.use('/PostureF', getPostureF);
app.use('/PostureI', getPostureI);
app.use('/TouchF', getTouchF);
app.use('/TouchI', getTouchI);

app.use('/S013F', getS013F);
app.use('/S040F', getS040F);
app.use('/S061F', getS061F);
app.use('/S065F', getS065F);
app.use('/S074F', getS074F);
app.use('/S077F', getS077F);
app.use('/S079F', getS079F);
app.use('/S090F', getS090F);
app.use('/S108F', getS108F);
app.use('/S121F', getS121F);
app.use('/S013I', getS013I);
app.use('/S040I', getS040I);
app.use('/S061I', getS061I);
app.use('/S065I', getS065I);
app.use('/S074I', getS074I);
app.use('/S077I', getS077I);
app.use('/S079I', getS079I);
app.use('/S090I', getS090I);
app.use('/S108I', getS108I);
app.use('/S121I', getS121I);


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

module.exports = app;
