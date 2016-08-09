const users = require('../../models/users');
const spotemon = require('../../models/spotemon');

generateSpotemon();

function generateSpotemon(userIndex = 0) {
    let userList = users.getAllUsers();
    if (userList.length) {
        let coords = userList[userIndex % userList.length].coords;
		coords.lat = coords.lat + (2*Math.random() - 1)*0.0002;
		coords.lng = coords.lng + (2*Math.random() - 1)*0.0002;

        generateSpotemonAtCoordinates(coords);
    }
    setTimeout(() => {
        generateSpotemon(userIndex + 1);
    }, 1000);
	// }, 30000);
}

function generateSpotemonAtCoordinates(coordinates) {
    let spotemonList = spotemon.getAllSpotemon();
    let spotemonIndex = Math.floor(Math.random()*state.existingSpotemon.length);
    let newSpotemon = {
        id: new Date().getTime(),
        spotifyId: state.existingSpotemon[spotemonIndex],
        coords: coordinates
    };
    setTimeout(() => {
        spotemon.removeSpotemon(newSpotemon);
    }, 120000);
    spotemon.addSpotemon(newSpotemon);
}
