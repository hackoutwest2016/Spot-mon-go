import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

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
    }

    updatePosition({latitude, longitude}) {
        this.marker.setPosition({lat: latitude, lng: longitude});
    }

    onMapCreated(map) {
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
                zoom={19}
                draggable={false}
                maxZoom={19}
                minZoom={19}
                clickableIcons={false}
                onMapCreated={this.onMapCreated}
            >
                <Marker
                    ref={this.saveMarker.bind(this)}
                />
            </Gmaps>
            );
    }
}

