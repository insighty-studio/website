import React, {PureComponent} from 'react';
import {InsightyLogo} from 'icons';

import './index.styl';

class LoaderLine extends PureComponent {
  render() {
    return (
      <div className="loader-page">
        <div className="loader-line" style={{width: `${this.props.loading}%`}} />
      </div>
    );
  }
}

export default LoaderLine;
