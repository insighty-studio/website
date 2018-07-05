import React, {PureComponent} from 'react';
import SectionHeading from 'imports/components/SectionHeading';
import WorkItem from './components/WorkItem';

import './styles/work-section.styl';

class Work extends PureComponent {
  render() {
    return (
      <div className="work" id="work">
        <SectionHeading title="Work" />
        <div className="work-list">
          <div className="work-list-items">
            <WorkItem title="CET" delay={300} color="#7ED321" link='#' />
            <WorkItem title="BetterYet" delay={600} color="#FFDF4A" link='better-yet' />
            <WorkItem title="SuperHero" delay={900} link='#' />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
