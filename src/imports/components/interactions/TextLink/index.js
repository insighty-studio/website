import React from 'react';
import PropTypes from 'prop-types';
import './index.styl';
import {Link} from 'react-router-dom';

export default class TextLink extends React.Component {
  render() {
    const {text, onClick, to} = this.props;

    if (to) {
      return (
        <Link to={to} className="text-link">
          {text}
        </Link>
      );
    }

    return (
      <a onClick={onClick} className="text-link">
        {text}
      </a>
    );
  }
}

TextLink.defaultProps = {
  to: null,
  onClick: null,
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};
