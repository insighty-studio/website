import React, {PureComponent} from 'react';

import Header from './sections/Header';
import About from './sections/About';

import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Header />
        <About />
      </div>

    );
  }
}

export default LPMA;
