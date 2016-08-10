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

function updateUser (userId, position) {
	let found = false;

	state.users.forEach(function(user){
		if(user.id === userId){
			user.coords = position;
			found = true;
		}
	});

	if(!found){
		state.users.push({
			id: userId,
			coords: position
		});
	}

	return "success";
}

module.exports = {
	getAllUsers,
	getCloseUsers,
	updateUser
};
