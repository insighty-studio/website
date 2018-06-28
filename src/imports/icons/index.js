import React from 'react';

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

export const ScrollToTopBtn = () => (
  <div style={ScrollBtnStyles}>
    <svg width="22px" height="12px" viewBox="0 0 22 12">
      <g transform="translate(-1520.000000, -800.000000)" strokeLinecap="round" stroke="#999999" strokeWidth="3">
        <g transform="translate(124.000000, 32.000000)">
          <g transform="translate(1380.000000, 748.000000)">
            <g transform="translate(18.000000, 22.000000)">
              <path d="M0,8 L9,0" id="Line" />
              <path d="M9,8 L18,0" id="Line" transform="translate(13.500000, 4.000000) scale(-1, 1) translate(-13.500000, -4.000000) " />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
);
