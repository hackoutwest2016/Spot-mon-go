function saveMySelf () {
	localStorage.setItem('user', JSON.stringify(myself));
}

function getMyProp (prop) {
	if(prop){
		return JSON.parse(localStorage.getItem('user'))[prop];
	}else{
		return JSON.parse(localStorage.getItem('user'));
	}
}


module.exports = {
	saveMySelf,
	getMyProp
};
