import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import FullPageScroll from 'components/interactions/FullPageScroll';

import Intro from './Sections/Intro';
import Services from './Sections/Services';
import CaseStudy from './Sections/CaseStudy';

import './index.styl';

class MobileHome extends Component {
  render() {
    return (
      <div className="home-page">
        <MobileHeader />
        <FullPageScroll>
          <div className="section">
            <Intro />
          </div>
          <div className="section">
            <Services />
          </div>
          <div className="section cs-section">
            <h1 className="case-studies-heading">
              Our Work
            </h1>
            <div className="slide">
              <CaseStudy
                projectName="BetterYet"
                projectDescription="Loyalty for Small Businesses"
                to="/betteryet"
                image="/images/mobile/betteryet-mobile-thumbnail.png"
              />
            </div>
            <div className="slide">
              <CaseStudy
                projectName="HUB X"
                projectDescription="Community app"
                to="/hub"
                image="/images/mobile/hub-mobile-thumbnail.png"
              />
            </div>
            <div className="slide">
              <CaseStudy
                desktop
                projectName="LPMA"
                projectDescription="Property management system"
                to="/lpma"
                image="/images/mobile/lpma-mobile-thumbnail.png"
              />
            </div>
          </div>
          <div className="section footer-section">
            <MobileFooter />
          </div>
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileHome;
