import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { MapStyles } from './mapStyles';
import $ from 'jquery';

const coords = {
    lat: 57.704167,
    lng: 11.965128
};

export default class MapHandler extends Component {
    constructor() {
        super();

        let options = {
            maximumAge: 0,
            enableHighAccuracy: true
        };
        navigator.geolocation.watchPosition(
                ({coords}) => this.updatePosition(coords),
                console.error.bind(console),
                options);

        this.users = {};
        setInterval(this.getOtherPlayers.bind(this), 5000);
    }

    updatePosition({latitude, longitude}) {
        let position = {lat: latitude, lng: longitude};
        this.marker.setPosition(position);
        this.map.setCenter(position);
    }

    getOtherPlayers() {
        $.get('api/users/all', users => {
            users.forEach(userJSON => {
                let position = userJSON.coords;
                let user = this.users[userJSON.id];
                if (!user) {
                    user = this.users[userJSON.id] = userJSON;
                    user.marker = new google.maps.Marker({ position });
                    user.marker.setMap(this.map);
                } else {
                    user.marker.setPosition(position);
                }
            });
        })
    }

    onMapCreated(map) {
        this.map = map;
        map.setOptions({
            disableDefaultUI: true
        });
    }

    saveMarker(ref) {
        this.marker = ref.getEntity();
    }

    render() {
        return (
            <Gmaps
                width={'100%'}
                height={'100%'}
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

