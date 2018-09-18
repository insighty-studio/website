import React, {Component} from 'react';

import Header from 'components/Header';
import Heading from 'components/typography/Heading';
import {VRGirlInSpace} from 'icons';

import './index.styl';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="vr-girl-container">
          <VRGirlInSpace className="vr-girl" />
        </div>
        <div className="home-content">
          <Heading className="home-heading">
            Create The Outlier Software
            <br />
            That Changes The World.
          </Heading>
          <p className="home-description">
            You are embarking on a journey of seeing a new FinTech product through.
            <br />
            We help you overcome the digital chaos to address a market need before
            <br />
            someone else seizes the opportunity.
          </p>
          <p className="home-description">
            With our guidance you avoid making the mistakes we already learned from.
            <br />
            More about your journey.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
