import React, {PureComponent} from 'react';

import './index.styl';

import {
	FirstStepIcon, SecondStepIcon, ThirdStepIcon, FourthStepIcon, FifthStepIcon, SixthStepIcon
} from 'imports/icons';
import SectionHeading from 'imports/components/SectionHeading';
import Step from './components/Step';

class TheProcess extends PureComponent {
	render() {
		return (
			<div className="the-process">
				<SectionHeading firstLine="the" secondLine="process" />
				<div className="description">
					<div className="row">
						<Step
							line={<FirstStepIcon />}
							lineStyle={{paddingLeft: '126px'}}
							title="Product Discovery"
							desc="You hate software projects that drag on. So do we.
						That’s why our team creates interactive prototypes within weeks of
						your brief so you can visualize the end product and request adjustments as quickly as possible."
							descStyle={{marginLeft: '126px'}}
						/>
						<Step
							line={<SecondStepIcon />}
							title="Requirements Analysis"
							desc="This is where we break down the specific features your application needs
							and identify potential challenges within the project."
						/>
					</div>
					<div className="row">
						<Step
							line={<ThirdStepIcon />}
							title="Workload Estimation"
							desc="First, we sit down to understand your business your users, and what problems need
							solved. This gives us a great base to set the process in motion."
							descStyle={{marginLeft: '126px'}}
						/>
						<Step
							line={<FourthStepIcon />}
							title="Requirements Analysis"
							desc="This is where we break down the specific features your application needs
							and identify potential challenges within the project."
						/>
					</div>
					<div className="row">
						<Step
							line={<FifthStepIcon />}
							title="Quality Assurance"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
							descStyle={{marginLeft: '126px'}}
						/>
						<Step
							line={<SixthStepIcon />}
							title="Client Happiness"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TheProcess;
