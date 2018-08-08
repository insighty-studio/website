import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class ProjectLogo extends PureComponent {
  static propTypes = {
    logo: PropTypes.node.isRequired,
    background: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    background: null,
  };

  render() {
    const {logo, background} = this.props;

    return (
      <div className="logo-section">
        <Parallax
          className="logo-parallax"
          offsetYMax={100}
          offsetYMin={-100}
        >
          {logo}
        </Parallax>
        <div className="logo-bg">
          <Parallax
            offsetYMax={10}
            offsetYMin={-10}
          >
            {background}
          </Parallax>
        </div>
      </div>
    );
  }
}

export default ProjectLogo;
