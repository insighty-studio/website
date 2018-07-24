import React, {Component} from 'react';
import SectionHeading from 'components/Typography/SectionHeading';

import {ArrowIcons, BackgroundIcons} from './icons';
import Client from './components/Client';
import Dot from './components/Dot';
import clients from './clients';
import './index.styl';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {currentElementIndex: 0};
  }

  render() {
    const {name, position, comment, href, page, photo, color} = clients[this.state.currentElementIndex];
    return (
      <div className="clients">
        <div className="content" style={{backgroundColor: color}}>
          <SectionHeading subTitle="our" title="clients" />
          <Client name={name} position={position} comment={comment} href={href} page={page}
                  photo={photo} arrowIcon={ArrowIcons[this.state.currentElementIndex]}
          />
          <div className="pagination">{this.renderPagination(clients)}</div>
          <div className="background">{BackgroundIcons[this.state.currentElementIndex]}</div>
        </div>
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
