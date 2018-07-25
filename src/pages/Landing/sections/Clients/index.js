import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SectionHeading from 'components/Typography/SectionHeading';
import {ClientsBackgroundIcon} from 'icons';

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
    const {name, position, comment, link, page, photo} = clients[this.state.currentElementIndex];
    return (
      <div className="clients">
        <SectionHeading subTitle="what our" title="clients say" />
        <ReactCSSTransitionGroup
          transitionName="client"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Client name={name} position={position} comment={comment} key={this.state.currentElementIndex}
                  href={link}
                  to={page}
                  photo={photo}
          />
        </ReactCSSTransitionGroup>
        <div className="pagination">{this.renderPagination(clients)}</div>
        <div className="background"><ClientsBackgroundIcon /></div>
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
