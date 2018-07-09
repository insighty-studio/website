import React, {PureComponent} from 'react';

import './index.styl';

class Details extends PureComponent {
  render() {
    return (
      <div className="by-description-details">
        <div>Year: <span>{this.props.year}</span></div>
        <div>Client: <span>{this.props.client}</span></div>
        <div>Services: <span>{this.props.services}</span></div>
      </div>
    );
  }
}

export default Details;
