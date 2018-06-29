import React, {Component} from 'react';
import SectionHeading from 'imports/components/SectionHeading';
import WorkItem from './components/WorkItem';

import './work-section.styl';

class Work extends Component {
  render() {
    return (
      <div className="work" id="work" style={this.props.style}>
        <SectionHeading title="Work" />
        <div className="work-list">
          <div className="work-list-items">
            <WorkItem title="CET" delay={300} color="#7ED321" />
            <WorkItem title="BetterYet" delay={600} color="#FFDF4A" />
            <WorkItem title="SuperHero" delay={900} />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
