import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';

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
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          navigation
          slidesNavigation
          controlArrows={false}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <CaseStudy
                  projectName="Booqed"
                  customImageStyles={{
                    marginBottom: 40,
                    maxHeight: 320,
                    width: 'auto'
                  }}
                  projectDescription="It’s time to reimagine space"
                  to="/booqed"
                  image="/images/mobile/booqed-mobile-thumbnail.png"
                />
              </div>
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
              <div className="section">
                <CaseStudy
                  projectName="CommuniHelp"
                  projectDescription="Smart way to volunteer"
                  to="/communihelp"
                  image="/images/mobile/communihelp-mobile-thumbnail.png"
                />
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

export default MobileCaseStudies;
