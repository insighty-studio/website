import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Button extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		disabled: PropTypes.bool
	};

	static defaultProps = {
		className: '',
		title: '',
		disabled: false
	};

	render() {
		const {className, title, disabled} = this.props;
		return (
			<button
				className={classnames('button', className, 'hover-grow')}
				disabled={disabled}
			>
				{title}
			</button>
		);
	}
}

export default Button;
