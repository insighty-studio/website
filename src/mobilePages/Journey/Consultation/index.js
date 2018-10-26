import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';

import Intro from './Sections/Intro';
import ConsultForm from './Sections/ConsultForm';

import './index.styl';

class MobileConsultation extends Component {
  render() {
    return (
      <div className="mobile-consult-page">
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          navigation
          slidesNavigation
          controlArrows={false}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <MobileHeader />
                <Intro />
              </div>
              <div className="section">
                <ConsultForm />
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

export default MobileConsultation;
