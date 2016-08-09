var mysql = require('promise-mysql');

var PRODUCTION_DB 	= '',
	STAGE_DB 		= '120020-stage',
	LOCAL_DB 		= 'comparerepair'

var state = {
	pool: null,
}

exports.connect = function() {
	var settings = {
		host: 'localhost',
		port: 8889,
		user: 'root',
		password: 'root',
		database: 'spotemon'
	}

	return mysql.createConnection(settings).then((conn) => {
		state.pool = conn;
	});
}


exports.get = function() {
	return state.pool
}

exports.escape = function(data) {
	return state.pool.escape(data);
}

exports.query = function(query, vars) {
	if(vars){
		return state.pool.query(query, vars);	
	}else{
		return state.pool.query(query);
	}
}


exports.displayError = function (error, res){
	if(res){
		res.json({message: error})
	}else{
		console.log('DB error: ' + error);
	}
}