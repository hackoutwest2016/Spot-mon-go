import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { MapStyles } from './mapStyles';
import Tools from '../../modules/tools.js';
import { browserHistory } from 'react-router';
import $ from 'jquery';

const coords = {
    lat: 57.704167,
    lng: 11.965128
};

export default class MapHandler extends Component {
    constructor() {
        super();

        let options = {};
        options.maximumAge = 0;
        //options.enableHighAccuracy = true;

        navigator.geolocation.watchPosition(
                ({coords}) => this.updatePosition(coords),
                console.error.bind(console),
                options);

        this.users = {};
        this.spotemon = {};
        setInterval(this.getOtherPlayers.bind(this), 2000);
        setInterval(this.getSpotemon.bind(this), 2000);
    }

    updatePosition({latitude, longitude}) {
        let position = {lat: latitude, lng: longitude};
        this.marker.setPosition(position);
        this.map.setCenter(position);

		$.post({
			url: 'api/users',
			data: {
				userId: Tools.getMyProp('id'),
				position: JSON.stringify(position)
			},
			success: function(response){},
			error: function(response){console.error(response);}
		});
    }

    getOtherPlayers() {
        $.get('api/users/all', users => {
            users.forEach(userJSON => {
				if(myself.id === userJSON.id){
	                let position = userJSON.coords;
	                let user = this.users[userJSON.id];

	                if (!user) {
	                    user = this.users[userJSON.id] = userJSON;
	                    user.marker = new google.maps.Marker({ position });
	                    user.marker.addListener('click', () => {
	                        browserHistory.push('battle/' + userJSON.id);
	                    });
	                    user.marker.setIcon({
	                        url: require('../../assets/images/opponent.png'),
	                        scaledSize: new google.maps.Size(52, 52),
	                        origin: new google.maps.Point(0,0),
	                        anchor: new google.maps.Point(0, 0)
	                    });
	                    user.marker.setMap(this.map);
	                } else {
	                    user.marker.setPosition(position);
	                }
				}
            });
        });
    }

    getSpotemon() {
        // I know it's called spotemon in plural but that makes it even more
        // difficult to name it in sinular later.
        $.get('api/spotemon/all', spotemons => {
            let toBeRemoved = Object.assign({}, this.spotemon);
            spotemons.forEach(({id}) => {
                delete toBeRemoved[id];
            });
            Object.keys(toBeRemoved).forEach(id => {
                toBeRemoved[id].setMap();
                delete this.spotemon[id];
            });

            spotemons.forEach(spotemon => {
                if (!this.spotemon[spotemon.id]) {
                    let position = spotemon.coords;
                    let map = this.map;

                    let marker = new google.maps.Marker({ position, map });
                    marker.addListener('click', () => {
                        browserHistory.push('catch/' + spotemon.spotifyId);
                    });
                    marker.setIcon({
                        url: require('../../assets/images/artist.png'),
                        scaledSize: new google.maps.Size(52, 52),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(0, 0)
                    });
                    this.spotemon[spotemon.id] = marker;
                }
            });
        });
    }

    onMapCreated(map) {
        this.map = map;
        map.setOptions({
            disableDefaultUI: true
        });
    }

    saveMarker(ref) {
        if (ref && typeof ref.getEntity === 'function') {
            this.marker = ref.getEntity();
            this.marker.setIcon({
                url: require('../../assets/images/position.png'),
                scaledSize: new google.maps.Size(43, 64),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(0, 0)
            });
        }
    }

    render() {
        return (
            <Gmaps
                width={'100%'}
                height={'calc(100% + 23px)'}
                lat={coords.lat}
                lng={coords.lng}
                mapTypeControl={false}
                streetViewControl={false}
                zoomControl={false}
                draggable={false}
                zoom={18}
                maxZoom={18}
                minZoom={18}
                clickableIcons={false}
                styles={MapStyles}
                onMapCreated={this.onMapCreated.bind(this)}
            >
                <Marker
                    ref={this.saveMarker.bind(this)}
                />
            </Gmaps>
        );
    }
}
