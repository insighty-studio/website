import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import FullPageScroll from 'components/interactions/FullPageScroll';
// TODO rename all the `Sections` directories to `components`
import Intro from './Sections/Intro';
import ConsultForm from './Sections/ConsultForm';

import './index.styl';

class MobileConsultation extends Component {
  render() {
    return (
      <div className="mobile-consult-page">
        <FullPageScroll>
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
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileConsultation;
