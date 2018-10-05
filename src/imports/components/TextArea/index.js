import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class TextArea extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    label: '',
    id: '',
  };

  render() {
    const {
      className, label, id, ...rest
    } = this.props;
    return (
      <Fragment>
        {label && <label className="text-area-label" htmlFor={id}>{label}</label>}
        <textarea
          className={classnames('text-area', className)}
          id={id}
          {...rest}
          cols="30"
          rows="10"
        />
      </Fragment>
    );
  }
}

export default TextArea;
