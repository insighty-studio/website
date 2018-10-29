import React, {Component} from 'react';
import ServicesManMobile from 'icons/backgrounds/ServicesMobileBG';
import './index.styl';
import {Heading} from 'components/typography';

class IntroSecond extends Component {
  render() {
    return (
      <div className="intro-second-section">
        <Heading>
          See The Buzzwords
        </Heading>
        <p className="intro-second-description-first">
          We adjust to demanding schedules, provide accurate granular estimates and meet the most stringent deadlines.
          That’s why we rigorously apply the 80/20 rule.
        </p>
        <p className="intro-second-description-second">
          You draw from our expertise with tech like React Native, Firebase, Node.js, Mongo, Meteor,
          Machine Learning, VR, AR, as well as all kinds of payment processors and so much more.
        </p>
        <div className="illustration">
          <ServicesManMobile />
        </div>
      </div>
    );
  }
}

export default IntroSecond;
