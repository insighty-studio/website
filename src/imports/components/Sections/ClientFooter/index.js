/* eslint-disable import/no-dynamic-require,global-require */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import {RightArrowIcon} from 'icons';

import './index.styl';

class ClientFooter extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };

  render() {
    const {
      name, position, comment, href, page, photo, color
    } = this.props;
    return (
      <div className="client-footer">
        <div className="client-photo">
          <img src={`/images/clients/${photo}.png`} alt="Avatar" />
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
            <Button title="full review" className="full-review-btn" href={href}>
              <RightArrowIcon color={color} />
            </Button>
            <Button title="project details" className="project-details-btn" href={page}>
              <RightArrowIcon color={color} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientFooter;
