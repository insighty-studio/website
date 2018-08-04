import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class ProjectLogo extends PureComponent {
  static propTypes = {
    logo: PropTypes.node.isRequired,
    background: PropTypes.arrayOf(PropTypes.node)
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
          offsetYMax={160}
          offsetYMin={-160}
        >
          {logo}
        </Parallax>
        <div className="logo-bg">
          <Parallax
            offsetYMax={20}
            offsetYMin={-20}
          >
            {background}
          </Parallax>
        </div>
      </div>
    );
  }
}

export default ProjectLogo;
