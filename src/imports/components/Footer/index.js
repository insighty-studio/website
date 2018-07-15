import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Footer extends PureComponent {
  static propTypes = {
    address: PropTypes.string,
    email: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    address: '',
    email: '',
		style: null
  };

  render() {
    const {address, email} = this.props;
    return (
      <div className="footer" style={this.props.style}>
        <div className="footer-details">
          {address}
          <br />
          {email}
        </div>
        <div className="rights">
          © 2018 Insighty All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
