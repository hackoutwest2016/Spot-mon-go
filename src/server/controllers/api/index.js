var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/search')
	.get(function(req, res){
		res.json({message: "Search not implemented"});
	})

router.route('/company')
	.get(function(req, res){
		res.json({message: "Company not implemented"});
	})

router.route('/rating')
	.get(function(req, res){
		res.json({message: "Rating not implemented"});
	})

router.route('/faq')
	.get(function(req, res){
		res.json({message: "Faq not implemented"});
	})

router.route('/analytics')
	.get(function(req, res){
		res.json({message: "Analytics not implemented"});
	})

module.exports = router;