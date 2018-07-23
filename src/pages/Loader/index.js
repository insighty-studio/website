import React, {PureComponent} from 'react';
import {InsightyLogo} from 'icons';

import './index.styl';

class Loader extends PureComponent {
  render() {
    return (
      <div className="loader-page">
        <InsightyLogo />
        <div className="light-shade" />
        <div className="shade" />
      </div>
    );
  }
}

export default Loader;
