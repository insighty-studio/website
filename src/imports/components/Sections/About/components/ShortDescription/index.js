import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './index.styl';

class ShortDescription extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const {title, description} = this.props;

    return (
      <div className="short-description">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default ShortDescription;
