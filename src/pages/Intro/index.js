import React, {Component} from 'react';

import {Logo} from 'icons';
import IntroBG from 'icons/IntroBG';
import Button from 'components/Button';

import './index.styl';

class IntroPage extends Component {
  render() {
    return (
      <div className="intro-page">
        <div className="intro-bg-container">
          <IntroBG className="intro-bg" />
        </div>
        <div className="intro-main">
          <div className="intro-logo-container">
            <Logo />
          </div>

          <div className="intro-header">
            <div className="intro-principle">
              <div className="intro-principle-line" />
              <p className="intro-principle-text">OUR GUIDING PRINCIPLE</p>
            </div>
            <p className="intro-heading">Software with Impact</p>
            <p className="intro-description">
              We sponsor one socially impactful digital product
              <br />
              for every software project our clients do with us.
            </p>
          </div>

          <div className="button-container">
            <Button>BEGIN JOURNEY</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
