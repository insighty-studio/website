import React, {PureComponent} from 'react';

const ScrollBtnStyles = {
  cursor: 'pointer',
  boxShadow: '0 5px 27px 0 rgba(0,0,0, .05)',
  backgroundColor: '#F9F9F9',
  width: 52,
  height: 52,
  borderRadius: 26,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

export class ScrollToTopBtnIcon extends PureComponent {
  render() {
    return (
      <div style={ScrollBtnStyles}>
        <svg width="22px" height="12px" viewBox="0 0 22 12">
          <g transform="translate(2.000000, 2.000000)" strokeLinecap="round" stroke="#999999" strokeWidth="3">
            <path d="M0,8 L9,0" />
            <path d="M9,8 L18,0" transform="translate(13.500000, 4.000000) scale(-1, 1) translate(-13.500000, -4.000000) " />
          </g>
        </svg>
      </div>
    );
  }
}
