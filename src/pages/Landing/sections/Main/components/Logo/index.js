import React from 'react';
import OpacityAnimation from 'imports/components/OpacityAnimation';

import './logo.styl';

const Logo = ({desc}) => (
  <div className="logo">
    <div className="logo-items-bg">
      <div className="logo-items">
        <OpacityAnimation delay={300}>
          <div className="logo-title">
            Insighty
            <span>.</span>
          </div>
        </OpacityAnimation>
        <OpacityAnimation delay={600}>
          <div className="logo-desc">{desc}</div>
        </OpacityAnimation>
      </div>
    </div>
  </div>
);

export default Logo;
