import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Logo} from 'icons';
import IntroBG from 'icons/backgrounds/IntroBG';
import Button from 'components/interactions/Button';
import {Heading} from 'components/typography';

import './index.styl';
import './mobile/index.styl';
import {trackEvent} from 'analytics';

class IntroPage extends Component {
  onClickBeginJourney() {
    trackEvent('Begin Journey Clicked');
  }

  render() {
    return (
      <div className="intro-page">
        <div className="intro-main">
          <div className="intro-logo-container">
            <Logo width="48px" height="49px" />
          </div>

          <div className="intro-content">
            <div className="intro-header">
              <div className="intro-principle">
                <div className="intro-principle-line" />
                <p className="intro-principle-text">WE ARE INSIGHTY</p>
              </div>
              <Heading>Got A Big Idea?</Heading>
              <p className="intro-description">
                Build your Tech Business with our help.
                <br />
                We take people&#39;s vision and bring it to life.
              </p>
              <div className="button-container">
                <Link to="/home">
                  <Button onClick={() => this.onClickBeginJourney()}>BEGIN YOUR JOURNEY</Button>
                </Link>
              </div>
            </div>

            <div className="intro-bg-container">
              <IntroBG
                className="intro-bg"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;
