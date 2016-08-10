var tools = require('./tools');

let max = 0;

setInterval(cleanUsers, 10000);
setTimeout(() => {
    setInterval(analyzeUsers, 10000);
}, 1000)

function cleanUsers() {
    let now = new Date().getTime();
    state.users = state.users.filter(user => {
        return user.timestamp + 30000 > now;
    });
}

function analyzeUsers() {
    let length = state.users.length;
    max = Math.max(length, max);
    console.log('current:', length, ', max:', max);
}

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
    let timestamp = new Date().getTime();
    let thisUser;

	state.users.forEach(function(user){
		if(user.id === userId){
            thisUser = user;
			user.coords = position;
            user.timestamp = timestamp
			found = true;
		}
	});

	if(!found){
        thisUser = {
			id: userId,
			coords: position,
            timestamp: timestamp
		};
		state.users.push(thisUser);
	}

	return "success";
}

module.exports = {
	getAllUsers,
	getCloseUsers,
	updateUser
};
