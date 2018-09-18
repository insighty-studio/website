import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Title extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: ''
  };

  render() {
    const {className, children} = this.props;

    return (
      <p className={classnames('heading', className)}>{children}</p>
    );
  }
}

export default Title;
