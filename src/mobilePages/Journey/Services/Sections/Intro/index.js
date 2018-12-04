import React, {Component} from 'react';
import ServicesChart from 'icons/backgrounds/ServicesBG';
import './index.styl';
import {Heading} from 'components/typography';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <Heading>Services You Deserve</Heading>
        <p className="intro-description-first">
          You hate software projects that drag on. We do too.
          If you’re like most people, you see software development in general as lingering and expensive.
          We help you win the day by offering an alternative plan.
        </p>
        <div className="illustration">
          <ServicesChart />
        </div>
      </div>
    );
  }
}

export default Intro;
