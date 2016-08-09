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
					"x": 57.703973,
					"y": 11.96597
				}
			},
			{
				"id": 2,
				"alias": "oskar",
				"name": "Oskar",
				"coords": {
					"x": 57.703970,
					"y": 11.96590
				}
			}
		],
		"spotemon": [
			{
				id: 0,
				name: "Håkan Hellström",
				cm: 100,
				coords: {
					x: 57.703970,
					y: 11.96590
				}
			}
		],
	}
}

module.export = state
