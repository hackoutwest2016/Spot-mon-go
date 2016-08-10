var express = require('express');
var router = express.Router();

var http = require('http');

var users = require('../../models/users');
var spotemon = require('../../models/spotemon');

const exampleUser = {
	id: 0,
	alias: "example",
	name: "Example",
	coords: {
		"lat": 57.703940,
		"lng": 11.96560
	}
};

/* GET home page. */
router.get('/', function(req, res) {
	res.json(state);
});

router.route('/users').post(function(req, res){ // Create new user
	res.json(users.updateUser(req.param('userId'), JSON.parse(req.param('position'))));
});

router.route('/users/all').get(function(req, res){ //Get all users
	res.json(users.getAllUsers());
});
router.route('/users/close').get(function(req, res){ //Get user
	res.json(users.getCloseUsers(exampleUser));
});

router.route('/spotemon/count').get(function(req, res){ //Get all spotemon
	res.json(spotemon.getSpotemonCount());
});

router.route('/spotemon/all').get(function(req, res){ //Get all spotemon
	res.json(spotemon.getAllSpotemon());
});
router.route('/spotemon/close').get(function(req, res){ //Get close spotemon
	res.json(spotemon.getCloseSpotemon(exampleUser));
});

router.route('/challanges').get(function(req, res){
	res.json(state.activeChallanges);
});

router.route('/artists/:userId/:playlistId').get(function(req, res){
	var options = {
	  host: 'https://api.spotify.com/v1/users/' + req.params.userId + '/playlists/' + req.params.playlistId,
	  port: '80',
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/x-www-form-urlencoded',
		'Bearer': 'Token needed'
	  }
	};

	http.request(options, function(response) {
		res.json(response);
	});
});

module.exports = router;
