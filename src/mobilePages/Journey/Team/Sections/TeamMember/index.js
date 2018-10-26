import React, {Component} from 'react';

import './index.styl';
import PropTypes from 'prop-types';

class TeamMember extends Component {
  render() {
    const {
      picture, name, title, phraseOne, phraseTwo, phraseThree
    } = this.props;

    return (
      <div className="team-member-wrapper">
        <div className="team-member-card">
          <img src={picture} alt={name} />
          <h2 className="team-member-name">{name}</h2>
          <h3 className="team-member-title">{title}</h3>
          <span className="separator" />
          <p className="team-member-phrase">{phraseOne}</p>
          <p className="team-member-phrase">{phraseTwo}</p>
          <p className="team-member-phrase">{phraseThree}</p>
        </div>
      </div>
    );
  }
}

TeamMember.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phraseOne: PropTypes.string.isRequired,
  phraseTwo: PropTypes.string.isRequired,
  phraseThree: PropTypes.string.isRequired,
};

export default TeamMember;
