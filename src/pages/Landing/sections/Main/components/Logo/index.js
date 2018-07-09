import React, {Component} from 'react';
import OpacityAnimation from 'imports/components/OpacityAnimation';
import CSSTransition from 'react-transition-group/CSSTransition';

import './index.styl';

class Logo extends Component {
  renderLogo() {
    return (
      <OpacityAnimation delay={1000}>
        <div className="logo-title">
          Insighty
          <span>
.
          </span>
        </div>
      </OpacityAnimation>
    );
  }

  renderDesc() {
    return (
      <OpacityAnimation delay={1300}>
        <div className="logo-desc">
          {this.props.desc}
        </div>
      </OpacityAnimation>
    );
  }

  render() {
    return (
      <CSSTransition classNames="logo" timeout={1000} in appear>
        <div className="logo">
          <div className="logo-items-bg">
            <div className="logo-items">
              {this.renderLogo()}
              {this.props.desc && this.renderDesc()}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Logo;
