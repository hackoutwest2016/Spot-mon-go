const users = require('../../models/users');
const spotemon = require('../../models/spotemon');

generateSpotemon();

function generateSpotemon(userIndex = 0) {
    let userList = users.getAllUsers();
    if (userList.length) {
        let user = userList[userIndex % userList.length];
        generateSpotemonAtCoordinates(user.coords);
    }
    setTimeout(() => {
        generateSpotemon(userIndex + 1);
    }, 30000);
}

function generateSpotemonAtCoordinates(coordinates) {
    let spotemonList = spotemon.getAllSpotemon();
    let spotemonIndex = Math.floor(Math.random()*state.existingSpotemon.length);
    let newSpotemon = {
        id: new Date().getTime(),
        spotifyId: state.existingSpotemon[spotemonIndex],
        coords: coordinates
    }
    setTimeout(() => {
        spotemon.removeSpotemon(newSpotemon);
    }, 120000);
    spotemon.addSpotemon(newSpotemon);
}

