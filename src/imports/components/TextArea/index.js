import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class TextArea extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, ...rest} = this.props;
    return (
      <textarea
        className={classnames('text-area', className)}
        {...rest}
        cols="30"
        rows="10"
      />
    );
  }
}

export default TextArea;
