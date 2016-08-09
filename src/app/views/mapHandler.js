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
                width={'800px'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={16}
                params={{v: '3.exp'}}
            >
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                />
            </Gmaps>
            );
    }
}

