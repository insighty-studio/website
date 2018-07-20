import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SectionName extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: '',
  };

  render() {
    return (
      <div className="section-name">{this.props.name}</div>
    );
  }
}

export default SectionName;
