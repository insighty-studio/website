import React, {PureComponent} from 'react';
import WebParallax from 'components/WebParallax';

import CloudIcon from './cloud';
import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="header-illustration">
        <WebParallax
          className="parallax cloud"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          <div className="illustration cloud">
            <CloudIcon />
          </div>
        </WebParallax>
        <WebParallax
          className="parallax person"
          offsetYMax={15}
          offsetYMin={-15}
        >
          <div className="illustration person" />
        </WebParallax>
        <WebParallax
          className="parallax plant"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration plant" />
        </WebParallax>
        <WebParallax
          className="parallax message"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          <div className="illustration message" />
        </WebParallax>
        <WebParallax
          className="parallax laptop"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration laptop" />
        </WebParallax>
        <WebParallax
          className="parallax program"
          offsetYMax={10}
          offsetYMin={-10}
        >
          <div className="illustration program" />
        </WebParallax>
      </div>
    );
  }
}

export default Illustration;
