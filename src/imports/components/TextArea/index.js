import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles/text-area.styl';

class TextArea extends PureComponent {
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

TextArea.propTypes = {
  className: PropTypes.string,
};

TextArea.defaultProps = {
  className: '',
};

export default TextArea;
