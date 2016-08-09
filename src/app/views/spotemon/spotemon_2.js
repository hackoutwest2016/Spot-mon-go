import $ from 'jquery';

function getArtistPopularity (artistId,callback) {
	$.ajax({
		url: 'https://api.spotify.com/v1/artists/' + artistId,
		success: function (response) {
			callback(response);
		},
		error: function (response) {
			callback(response);
		}
	});
}
function getTrackToPlay(trackId, callback){
	$.ajax({
		url: 'https://api.spotify.com/v1/tracks/' + trackId,
		success: function (response) {
			callback(response);
		},
		error: function (response) {
			callback(response);
		}
	});
}  	   
function getArtistTopTracks(artistId, callback){
	$.ajax({
		url: 'https://api.spotify.com/v1/artists/' + artistId +'/top-tracks?country=SE',
		success: function (response) {
			callback(response);
		},
		error: function (response) {
			callback(response);
		}
	});
}

module.exports = {
	getArtistPopularity,
	getTrackToPlay,
	getArtistTopTracks
}