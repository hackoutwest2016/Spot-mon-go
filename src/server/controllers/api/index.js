var express = require('express');
var router = express.Router();

var users = require('../../models/users')
var spotemon = require('../../models/spotemon')

const exampleUser = {
	id: 0,
	alias: "example",
	name: "Example",
	coords: {
		"lat": 57.703940,
		"lng": 11.96560
	}
}

/* GET home page. */
router.get('/', function(req, res) {
	res.json(state);
});

router.route('/users').put(function(req, res){ // Create new user

}).post(function(req, res){ // Update new user
});

router.route('/users/all').get(function(req, res){ //Get all users
	res.json(users.getAllUsers());
})
router.route('/users/close').get(function(req, res){ //Get user
	res.json(users.getCloseUsers(exampleUser));
})

router.route('/spotemon/all').get(function(req, res){ //Get all spotemon
	res.json(spotemon.getAllSpotemon());
})
router.route('/spotemon/close').get(function(req, res){ //Get close spotemon
	res.json(spotemon.getCloseSpotemon(exampleUser));
})

router.route('/me/spotemon').get(function(req, res){ //Get close spotemon
	res.json(user.getSpotemon());
})
router.route('/me/stats').get(function(req, res){ //Get close spotemon
	res.json(user.getStats());
})

module.exports = router;
