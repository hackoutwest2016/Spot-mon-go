var tools = require('./tools');

function getAllUsers () {
	return state.users;
}
function getCloseUsers (user) {
	var closeUsers = [];

	this.getAllUsers().forEach((opponent) => {
		let distance = tools.getDistance(user, opponent);
		if(user.id !== opponent.id && distance < state.settings.userVision){
			opponent.distanceTo = distance;
			closeUsers.push(opponent);
		}
	});

	return closeUsers;
}

function addUser (user) {
	
}
function updateUser (user, data) {
	
}

module.exports = {
	getAllUsers,
	getCloseUsers
}