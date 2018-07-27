import React, {PureComponent} from 'react';
import {
  Teradata,
  Staples,
  Menlopark,
  Lieferando,
  Jackman,
  Momentum
} from './icons';

import './index.styl';

class Partners extends PureComponent {
  render() {
    return (
      <div className="partners">
        <Momentum />
        <Teradata />
        <Lieferando />
        <Jackman />
        <Staples />
        <Menlopark />
      </div>
    );
  }
}

export default Partners;
