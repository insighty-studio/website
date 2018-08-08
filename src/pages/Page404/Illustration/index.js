import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="page-404-illustration">
        <Parallax
          className="parallax cloud"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration cloud" />
        </Parallax>
        <Parallax
          className="parallax cloud2"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration cloud2" />
        </Parallax>
        <Parallax
          className="parallax banner"
          offsetYMax={15}
          offsetYMin={-15}
        >
          <div className="illustration banner" />
        </Parallax>
        <Parallax
          className="parallax woman"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration woman" />
        </Parallax>
        <Parallax
          className="parallax first-plant"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration first-plant" />
        </Parallax>
        <Parallax
          className="parallax second-plant"
          offsetYMax={35}
          offsetYMin={-35}
        >
          <div className="illustration second-plant" />
        </Parallax>
        <Parallax
          className="parallax first-tree"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration first-tree" />
        </Parallax>
        <Parallax
          className="parallax second-tree"
          offsetYMax={35}
          offsetYMin={-35}
        >
          <div className="illustration second-tree" />
        </Parallax>
      </div>
    );
  }
}

export default Illustration;
