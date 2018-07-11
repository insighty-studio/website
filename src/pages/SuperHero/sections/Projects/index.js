import React, {PureComponent} from 'react';

import './index.styl';

class Projects extends PureComponent {
  render() {
    return (
      <div className="projects-section">
        <a href="" className="title">Ready start a project?</a>
				<div className="projects">
					<div className="project">
						<div>
							<span>CET</span>
							<span style={{color: '#7ED321'}}>.</span>
						</div>
					</div>
					<div className="project">
						<div>
							<span>BetterYet</span>
							<span style={{color: '#F8C91C'}}>.</span>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default Projects;
