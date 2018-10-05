import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Logo} from 'icons';
import IntroBG from 'icons/backgrounds/IntroBG';
import Button from 'components/interactions/Button';
import Heading from 'components/typography/Heading';
import isMobile from 'ismobilejs';

import './index.styl';
import './mobile/index.styl';
import {trackEvent} from 'analytics';

class IntroPage extends Component {
  onClickBeginJourney() {
    trackEvent('Begin Journey Clicked');
  }

  render() {
    const isPhone = isMobile.apple.phone;

    return (
      <div className="intro-page">
        <div className="intro-bg-container">
          <IntroBG className="intro-bg" width={isPhone ? '113.12%' : '50.94%'} height={isPhone ? '36.85%' : '62.36%'} />
        </div>
        <div className="intro-main">
          <div className="intro-logo-container">
            <Logo width="48px" height="49px" />
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
            <Link to="/home">
              <Button onClick={() => this.onClickBeginJourney()}>BEGIN JOURNEY</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
