import React from 'react';
import PropTypes from 'prop-types';
import './index.styl';

export default class HorizontalPadding extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className="horizontal-padding">
        {children}
      </div>
    );
  }
}

HorizontalPadding.propTypes = {
  children: PropTypes.node.isRequired,
};
