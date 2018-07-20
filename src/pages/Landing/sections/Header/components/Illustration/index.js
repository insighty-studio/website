import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import CloudIcon from './cloud';

import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="header-illustration">
        <Parallax
          className="parallax cloud"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          <div className="illustration cloud"><CloudIcon /></div>
        </Parallax>
        <Parallax
          className="parallax person"
          offsetYMax={15}
          offsetYMin={-15}
        >
          <div className="illustration person" />
        </Parallax>
        <Parallax
          className="parallax plant"
          offsetYMax={50}
          offsetYMin={-50}
        >
          <div className="illustration plant" />
        </Parallax>
        <Parallax
          className="parallax message"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          <div className="illustration message" />
        </Parallax>
        <Parallax
          className="parallax laptop"
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="illustration laptop" />
        </Parallax>
        <Parallax
          className="parallax program"
          offsetYMax={10}
          offsetYMin={-10}
        >
          <div className="illustration program" />
        </Parallax>
      </div>
    );
  }
}

export default Illustration;
