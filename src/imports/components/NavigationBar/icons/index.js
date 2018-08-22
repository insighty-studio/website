/* eslint-disable max-len */
import React, {PureComponent} from 'react';

export class MenuIcon extends PureComponent {
  render() {
    return (
      <svg width="35px" height="26px" viewBox="0 0 35 26">
        <path d="M8,0 L35,0 L35,2 L8,2 L8,0 Z M0,12 L35,12 L35,14 L0,14 L0,12 Z M8,24 L35,24 L35,26 L8,26 L8,24 Z" />
      </svg>
    );
  }
}

export class CloseMenuIcon extends PureComponent {
  render() {
    return (
      <svg width="27px" height="27px" viewBox="0 0 27 27">
        <path d="M13.0814755,11.6672619 L24.7487373,-5.15143483e-13 L26.1629509,1.41421356 L14.495689,13.0814755 L26.1629509,24.7487373 L24.7487373,26.1629509 L13.0814755,14.495689 L1.41421356,26.1629509 L1.29896094e-12,24.7487373 L11.6672619,13.0814755 L1.30051525e-12,1.41421356 L1.41421356,-5.21804822e-13 L13.0814755,11.6672619 Z" />
      </svg>
    );
  }
}
