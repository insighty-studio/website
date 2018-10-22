import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';

import Intro from './Sections/Intro';
import Services from './Sections/Services';
import CaseStudies from './Sections/CaseStudies';

import './index.styl';

class MobileHome extends Component {
  render() {
    return (
      <div className="home-page">
        <MobileHeader />
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          navigation
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro />
              </div>
              <div className="section">
                <Services />
              </div>
              <div className="section">
                <CaseStudies />
              </div>
              <div className="section footer-section">
                <MobileFooter />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default MobileHome;
