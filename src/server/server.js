// server.js

// BASE SETUP
// ==========================================================================

// call the packages we need
var path 		= require('path');

var express    	= require('express');        // call express
var app        	= express();                 // define our app using express

var bodyParser = require('body-parser');

// DATABASE SETTINGS AND CONNECTION
// ==========================================================================
//var db 			= require('./db');
//db.connect();

// INITIALIZE SERVER STATE
// ==========================================================================
require('./models/state');

// BODY PARSER -------------------------------
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ROUTES FOR OUR API
// ==========================================================================
var router 		= require('./controllers/index');
var api 		= require('./controllers/api/index');
var update 		= require('./modules/auto-update/index');

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);
app.use('/api', api);

// START THE SERVER
// ==========================================================================
app.listen(3001);
console.log('Magic happens on port ' + 3001);
