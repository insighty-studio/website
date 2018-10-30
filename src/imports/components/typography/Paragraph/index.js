import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Paragraph extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    animated: PropTypes.bool
  };

  static defaultProps = {
    animated: false
  };

  render() {
    const {children, animated} = this.props;
    return (
      <p
        className="paragraph"
        data-aos={animated && 'fade-in'}
        data-aos-easing={animated && 'ease-out-quart'}
        data-aos-delay={animated && '200'}
      >
        {children}
      </p>
    );
  }
}

export default Paragraph;
