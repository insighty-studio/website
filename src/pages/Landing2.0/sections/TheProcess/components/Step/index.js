import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Step extends PureComponent {
	static propTypes = {
		title: PropTypes.string,
		desc: PropTypes.string,
		number: PropTypes.string,
		first: PropTypes.bool,
		last: PropTypes.bool
	};

	static defaultProps = {
		title: '',
		desc: '',
		number: '',
		first: false,
		last: false,
	};

	render() {
		return (
			<div className="step">
				<div className="step-header">
					<div className="number">
						<div className={!this.props.first ? 'line' : 'filler'} />
						<div className="circle">{this.props.number}</div>
					</div>
					<div className={!this.props.last ? 'line' : ''} />
				</div>
				<div className="step-desc">
					<div data-aos="fade-in" data-aos-easing="ease-in-sine">{this.props.title}</div>
					<div data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="250">{this.props.desc}</div>
				</div>
			</div>
		);
	}
}

export default Step;
