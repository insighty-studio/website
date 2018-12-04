import React, {Component} from 'react';
import VRGirlInSpace from 'icons/backgrounds/HomeBG';
import {Heading} from 'components/typography';
import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <Heading>Create The Outlier Software That Changes The World.</Heading>
        <p className="intro-description-first">
          You are embarking on a journey of seeing a new Tech Startup through.
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
