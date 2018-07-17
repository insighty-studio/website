import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {ExploreButtonIcon} from 'icons';
import './index.styl';

class Button extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		disabled: PropTypes.bool,
		children: PropTypes.node
	};

	static defaultProps = {
		className: '',
		title: '',
		disabled: false,
		children: null
	};

	render() {
		const {className, title, disabled, children} = this.props;
		return (
			<button
				className={classnames('button', className, 'hover-grow')}
				disabled={disabled}
			>
				<span className={children && 'button-title'}>{title}</span>
				{children}
			</button>
		);
	}
}

export default Button;
