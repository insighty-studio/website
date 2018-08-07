import React, {PureComponent} from 'react';
import {
  Teradata,
  Staples,
  Menlopark,
  Lieferando,
  Jackman,
  Momentum
} from './icons';

import './styles/web.styl';
import './styles/iphones.styl';
import './styles/iphone5.styl';

class Partners extends PureComponent {
  render() {
    return (
      <div className="partners">
        <Lieferando />
        <Momentum />
        <Jackman />
        <Teradata />
        <Menlopark />
        <Staples />
      </div>
    );
  }
}

export default Partners;
