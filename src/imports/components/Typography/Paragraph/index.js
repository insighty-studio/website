import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Paragraph extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    animated: PropTypes.bool
  };

  static defaultProps = {
    children: '',
    animated: false
  };

  render() {
    return (
      <div
        className="paragraph"
        data-aos={this.props.animated && 'fade-up'}
        data-aos-easing={this.props.animated && 'ease-out-sine'}
        data-aos-delay={this.props.animated && '250'}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Paragraph;
