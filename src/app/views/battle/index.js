import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './battle.scss';
import ProgressBar from 'progressbar.js';
import SpotemonData from '../spotemon/spotemon_2.js';
import $ from 'jquery';
import velocity from 'velocity-animate';
import {browserHistory} from "react-router";
// import view from './battle.jsx';


export default class Battle extends Component {
  constructor() {
    super();

    this.state = {
      initialized: false,
      mySpotemon: {},
      opponentSpotemon: {}
    }
  }
    componentDidMount () {
      var self = this;

          var artistId1 = '3jK9MiCrA42lLAdMGUZpwa';
          var artistId2 = '4X0v8sFoDZ6rIfkeOeVm2i';

          SpotemonData.getArtist(artistId1, function(response){
            self.setState(Object.assign({}, self.state, 
              {
                mySpotemon: {
                  name: response.name,
                  cp: response.popularity,
                  image: response.images[0].url,
                  health: 1
                }
              }));

            self.bar1.animate(1);
          });

          SpotemonData.getArtist(artistId2, function(response){
            self.setState(Object.assign({}, self.state, 
              {
                opponentSpotemon: {
                  name: response.name,
                  cp: response.popularity,
                  image: response.images[0].url,
                  health: 1
                }
              }));

            self.bar2.animate(1);
          });

          this.bar1 = new ProgressBar.Line('#progress-bar1', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 200,
            color: '#4c99f9',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          this.bar2 = new ProgressBar.Line('#progress-bar2', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 200,
            color: '#4c99f9',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
      
      this.click = this.click.bind(this);
    }

    click () {
      var self = this;
      var damage = (self.state.mySpotemon.cp/100)*8;
      var health = self.state.opponentSpotemon.health;
      var name = self.state.opponentSpotemon.name;
      var cp = self.state.opponentSpotemon.cp;
      var image = self.state.opponentSpotemon.image;

      if(health>=0){
        health = self.state.opponentSpotemon.health-damage/100;

        //console.log("health: " + health);
        self.setState(Object.assign({}, self.state, {
          opponentSpotemon: {
            name: name,
            cp: cp,
            image: image,
            health: health
          }
        }));
        
        this.bar2.animate(health);
        setTimeout(() => {
          this.bar1.animate(Math.min(1, health+0.1));
        }, 500);

        // $(".note").velocity({ 
        //   translateY: 150, 
        //   translateX: 150 
        // }, 
        // {
        // duration: 500,
        // easing: [ .42, 0, .58, 1 ]
        // })
        // .velocity("fadeOut", { duration: 500 });

      }
      else{
        console.log('win!');
        browserHistory.push('/win');

        //interrupt opponent
      }
    }

  	render() {
    	return (
        <div className="battle-wrapper">

          <div className="battle-stage stage1"><img src={require('../../assets/images/battlestage1.png')}/></div>
          <div onClick={this.click} className="battle-stage stage2"><img src={require('../../assets/images/battlestage2.png')}/></div>

          <div className="header">
            <div className="leftPlayerBar">
              <div className="name">{this.state.mySpotemon.name}</div>
              <div id="progress-bar1"></div>
              <div className="cp-text">CP</div>
              <div className="cp-points">{this.state.mySpotemon.cp}</div>
            </div>
            <div className="rightPlayerBar">
              <div className="name">{this.state.opponentSpotemon.name}</div>
              <div id="progress-bar2"></div>
              <div className="cp-text">CP</div>
              <div className="cp-points">{this.state.opponentSpotemon.cp}</div>
            </div>
          </div>
          
          <div className="artist rightPlayer">
            <div className="image"><img src={this.state.opponentSpotemon.image}/></div>
          </div>

          <div className="artist leftPlayer">
            <div className="image">
              <img onClick={this.click} src={this.state.mySpotemon.image}/>
            </div>
            <div className="tap-text">Tap to perform!</div>
          </div>

        </div>
      );
  	}

}
