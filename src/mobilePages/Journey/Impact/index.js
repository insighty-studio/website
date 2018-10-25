import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';

import Intro from './Sections/Intro';

import './index.styl';

class MobileImpact extends Component {
  render() {
    return (
      <div className="impact-page">
        <MobileHeader />
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          navigation
          slidesNavigation
          controlArrows={false}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro />
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

export default MobileImpact;
