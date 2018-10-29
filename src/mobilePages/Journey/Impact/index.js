import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import FullPageScroll from 'components/interactions/FullPageScroll';

import Intro from './Sections/Intro';

import './index.styl';

class MobileImpact extends Component {
  render() {
    return (
      <div className="impact-page">
        <MobileHeader />
        <FullPageScroll>
          <div className="section">
            <Intro />
          </div>
          <div className="section footer-section">
            <MobileFooter />
          </div>
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileImpact;
