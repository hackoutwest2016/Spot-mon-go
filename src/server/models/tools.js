function rad (x) {
	return x * Math.PI / 180;
};

function getDistance (u1, u2) {
	let u1_x = u1.coords.x,
		u1_y = u1.coords.y,
		u2_x = u2.coords.x,
		u2_y = u2.coords.y;

	var R = 6378137; // Earth’s mean radius in meter
	var dLat = rad(u2_x - u1_x);
	var dLong = rad(u2_y - u1_y);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(rad(u1_x)) * Math.cos(rad(u2_x)) *
		Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d; // returns the distance in meter
};

module.exports = {
	rad,
	getDistance
}