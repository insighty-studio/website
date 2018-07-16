import React, {PureComponent} from 'react';

import './index.styl';

import SectionHeading from 'imports/components/Typography/SectionHeading';
import Step from './components/Step';

class Process extends PureComponent {
	render() {
		return (
			<div className="process">
				<SectionHeading subTitle="the" title="process" />
				<div className="description">
					<div className="row">
						<Step
							first
							number="1"
							title="Product Discovery"
							desc="You hate software projects that drag on. So do we. That’s why our team creates
							interactive prototypes within weeks of your brief so you can visualize the
							end product and request adjustments as quickly as possible."
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
							title="Workload Estimation"
							desc="First, we sit down to understand your business your users, and what problems need
							solved. This gives us a great base to set the process in motion."
						/>
						<Step
							number="4"
							title="Development"
							desc="This is where  the magic happens. Our software engineers get to work,
							implementing features and functionalities as previously agreed."
						/>
					</div>
					<div className="row">
						<Step
              number="5"
							title="Quality Assurance"
							desc="Rigorous user testing and quality assurance takes place until the final product
							perfectly solves user problems and meets the project brief."
						/>
						<Step
              last
              number="6"
							title="Client Happiness"
              desc="We create communication channels to make sure that everyone on the team is conscious
							of your goals. This team alignment ensures mutual wins."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Process;
