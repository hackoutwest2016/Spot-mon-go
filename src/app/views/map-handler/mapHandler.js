import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 57.704167,
    lng: 11.965128
};

export default class MapHandler extends Component {
    render() {
        return (
            <Gmaps
                width={'100%'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                mapTypeControl={false}
                streetViewControl={false}
                zoomControl={false}
                zoom={16}
            >
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                />
            </Gmaps>
            );
    }
}

