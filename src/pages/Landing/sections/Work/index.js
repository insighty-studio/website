import React, {PureComponent} from 'react';

import SectionHeading from 'components/SectionHeading';
import WorkItem from './components/WorkItem';

import './index.styl';

class Work extends PureComponent {
  render() {
    return (
      <div className="work" id="work">
        <SectionHeading title="Work" />
        <div className="work-list">
          <div className="work-list-items">
            <WorkItem title="CET" delay={300} color="#7ED321" link='/cet' />
            <WorkItem title="BetterYet" delay={600} color="#FFDF4A" link='/betteryet' />
            <WorkItem title="SuperHero" delay={900} link='/superhero' />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
