var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res, next) {	
	db.query('SELECT * FROM test LIMIT 1').then(function (rows) {
		res.json(rows)
	}).catch(function(err){
		res.json(err);
	})
});

module.exports = router;
