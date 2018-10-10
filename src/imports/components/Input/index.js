import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Input extends PureComponent {
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
        {label && <label className="input-label" htmlFor={id}>{label}</label>}
        <input id={id} className={classnames('input', className)} {...rest} />
      </Fragment>
    );
  }
}

export default Input;
