import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorsBackground from './components/ColorsBackground';

import './index.styl';

class ColorsSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      width: PropTypes.string,
    })).isRequired
  };

  static defaultProps = {
    className: '',
    colors: {}
  };

  render() {
    const {className, colors} = this.props;

    return (
      <div className={classnames('colors-section', className)}>
        <div className="colors">
          {colors.map(({name, color, width}) => (
            <div key={color} className="color" style={{backgroundColor: color, width}}>
              <div className="color-info">
                <div>{name}</div>
                <div className="hash">{color}</div>
              </div>
            </div>
          ))}
        </div>
        <ColorsBackground />
      </div>
    );
  }
}

export default ColorsSection;
