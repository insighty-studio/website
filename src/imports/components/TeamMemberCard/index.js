import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';

import './index.styl';

class TeamMemberCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const {name, position, text} = this.props;

    return (
      <div className="team-member">
        <div className="member-photo" />
        <div className="member-content">
          <h3 className="member-name">{name}</h3>
          <p className="member-position">{position}</p>
          <div className="member-separator" />
          <div className="member-text">
            {text.split('\\n').map(par => <p className="member-para" key={uniqueid('member-para-')}>{par}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMemberCard;
