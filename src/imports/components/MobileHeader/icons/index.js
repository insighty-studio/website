/* eslint-disable max-len */
import React, {PureComponent} from 'react';

export class MenuIcon extends PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26">
        <path fill="#5C64AA" fillRule="evenodd" d="M27 0H0v2h27V0zm0 12H0v2h27v-2zm0 12H0v2h27v-2z" />
      </svg>
    );
  }
}

export class CloseMenuIcon extends PureComponent {
  render() {
    return (
      <svg width="27px" height="27px" viewBox="0 0 27 27">
        <path fill="#FFFFFF" d="M13.0814755,11.6672619 L24.7487373,-5.15143483e-13 L26.1629509,1.41421356 L14.495689,13.0814755 L26.1629509,24.7487373 L24.7487373,26.1629509 L13.0814755,14.495689 L1.41421356,26.1629509 L1.29896094e-12,24.7487373 L11.6672619,13.0814755 L1.30051525e-12,1.41421356 L1.41421356,-5.21804822e-13 L13.0814755,11.6672619 Z" />
      </svg>
    );
  }
}
