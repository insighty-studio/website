/* eslint-disable */

import {PureComponent} from 'react';
import React from 'react';

class IphoneMobileMock extends PureComponent {
  render() {
    return (
      <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 391" width="100%" height="100%">

        <defs>
          <filter id="filter-1" width="173.2%" height="135.8%" x="-36.6%" y="-14.8%" filterUnits="objectBoundingBox">
            <feOffset dy="10" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="17.5" />
            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="Mobile-Landing" transform="translate(-74 -1488)">
            <g id="Case-Studies" transform="translate(-37 1334)">
              <g id="Group-13" transform="translate(0 179)">
                <g id="Group-5">
                  <g id="Phone" filter="url(#filter-1)" transform="translate(146.325893)">
                    <rect x="2" y="2" width="68%" height="81%" fill={this.props.className === 'black' ? '#272d42' : '#fff'} rx="50" ry="50"/>
                    <path id="Phone-Shape" fill={this.props.className === 'black' ? "#333" : "#FFF"} d="M0 293.843629V26.8706564C0 11.0998197 8.14640589 0 26.8704286 0H129.584809c12.101283 0 26.437034 5.37937945 26.437034 26.8706564V293.843629c0 8.916584-2.561925 26.870657-27.737216 26.870657H26.8704286C2.66939381 320.714286 0 302.859909 0 293.843629zM9.96806222 41.1727799V282.141892H145.620387V41.1727799H9.96806222z" />
                    <path id="Home-Button" fill={this.props.className === 'black' ? "#292929" : "#E6E6E6"} fillRule="nonzero" d="M77.9189596 311.112192c5.4003147 0 9.9535466-4.571339 9.9535466-9.99313 0-5.856274-4.5532319-10.427613-9.9535466-10.427613-5.8330776 0-10.3863095 4.571339-10.3863095 10.427613 0 5.421791 4.5532319 9.99313 10.3863095 9.99313zm0 2.172419c-7.0281194 0-12.550124-5.543964-12.550124-12.165549 0-7.056068 5.5220046-12.600033 12.550124-12.600033 6.5953565 0 12.1173611 5.543965 12.1173611 12.600033 0 6.621585-5.5220046 12.165549-12.1173611 12.165549z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default IphoneMobileMock;
