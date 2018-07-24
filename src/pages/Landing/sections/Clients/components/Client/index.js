import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import {RightArrowIcon} from 'icons';

import './index.styl';

class Client extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    arrowIcon: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="client">
        <div className="client-photo"><img src={require(`../../images/${this.props.photo}.png`)} alt="" /></div>
        <div className="client-overview">
          <div className="name">{this.props.name}</div>
          <div className="position">{this.props.position}</div>
          <div className="comment">{this.props.comment}</div>
          <div className="buttons">
            <Button title="full review" className="full-review-btn" href={this.props.href}>
              <RightArrowIcon color={this.props.color} />
            </Button>
            <Button title="project details" className="project-details-btn" href={this.props.page}>
              <RightArrowIcon color={this.props.color} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
