import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Button extends PureComponent {
	static propTypes = {
		className: '',
		title: '',
		disabled: false,
	};

	static defaultProps = {
		className: PropTypes.string,
		title: PropTypes.string,
		disabled: PropTypes.bool,
	};

	render() {
		const {
			className, title, disabled, ...rest
		} = this.props;
		return (
			<div className={classnames('button', disabled && 'disabled', className)}>
				<button
					disabled={disabled}
					{...rest}
				>
					{title}
				</button>
			</div>
		);
	}
}

export default Button;
