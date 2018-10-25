import React, {Component} from 'react';
import ServicesChart from 'icons/backgrounds/ServicesBG';
import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <h1 className="intro-heading">
          Services You Deserve
        </h1>
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
