import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import FullPageScroll from 'components/interactions/FullPageScroll';

import CaseStudy from './Sections/CaseStudy';

import './index.styl';

class MobileCaseStudies extends Component {
  render() {
    return (
      <div className="case-studies-page">
        <MobileHeader />
        <h1 className="sticky-heading">
          Our Work
        </h1>
        <FullPageScroll>
          <div className="section">
            <CaseStudy
              projectName="BetterYet"
              projectDescription="Loyalty for Small Businesses"
              to="/betteryet"
              image="/images/mobile/betteryet-mobile-thumbnail.png"
            />
          </div>
          <div className="section">
            <CaseStudy
              projectName="HUB X"
              projectDescription="Community app"
              to="/hub"
              image="/images/mobile/hub-mobile-thumbnail.png"
            />
          </div>
          <div className="section">
            <CaseStudy
              desktop
              projectName="LPMA"
              projectDescription="Property management system"
              to="/lpma"
              image="/images/mobile/lpma-mobile-thumbnail.png"
            />
          </div>
          <div className="section footer-section">
            <MobileFooter />
          </div>
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileCaseStudies;
