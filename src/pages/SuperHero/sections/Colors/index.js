import React, {PureComponent} from 'react';

import './index.styl';

class Colors extends PureComponent {
  render() {
    return (
      <div className="colors-section">
				<div className="colors">
					<div className="color">
						<div className="color-circle" />
						<div className="color-info">
							<div>Charade</div>
							<div>#272730</div>
						</div>
					</div>
					<div className="color">
						<div className="color-circle" />
						<div className="color-info">
							<div>School bus yellow</div>
							<div>#FFD900</div>
						</div>
					</div>
					<div className="color">
						<div className="color-circle" />
						<div className="color-info">
							<div>Caribbean Green</div>
							<div>#09CE95</div>
						</div>
					</div>
					<div className="color">
						<div className="color-circle" />
						<div className="color-info">
							<div>Black</div>
							<div>#000000</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default Colors;
