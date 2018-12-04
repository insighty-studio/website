import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
  };

  render() {
    const {className, children} = this.props;

    return (
      <h1 className={classnames('heading', className)}>{children}</h1>
    );
  }
}

export default Heading;
