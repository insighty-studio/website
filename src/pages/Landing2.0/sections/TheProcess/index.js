import React, {PureComponent} from 'react';

import './index.styl';

import SectionHeading from 'imports/components/SectionHeading';
import Step from './components/Step';

class TheProcess extends PureComponent {
	render() {
		return (
			<div className="the-process">
				<SectionHeading subText="the" text="process" />
				<div className="description">
					<div className="row">
						<Step
							first
							number="1"
							title="Client Happiness"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
						/>
						<Step
							number="2"
							title="Requirements Analysis"
							desc="This is where we break down the specific features your application needs and identify
							potential challenges within the project."
						/>
					</div>
					<div className="row">
						<Step
							number="3"
							title="Client Happiness"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
						/>
						<Step
							number="4"
							title="Requirements Analysis"
							desc="This is where we break down the specific features your application needs and identify
							potential challenges within the project."
						/>
					</div>
					<div className="row">
						<Step
							number="5"
							title="Client Happiness"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
						/>
						<Step
							last
							number="6"
							title="Requirements Analysis"
							desc="This is where we break down the specific features your application needs and identify
							potential challenges within the project."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TheProcess;
