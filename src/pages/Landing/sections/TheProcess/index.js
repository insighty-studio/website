import React, {PureComponent} from 'react';

import SectionHeading from 'imports/components/SectionHeading';
import Process from './components/Process';
import ProcessGroup from './components/ProcessGroup';

import './styles/process-section.styl';

class TheProcess extends PureComponent {
  render() {
    return (
      <div className="the-process" id="the-process" style={this.props.style}>
        <SectionHeading title="The Process" />
        <ProcessGroup>
          <Process
            color="#3492FF"
            step="01"
            title="Product Discovery"
            description="First, we sit down to understand your business your users,
          and what problems need solved. This gives us a great base to set the process in motion."
          />
          <Process
            color="#7ED321"
            step="02"
            title="Requirements Analysis"
            description="This is where we break down the specific features your application
          needs and identify potential challenges within the project."
          />
        </ProcessGroup>
        <ProcessGroup style={{justifyContent: 'flex-end'}}>
          <Process
            color="#F5A623"
            step="03"
            title="Workload Estimation"
            description="First, we sit down to understand your business your users,
          and what problems need solved. This gives us a great base to set the process in motion."
          />
          <Process
            rightHand
            color="#FF3366"
            step="04"
            title="Development"
            description="This is where we break down the specific features your application
          needs and identify potential challenges within the project."
          />
        </ProcessGroup>
        <ProcessGroup>
          <Process
            color="#9013FE"
            step="05"
            title="Quality Assurance"
            description="Rigorous user testing and quality assurance takes place until
              the final product perfectly solves user problems and meets the project brief."
          />
          <Process
            rightHand
            color="#FF3366"
            step="06"
            title="Client Happiness"
            description="Rigorous user testing and quality assurance takes place until
            the final product perfectly solves user problems and meets the project brief."
          />
        </ProcessGroup>
      </div>
    );
  }
}

export default TheProcess;
