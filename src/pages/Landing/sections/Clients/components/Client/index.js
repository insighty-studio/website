import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ClientsBackgroundIcon} from 'icons';
import Button from 'components/Button';
import {RightArrowIcon} from 'icons';

import './index.styl';

class Client extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    comment: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string
  };

  static defaultProps = {
    name: '',
    position: '',
    comment: '',
    href: '',
    to: ''
  };

  render() {
    return (
      <div className="client">
        <div className="client-photo"><img src={require('./images/client-photo.png')} alt="" /></div>
        <div className="client-overview">
          <div className="name">{this.props.name}</div>
          <div className="position">{this.props.position}</div>
          <div className="comment">{this.props.comment}</div>
          <div className="buttons">
            <Button title="full review" className="full-review-btn" to="betteryet"><RightArrowIcon /></Button>
            <Button title="project details" className="project-details-btn"
                    href={this.props.href}
            ><RightArrowIcon />
            </Button>
          </div>
        </div>
        <div className="background"><ClientsBackgroundIcon /></div>
      </div>
    );
  }
}

export default Client;
