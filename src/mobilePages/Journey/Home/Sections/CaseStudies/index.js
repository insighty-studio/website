import React, {Component} from 'react';
import ArrowCircled from 'icons/ArrowCircled';

import './index.styl';

class CaseStudies extends Component {
  render() {
    return (
      <div className="case-studies-section">
        <h1 className="case-studies-heading">
          Our Work
        </h1>
        <div className="case-studies-description">
          <div className="case-studies-screen-scroll">
            <img alt="phone screenshot" className="phone-image" src="/images/screens/BY/BYScreen1.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen2.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen3.png" />
          </div>
          <h2 className="project-name">
            BetterYet
          </h2>
          <p className="project-description">
            Easy loyalty programs  for Small Businesses
          </p>
          <a href="/betteryet" className="project-details-link">
            Project Details
            <ArrowCircled />
          </a>
        </div>
      </div>
    );
  }
}

export default CaseStudies;
