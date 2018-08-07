import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './styles/web.styl';

class SectionName extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const {name} = this.props;
    return (
      <div className="section-name">
        {name}
      </div>
    );
  }
}

export default SectionName;
