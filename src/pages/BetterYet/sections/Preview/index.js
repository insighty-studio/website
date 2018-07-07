import React, {PureComponent} from 'react';

import {BetterYetTitle} from "imports/icons";

import './preview.styl';

class Preview extends PureComponent {
  render() {
    return (
      <div className="by-preview">
        <BetterYetTitle />
      </div>
    );
  }
}

export default Preview;
