import React, {Component} from 'react';
import {ClientsBackgroundIcon} from 'icons';
import SectionHeading from 'components/Typography/SectionHeading';

import clients from './clients';
import Client from './components/Client';
import Dot from './components/Dot';

import './index.styl';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {currentElementIndex: 0};
  }

  render() {
    const {name, position, comment} = clients[this.state.currentElementIndex];
    return (
      <div className="clients">
        <SectionHeading subTitle="our" title="clients" />
        <Client name={name} position={position} comment={comment} key={this.state.currentElementIndex}
                href="https://clutch.co/profile/insighty#review-516735"
        />
        <div className="pagination">{this.renderPagination(clients)}</div>
      </div>
    );
  }

  renderPagination(clients) {
    if (clients.length <= 1) return null;
    return clients.map((element, index) =>
      <Dot
        key={index}
        onClick={() => this.setState({currentElementIndex: index})}
        className={this.state.currentElementIndex === index ? 'current' : ''}
      />
    )
  }
}

export default Clients;
