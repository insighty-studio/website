import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SectionHeading from 'components/Typography/SectionHeading';

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
        <ReactCSSTransitionGroup
          transitionName="client"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className="background" style={{backgroundColor: color}} key={this.state.currentElementIndex} />
        </ReactCSSTransitionGroup>
        <div className="content">
          <SectionHeading subTitle="our" title="clients" />
          <ReactCSSTransitionGroup
            transitionName="client"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Client
              name={name}
              position={position}
              comment={comment}
              href={href}
              page={page}
              photo={photo}
              color={color}
              key={this.state.currentElementIndex}
            />
          </ReactCSSTransitionGroup>
          <div className="pagination">{this.renderPagination(clients)}</div>
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
