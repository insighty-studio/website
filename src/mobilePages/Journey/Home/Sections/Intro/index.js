import React, {Component} from 'react';
import VRGirlInSpace from 'icons/backgrounds/HomeBG';
import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <h1 className="intro-heading">
          Create The Outlier Software That Changes The World.
        </h1>
        <p className="intro-description-first">
          You are embarking on a journey of seeing a new FinTech product through.
          We help you overcome the digital chaos to address a market need before someone else seizes the opportunity.
        </p>
        <p className="intro-description-second">
          With our guidance you avoid making the mistakes we already learned from.
        </p>
        <div className="illustration">
          <VRGirlInSpace />
        </div>
      </div>
    );
  }
}

export default Intro;
