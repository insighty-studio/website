import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Footer extends PureComponent {
  static propTypes = {
    address: PropTypes.string,
    email: PropTypes.string
  };

  static defaultProps = {
    address: '',
    email: ''
  };

  render() {
    const {address, email} = this.props;
    return (
      <div className="footer">
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
