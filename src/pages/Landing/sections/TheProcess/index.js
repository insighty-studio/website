import React, {Component} from 'react';

import SectionHeading from 'components/SectionHeading';
import Process from './components/Process';

import './index.styl';

class TheProcess extends Component {
  render() {
    return (
      <div className="the-process">
        <SectionHeading title="The Process" />
        <Process
          step="01"
          title="Product Discovery"
        />
      </div>
    );
  }
}

export default TheProcess;
