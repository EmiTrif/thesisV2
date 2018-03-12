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
var getEmotionsF = require('./api/routes/Tiers/EmotionsF');
var getEmotionsI = require('./api/routes/Tiers/EmotionsI');
var getEmblemF = require('./api/routes/Tiers/EmblemF');
var getEmblemI = require('./api/routes/Tiers/EmblemI');
var getDeicticF = require('./api/routes/Tiers/DeicticF');
var getDeicticI = require('./api/routes/Tiers/DeicticI');
var getF0MovF = require('./api/routes/Tiers/F0MovF');
var getF0MovI = require('./api/routes/Tiers/F0MovI');
var getF0ValF = require('./api/routes/Tiers/F0ValueF');
var getF0ValI = require('./api/routes/Tiers/F0ValueI');
var getF0LvlF = require('./api/routes/Tiers/F0LvlF');
var getF0LvlI = require('./api/routes/Tiers/F0LvlI');

var getS015F = require('./api/routes/Subjects/S015F');
var getS019F = require('./api/routes/Subjects/S019F');
var getS020F = require('./api/routes/Subjects/S020F');
var getS065F = require('./api/routes/Subjects/S065F');
var getS074F = require('./api/routes/Subjects/S074F');
var getS077F = require('./api/routes/Subjects/S077F');
var getS079F = require('./api/routes/Subjects/S079F');
var getS090F = require('./api/routes/Subjects/S090F');
var getS108F = require('./api/routes/Subjects/S108F');
var getS043F = require('./api/routes/Subjects/S043F');

var getS015I = require('./api/routes/Subjects/S015I');
var getS019I = require('./api/routes/Subjects/S019I');
var getS020I = require('./api/routes/Subjects/S020I');
var getS065I = require('./api/routes/Subjects/S065I');
var getS074I = require('./api/routes/Subjects/S074I');
var getS077I = require('./api/routes/Subjects/S077I');
var getS079I = require('./api/routes/Subjects/S079I');
var getS090I = require('./api/routes/Subjects/S090I');
var getS108I = require('./api/routes/Subjects/S108I');
var getS043I = require('./api/routes/Subjects/S043I');

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
app.use('/EmotionsF', getEmotionsF);
app.use('/EmotionsI', getEmotionsI);
app.use('/EmblemF', getEmblemF);
app.use('/EmblemI', getEmblemI);
app.use('/DeicticF', getDeicticF);
app.use('/DeicticI', getDeicticI);
app.use('/F0MovF', getF0MovF);
app.use('/F0MovI', getF0MovI);
app.use('/F0ValF', getF0ValF);
app.use('/F0ValI', getF0ValI);
app.use('/F0LvlF', getF0LvlF);
app.use('/F0LvlI', getF0LvlI);

app.use('/S015F', getS015F);
app.use('/S019F', getS019F);
app.use('/S020F', getS020F);
app.use('/S065F', getS065F);
app.use('/S074F', getS074F);
app.use('/S077F', getS077F);
app.use('/S079F', getS079F);
app.use('/S090F', getS090F);
app.use('/S108F', getS108F);
app.use('/S043F', getS043F);
app.use('/S015I', getS015I);
app.use('/S019I', getS019I);
app.use('/S020I', getS020I);
app.use('/S065I', getS065I);
app.use('/S074I', getS074I);
app.use('/S077I', getS077I);
app.use('/S079I', getS079I);
app.use('/S090I', getS090I);
app.use('/S108I', getS108I);
app.use('/S043I', getS043I);


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
