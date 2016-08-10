import React, { Component } from 'react';
import { Link } from 'react-router';
import tools from '../../modules/tools';

import style from './win.scss';

export default class Win extends Component {

    render() {
      return (
      <div className="message-view">
        <h1>You win!</h1>
        <img className="win-pic" src={require('../../assets/images/caught.png')}/>
        <Link to={"/"}><button className="btn popup-btn popup-btn-accept">Continue</button></Link>
      </div>
      );
    }
}
