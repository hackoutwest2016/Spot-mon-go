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
            >
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                />
            </Gmaps>
            );
    }
}

