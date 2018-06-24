import React, {Component} from 'react';

import SectionHeading from 'components/SectionHeading';

import WorkItem from './components/WorkItem';

import './index.styl';

class Work extends Component {
  render() {
    return (
      <div className="work" id="work">
        <SectionHeading title="Work" />
          <div className="work-list">
            <WorkItem title="CET" color="#7ED321" />
            <WorkItem title="BetterYet" color="#FFDF4A" />
            <WorkItem title="SuperHero" />
          </div>
      </div>
    );
  }
}

export default Work;
