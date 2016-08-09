var tools = require('./tools');

function getAllSpotemon () {
	return state.spotemon;
}
function getCloseSpotemon(user) {
	var closeSpotemon = [];

	this.getAllSpotemon().forEach((spotemon) => {
		let distance = tools.getDistance(user, spotemon);
		if(distance < state.settings.userVision){
			spotemon.distanceTo = distance;
			closeSpotemon.push(spotemon);
		}
	});

	return closeSpotemon;
}

function addSpotemon () {
	
}

function removeSpotemon () {
	
}

module.exports = {
	getAllSpotemon,
	getCloseSpotemon,
	addSpotemon,
	removeSpotemon
}
