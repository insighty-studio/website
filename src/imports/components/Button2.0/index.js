import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles/button.styl';

class Button extends PureComponent {
	static propTypes = {
	  className: PropTypes.string,
	  title: PropTypes.string
	};

	static defaultProps = {
	  className: '',
	  title: ''
	};

	render() {
	  const {className, title} = this.props;
	  return (
  <div className={classnames('button', className)}>
    {title}
  </div>
	  );
	}
}

export default Button;
