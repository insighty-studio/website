import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WebParallax from 'components/WebParallax';

import './index.styl';

class ProjectLogo extends PureComponent {
  static propTypes = {
    logo: PropTypes.node.isRequired,
    background: PropTypes.node,
  };

  static defaultProps = {
    background: null,
  };

  render() {
    const {logo, background} = this.props;

    return (
      <div className="project-logo">
        <WebParallax
          className="logo-parallax"
          offsetYMax={100}
          offsetYMin={-100}
        >
          {logo}
        </WebParallax>
        <div className="logo-bg">
          <WebParallax
            offsetYMax={10}
            offsetYMin={-10}
          >
            {background}
          </WebParallax>
        </div>
      </div>
    );
  }
}

export default ProjectLogo;
