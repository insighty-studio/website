import React from 'react';
import OpacityAnimation from 'imports/components/OpacityAnimation';
import CSSTransition from 'react-transition-group/CSSTransition';

import './logo.styl';

const Logo = ({desc}) => (
  <CSSTransition in classNames="logo" appear={true}>
    <div className="logo">
      <div className="logo-items-bg">
        <div className="logo-items">
          <OpacityAnimation delay={1000}>
            <div className="logo-title">
              Insighty
              <span>.</span>
            </div>
          </OpacityAnimation>
          <OpacityAnimation delay={1300}>
            <div className="logo-desc">{desc}</div>
          </OpacityAnimation>
        </div>
      </div>
    </div>
  </CSSTransition>
);

export default Logo;
