import React, { Component } from 'react';
import MapHandler from './map-handler/mapHandler';
import style from './main.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <MapHandler />
            </div>
        );
    }
}

