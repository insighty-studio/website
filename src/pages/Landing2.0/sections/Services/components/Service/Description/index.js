import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './description.styl';

class Description extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string
  };

  static defaultProps = {
    title: '',
    subtitle: '',
    text: ''
  };

  render() {
    const {title, subtitle, text} = this.props;

    return (
      <div className="service-description">
        <div className="service-title">
          <div className="title-line" />
          {title}
        </div>
        <div className="service-subtitle">
          {subtitle}
        </div>
        <div className="service-text">
          {text}
        </div>
      </div>
    );
  }
}

export default Description;
