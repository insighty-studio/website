import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ClientsBackgroundIcon} from 'icons';
import Button from 'components/Button';
import {RightArrowIcon} from 'icons';

import './index.styl';

class ClientInfo extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    comment: PropTypes.string

  };

  static defaultProps = {
    name: '',
    position: '',
    comment: ''
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
            <Button title="full review" className="full-review-btn"><RightArrowIcon /></Button>
            <Button title="project details" className="project-details-btn"
                    href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
            ><RightArrowIcon />
            </Button>
          </div>
        </div>
        <div className="background"><ClientsBackgroundIcon /></div>
      </div>
    );
  }
}

export default ClientInfo;
