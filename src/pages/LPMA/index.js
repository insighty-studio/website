import React, {PureComponent} from 'react';

import Header from './sections/Header';
import Description from './sections/Description';

import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Header />
        <Description />
      </div>

    );
  }
}

export default LPMA;
