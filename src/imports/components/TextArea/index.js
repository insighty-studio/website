import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class TextArea extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {className, ...rest} = this.props;
    return (
      <div className={classnames('form-text-area', className)}>
        <textarea
          {...rest}
          cols="30"
          rows="10"
        />
      </div>
    );
  }
}

export default TextArea;
