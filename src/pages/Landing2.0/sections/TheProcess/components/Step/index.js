import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Step extends PureComponent {
	static propTypes = {
		title: PropTypes.string,
		desc: PropTypes.string,
		line: PropTypes.node,
		lineStyle: PropTypes.object,
		descStyle: PropTypes.object
	};

	static defaultProps = {
		title: '',
		desc: '',
		line: null,
		lineStyle: null,
		descStyle: null
	};

  render() {
    return (
			<div className="step">
				<div className="step-line" style={this.props.lineStyle}>
					{this.props.line}
				</div>
				<div className="step-desc" style={this.props.descStyle}>
					<div>{this.props.title}</div>
					<div>{this.props.desc}</div>
				</div>
			</div>
    );
  }
}

export default Step;
