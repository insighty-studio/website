import React, {Component} from 'react';

import Preview from './sections/Preview';
import Description from './sections/Description';
import Logo from './sections/Logo';

import './index.styl'

class BetterYet extends Component {
  render() {
    return (
      <div className="better-yet">
        <Preview />
        <Description />
        <Logo />
      </div>
    );
  }
}

export default BetterYet;
