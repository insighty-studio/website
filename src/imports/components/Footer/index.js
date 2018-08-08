import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';
import './mobile/index.styl';

class Footer extends PureComponent {
  static propTypes = {
    style: PropTypes.object
  };

  static defaultProps = {
    style: null
  };

  render() {
    const {style} = this.props;
    return (
      <div className="footer" style={style}>
        <div className="footer-details">
          240 Richmond St W, Toronto, ON M5V 1V6
          <br />
          hello@insighty.studio
        </div>
        <div className="rights">
          © 2018 Insighty All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
