import $ from 'jquery';


	// constructor(){
	// 	super();

	// 	var self = this;

	// 	this.state = {
	// 		initialized: false,
	// 		artistName: '',
	// 		topTrack: '',
	// 		carismaPoints: 0

	// 	}

	// 	this.getArtistTopTracks('3H7Ez7cwaYw4L3ELy4v3Lc',function (response) {
	// 		self.getTrackToPlay(response.tracks[1].id, function(response){
	// 			self.setState(Object.assign({}, self.state, {artistName: response.artists[0].name, initialized:true, topTrack: response.name}));
	// 		})
	// 	})

	// 	this.getArtistPopularity('3H7Ez7cwaYw4L3ELy4v3Lc',function (response) {
	// 		self.setState(Object.assign({}, self.state, {carismaPoints: response.popularity}));
	// 	})
	// }
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