module.exports = function(server){
	const io = require('socket.io')(server);

	io.on('connection', function(socket){
		socket.once('identification', function(userId) {
			state.users.forEach((user) => {
				if(userId === user.id){
					user.socket = socket;
				}
			});

			socket.on('challange', function(challangeData){ //challangeData: challangeId, userId, opponentId, spotemon
				state.activeChallanges.push({
					id: challangeData.challangeid,
					challanger: {
						id: challangeData.challangerId,
						spotemon: challangeData.spotemon
					},
					opponent: {
						id: challangeData.opponentId,
						spotemon: undefined
					},
					winner: undefined
				});

				challange(challangeData.challangeId, challangeData.challangerId, challangeData.opponentId);
			});
			socket.on('accept', function(acceptData){ //acceptData: challangeId, spotemon
				state.activeChallanges.forEach((challange) => {
					challange.opponent.spotemon = acceptData.spotemon;
				});

				acceptChallange(acceptData.challangeId);
			});
			socket.on('decline', function(declineData){ //declineData: challangeId

			});
			socket.on('attack', function(attackData){ // attackData: challangeId, userId, dmgPoints
				state.activeChallanges.forEach((challange) => {
					if (challange.id === attackData.challangeId) {
						if(challange.challanger.id === challange.userId){
							challange.opponent.spotemon.hp -= attackData.dmgPoints;
						}else{
							challange.challanger.spotemon.hp -= attackData.dmgPoints;
						}
					}
				});
			});
			socket.on('win', function(winData){ //winData: challangeId, userId
				state.activeChallanges.forEach((challange) => {
					if (challange.id === winData.challangeId) {
						if(!challanger.winner){
							challange.winner = winData.userId;
							emitWin();
						}
					}
				});
			});
		});

		setTimeout(function(){
			socket.emit('challanged', {
				challangeId: 2,
				opponentId: 3
			});
			// 	socket.emit('accepted');
			// 	socket.emit('start');
		}, 2000);
	});

	function getCompetitorsByChallange(challangeId){
		let competitors = {};

		state.activeChallanges.forEach((challange) => {
			if(challange.id === challangeId){
				competitors.challanger = challange.challanger;
				competitors.opponent = challange.opponent;
			}
		});

		return competitors;
	}
	function getSockets (challangerId, opponentId) {
		let challangerSocket = null,
			opponentSocket = null;

		state.users.forEach((user) => {
			if(user.id === userId){
				challangerSocket = user.socket;
			}
			if(user.id === opponentId){
				opponentSocket = user.socket;
			}
		});

		return {
			challangerSocket,
			opponentSocket
		};
	}

	function challange(challangerId, opponentId){
		const sockets = getSockets(challangerId, opponentId);

		sockets.opponentSocket.emit('challange', {
			challangeId,
			opponentId
		});
	}
	function acceptChallange(challangeId){
		// const competitors = getCompetitorsByChallange(challangeId);
		// const sockets = getSockets(competitors.challanger.id, competitors.opponent.id);
		//
		// socket.challanger.emit('accepted');
		//
		// startChallange();
	}

	function startChallange(challangeId) {
		// const competitors = getCompetitorsByChallange(challangeId);
		// const sockets = getSockets(competitors.challanger.id, competitors.opponent.id);
		//
		// sockets.challanger.emit('startChallange');
		// sockets.opponent.emit('startChallange');
	}
};
