import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class ProcessGroup extends PureComponent {
	static propTypes = {
		style: PropTypes.object,
		children: PropTypes.node
	};

	static defaultProps = {
		style: null,
		children: null
	};

	render() {
		const {style, children} = this.props;
		return (
			<div className="process-group" style={style}>
				{children}
			</div>
		)
	}
}

export default ProcessGroup;
