import React, {PureComponent} from 'react';

import {BetterYetTitle} from "imports/icons";

import './preview.styl';

class Preview extends PureComponent {
  render() {
    return (
      <div className="by-preview">
        <div className="hand-image">
          <img src={require('./img/hand.png')} />
        </div>
        <BetterYetTitle />
      </div>
    );
  }
}

export default Preview;
