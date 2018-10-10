import React, {Component} from 'react';

import {Logo} from 'icons';
import IntroBG from 'icons/backgrounds/IntroBG';
import {NavButton} from 'components/Button';
import {Aligner} from 'components/Layout';
import {Paragraph, SectionHeading} from 'components/Typography';

import './index.styl';
import './mobile.styl';

import {trackEvent} from 'analytics';

class IntroPage extends Component {
  onClickBeginJourney() {
    trackEvent('Begin Journey Clicked');
  }

  render() {
    return (
      <div className="intro-page">
        <Aligner className="intro-top-bar">
          <Logo width="48px" height="49px" />
        </Aligner>

        <Aligner className="intro-content">
          <div className="intro-bg-container">
            <IntroBG
              className="intro-bg"
              width="100%"
            />
          </div>
          <div className="intro-header">
            <SectionHeading subTitle="Our Guiding Principle" title="FinTech with Purpose" />
            <Paragraph className="intro-text">
              Your idea transformed into reality.
              <br />
              Build a better tomorrow with Insighty.
            </Paragraph>
            <NavButton to="/home" onClick={() => this.onClickBeginJourney()}>Begin Journey</NavButton>
          </div>
        </Aligner>
      </div>
    );
  }
}

export default IntroPage;
