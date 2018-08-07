import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WebParallax from 'components/WebParallax';

import ColorsBackground from './components/ColorsBackground';
import './index.styl';

class ColorsSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      width: PropTypes.string,
      dark: PropTypes.bool,
    })).isRequired,
    colorsSectionColor: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      className, colors, colorsSectionColor
    } = this.props;

    return (
      <div className={classnames('colors-section', className)}>
        <WebParallax
          className="colors-parallax"
          offsetYMax={120}
          offsetYMin={-120}
        >
          <div className="colors">
            {colors.map(({
              name, color, width, dark
            }) => (
              <div key={color} className="color" style={{backgroundColor: color, width}}>
                <div className={classnames('color-info', dark && 'dark')}>
                  <div>
                    {name}
                  </div>
                  <div className="hash">
                    {colorsSectionColor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </WebParallax>
        <ColorsBackground color={colorsSectionColor} />
      </div>
    );
  }
}

export default ColorsSection;
