import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';

import './index.styl';

class TeamMemberCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    answers: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  render() {
    const {
      name, position, answers, image,
    } = this.props;

    return (
      <div className="team-member">
        <img className="member-photo" src={image} alt="insighty member" />
        <div className="member-content">
          <h3 className="member-name">{name}</h3>
          <p className="member-position">{position}</p>
          <div className="member-separator" />
          <div className="member-text">
            {answers.map(answer => <p className="member-para" key={uniqueid('member-para-')}>{answer}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMemberCard;
