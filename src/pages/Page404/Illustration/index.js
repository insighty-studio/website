import React, {PureComponent} from 'react';
import WebParallax from 'components/WebParallax';

import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="page-404-illustration">
        <WebParallax
          className="parallax cloud"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration cloud" />
        </WebParallax>
        <WebParallax
          className="parallax cloud2"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration cloud2" />
        </WebParallax>
        <WebParallax
          className="parallax banner"
          offsetYMax={15}
          offsetYMin={-15}
        >
          <div className="illustration banner" />
        </WebParallax>
        <WebParallax
          className="parallax woman"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration woman" />
        </WebParallax>
        <WebParallax
          className="parallax first-plant"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration first-plant" />
        </WebParallax>
        <WebParallax
          className="parallax second-plant"
          offsetYMax={35}
          offsetYMin={-35}
        >
          <div className="illustration second-plant" />
        </WebParallax>
        <WebParallax
          className="parallax first-tree"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration first-tree" />
        </WebParallax>
        <WebParallax
          className="parallax second-tree"
          offsetYMax={35}
          offsetYMin={-35}
        >
          <div className="illustration second-tree" />
        </WebParallax>
      </div>
    );
  }
}

export default Illustration;
