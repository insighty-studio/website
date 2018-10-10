import React, {PureComponent} from 'react';
import {Heading} from 'components/typography';

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
                desc="First, we sit down to understand your business, your users, and what problems need to be solved.
                This gives us a great base to set the process in motion."
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
                desc="Our team digs deeply into how much time is needed for the project.
                This is the perfect opportunity to reduce scope and manage your budget."
              />
              <Step
                number="4"
                title="Development"
                desc="This is where the magic happens.
                Our software engineers get to work, implementing features and functionalities as previously agreed."
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
                desc="We create communication channels to make sure that everyone
                on the team is conscious of your goals. This team alignment ensures mutual wins."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
