import React, {PureComponent} from 'react';

import './index.styl';

class Loader extends PureComponent {
  render() {
    return (
      <div className="loader-page">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
        <img className="logo" src={require('./images/logo@2x.png')}/>
      </div>
    );
  }
}

export default Loader;
