import React, {Component} from 'react';

import {Logo} from 'icons';
import IntroBG from 'icons/IntroBG';
import Button from 'components/interactions/Button';
import Heading from 'components/typography/Heading';

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
            <Heading className="intro-heading">Software with Impact</Heading>
            <p className="intro-description">
              We sponsor one socially impactful digital product
              <br />
              for every software project our clients do with us.
            </p>
          </div>

          <div className="button-container">
            <a href="/home">
              <Button>BEGIN JOURNEY</Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
