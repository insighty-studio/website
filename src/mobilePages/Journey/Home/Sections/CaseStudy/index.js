import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArrowCircled from 'icons/ArrowCircled';

import './index.styl';

class CaseStudy extends Component {
  render() {
    const {
      projectName, projectDescription, to, image
    } = this.props;

    return (
      <div className="case-studies-section">
        <div className="case-studies-description">
          <img className="project-thumbnail" src={image} alt={`${projectName} screenshot`} />
          <div className="project-info">
            <h2 className="project-name">
              {projectName}
            </h2>
            <p className="project-description">
              {projectDescription}
            </p>
            <a href={to} className="project-details-link">
              Project Details
              <ArrowCircled />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CaseStudy.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CaseStudy;
