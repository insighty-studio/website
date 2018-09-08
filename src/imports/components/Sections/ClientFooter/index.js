import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import PropTypes from 'prop-types';
import {RightArrowIcon} from 'icons';
import Button from 'components/Button';

import './index.styl';
import './mobile/index.styl';

class ClientFooter extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
  };

  render() {
    const {
      name, position, comment, href, photo, color, page
    } = this.props;
    return (
      <div className="client-footer">
        <div className="client-photo">
          <Image
            src={`/images/clients/${photo}.png`}
            webp={`/images/clients/${photo}.webp`}
            alt="Avatar"
          />
        </div>
        <div className="client-overview">
          <div className="name">
            {name}
          </div>
          <div className="position">
            {position}
          </div>
          <div className="comment">
            {comment}
          </div>
          <div className="buttons">
            <Button
              title="full review"
              opensNewTab
              className="full-review-btn"
              href={href}
            >
              <RightArrowIcon color={color} />
            </Button>
            <Button
              title="project details"
              className="project-details-btn"
              href={page}
            >
              <RightArrowIcon color={color} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientFooter;
