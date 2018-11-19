import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArrowCircled from 'icons/ArrowCircled';

import './index.styl';

class CaseStudy extends Component {
  render() {
    const {
      projectName, projectDescription, to, image, desktop,
    } = this.props;

    return (
      <div className="case-studies-section">
        <div className="case-studies-description">
          <img
            className="project-thumbnail"
            src={image}
            alt={`${projectName} screenshot`}
          />
          <div className="project-info" style={{marginTop: desktop ? '0' : '-30px'}}>
            <h2 className="project-name">
              {projectName}
            </h2>
            <p className="project-description">
              {projectDescription}
            </p>
            <a href={to} className="project-details-link">
              See More
              <ArrowCircled />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CaseStudy.propTypes = {
  desktop: PropTypes.bool,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

CaseStudy.defaultProps = {
  desktop: false,
};

export default CaseStudy;
