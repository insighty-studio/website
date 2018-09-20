import React, {Component} from 'react';

import Heading from 'components/typography/Heading';
import AnimatedButton from 'components/interactions/AnimatedButton';
import {Phone, RightArrowIcon} from 'icons';

import './index.styl';

class CaseStudy extends Component {
  render() {
    const {
      title, subtitle, text, href,
    } = this.props;

    return (
      <div className="case-study">
        <Heading className="case-study-heading">Select Case Studies</Heading>

        <div className="case-study-bg">
          <div className="case-study-description">
            <p className="case-study-title">{title}</p>
            <p className="case-study-subtitle">{subtitle}</p>

            <div className="case-study-separator" />

            <p className="case-study-text">
              {text}
            </p>
          </div>

          <div className="animated-button-container">
            <AnimatedButton
              title="Project Details"
              className="animated-button"
              href={href}
            >
              <RightArrowIcon color="white" />
            </AnimatedButton>
          </div>

          <div className="screens-container">
            <Phone />
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
