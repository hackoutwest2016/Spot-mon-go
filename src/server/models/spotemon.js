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

function addSpotemon(spotemon) {
    state.spotemon.push(spotemon);
}

function removeSpotemon(spotemon) {
    let index = state.spotemon.indexOf(spotemon);
    state.spotemon.splice(index, 1);
}

module.exports = {
	getAllSpotemon,
	getCloseSpotemon,
	addSpotemon,
	removeSpotemon
}
