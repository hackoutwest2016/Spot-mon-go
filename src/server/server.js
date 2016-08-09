// server.js

// BASE SETUP
// ==========================================================================

// call the packages we need
var path 		= require('path');

var express    	= require('express');        // call express
var app        	= express();                 // define our app using express

// DATABASE SETTINGS AND CONNECTION
// ==========================================================================
//var db 			= require('./db');
//db.connect();

// ROUTES FOR OUR API
// ==========================================================================
var router 		= require('./controllers/index')
var api 		= require('./controllers/api/index')

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);
app.use('/api', api);

// INITIALIZE SERVER STATE
// ==========================================================================
require('./models/state');

// START THE SERVER
// ==========================================================================
app.listen(3001);
console.log('Magic happens on port ' + 3001);