import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Button extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		disabled: PropTypes.bool,
		styleType: PropTypes.oneOf(['white, blue'])
	};

	static defaultProps = {
		className: '',
		title: '',
		disabled: false,
		styleType: null
	};

	render() {
		const {className, title, disabled, styleType} = this.props;
		return (
			<button
				className={classnames('button', className, styleType)}
				disabled={disabled}
			>
				{title}
			</button>
		);
	}
}

export default Button;
