const users = require('../../models/users');
const spotemon = require('../../models/spotemon');

//setTimeout(generateSpotemon);

function generateSpotemon(userIndex = 0) {
    let userList = users.getAllUsers();
    if (userList.length) {
        let user = userList[userIndex % userList.length];
        generateSpotemonAtCoordinates(user.coords);
    }
    setTimeout(() => {
        generateSpotemon(userIndex + 1);
    }, 10000);
}

function generateSpotemonAtCoordinates(coordinates) {
    let spotemonList = spotemon.getAllSpotemon();
}

