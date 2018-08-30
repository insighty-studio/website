import React, {PureComponent} from 'react';
import SectionHeading from 'components/Typography/SectionHeading/index';

import Step from './Step/index';
import './index.styl';
import './mobile/index.styl';

class Process extends PureComponent {
  componentDidMount() {
    const process = document.querySelector('.process');
    const content = document.querySelector('.process-content');
    process.style.height = `${content.offsetHeight}px`;
  }

  render() {
    return (
      <div className="process">
        <div className="process-content">
          <div className="container">
            <SectionHeading subTitle="the" title="process" />
            <div className="row">
              <Step
                first
                number="1"
                title="Product Discovery"
                desc="You hate software projects that drag on.
                So do we. That’s why our team creates interactive prototypes
                within weeks of your brief so you can visualize the end
                product and request adjustments as quickly as possible."
              />
              <Step
                hiddenLine
                number="2"
                title="Requirements Analysis"
                desc="This is where we break down the specific
                features your application needs and identify potential
                challenges within the project."
              />
            </div>
            <div className="row">
              <Step
                hiddenLine
                number="3"
                title="Workload Estimation"
                desc="First, we sit down to understand your business your
                users, and what problems need solved. This gives us a
                great base to set the process in motion."
              />
              <Step
                number="4"
                title="Development"
                desc="This is where we break down the specific features
                your application needs and identify potential challenges
                within the project."
              />
            </div>
            <div className="row">
              <Step
                hiddenLine
                number="5"
                title="Quality Assurance"
                desc="Rigorous user testing and quality assurance takes place
                until the final product perfectly solves user
                problems and meets the project brief."
              />
              <Step
                last
                number="6"
                title="Client Happiness"
                desc="Rigorous user testing and quality assurance takes
                place until the final product perfectly solves user problems
                and meets the project brief."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
