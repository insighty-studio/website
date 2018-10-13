import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueid from 'lodash.uniqueid';

import IphoneMobileMock from 'icons/IphoneMobileMock';
import AnimatedButton from 'components/interactions/AnimatedButton';
import {RightArrowIcon} from 'icons';

import './index.styl';
import './mobile/index.styl';

class CaseStudy extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    mobileImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    mockColor: PropTypes.string.isRequired,
  };

  render() {
    const {
      title, subtitle, text, href, images, mobileImages, mockColor,
    } = this.props;

    return (
      <div className="case-study">
        <div className="screens-container-mobile">
          <div className="screens-scroll">
            <div className="img-wrapper">
              <img alt="phone screenshot" src={mobileImages[0]} />
            </div>
            <div className="img-wrapper second">
              <img alt="phone screenshot" src={mobileImages[1]} />
            </div>
            <div className="img-wrapper third">
              <img alt="phone screenshot" src={mobileImages[2]} />
            </div>
          </div>
          <IphoneMobileMock className={mockColor} />
        </div>
        <div className="case-study-bg">
          <div className="case-study-description">
            <p className="case-study-title">{title}</p>
            <p className="case-study-subtitle">{subtitle}</p>

            <div className="case-study-separator" />

            {text.split('\\n').map(par => <p className="case-study-text" key={uniqueid('cs-text-')}>{par}</p>)}
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
            {images.map((source, idx) => (
              <img
                key={uniqueid('screen-')}
                alt="phone screenshot"
                className={classnames(!idx && 'phone-image')}
                src={source}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
