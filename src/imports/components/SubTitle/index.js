import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SubTitle extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <div className="sub-title">
        <div className="text">{this.props.children}</div>
      </div>
    );
  }
}

export default SubTitle;
