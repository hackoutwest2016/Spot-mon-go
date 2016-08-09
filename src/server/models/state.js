if(!global.state){
	global.state = {
		"settings": {
			"userVision": "100"
		},
		"users": [
			{
				"id": 1,
				"alias": "kalle",
				"name": "Kalle",
				"coords": {
					"lat": 57.703973,
					"lng": 11.96597
				}
			},
			{
				"id": 2,
				"alias": "oskar",
				"name": "Oskar",
				"coords": {
					"lat": 57.703970,
					"lng": 11.96590
				}
			}
		],
		"spotemon": [
			{
				id: 0,
				name: "Håkan Hellström",
				cm: 100,
				coords: {
					lat: 57.703970,
					lng: 11.96590
				}
			}
		],
	}
}

module.export = state
