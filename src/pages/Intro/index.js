import React, {Component} from 'react';

import {Logo} from 'icons';
import IntroBG from 'icons/IntroBG';
import Button from 'components/interactions/Button';
import Heading from 'components/typography/Heading';
import isMobile from 'ismobilejs';

import './index.styl';
import './mobile/index.styl';

class IntroPage extends Component {
  render() {
    const isPhone = isMobile.apple.phone;

    return (
      <div className="intro-page">
        <div className="intro-bg-container">
          <IntroBG className="intro-bg" width={isPhone ? '113.12%' : '50.94%'} height={isPhone ? '36.85%' : '62.36%'} />
        </div>
        <div className="intro-main">
          <div className="intro-logo-container">
            <Logo width={isPhone ? '12.8vw' : '3.75vw'} height={isPhone ? '12.95vw' : '6.75vh'} />
          </div>

          <div className="intro-header">
            <div className="intro-principle">
              <div className="intro-principle-line" />
              <p className="intro-principle-text">OUR GUIDING PRINCIPLE</p>
            </div>
            <Heading className="intro-heading">Software with Impact</Heading>
            <p className="intro-description">
              Your FinTech idea transformed in to reality.
              Build a better tomorrow with Insighty.
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
