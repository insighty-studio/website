import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ClientsBackgroundIcon} from 'icons';
import SectionHeading from 'components/Typography/SectionHeading';

import Client from './components/Client';
import Dot from './components/Dot';

import './index.styl';

const clients = [
  {
    name: 'alan shortz',
    position: 'co-founder, betteryet loyalty inc., nyc',
    comment: 'They know how to build a great product for a very reasonable price.',
    key: '1'
  },
  {
    name: 'pat',
    position: 'product manager, property managers association',
    comment: 'Some text some text some text',
    key: '2'
  }
];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClient: 0
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUpdate() {
    console.log('Component will update');
  }

  render() {
    const {name, position, comment, key} = clients[this.state.currentClient];
    return (
      <div className="clients">
        <SectionHeading subTitle="our" title="clients" />
        <ReactCSSTransitionGroup
          transitionName="client"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Client name={name} position={position} comment={comment} key={key} />
        </ReactCSSTransitionGroup>
        <div className="dots">
          {[...Array(clients.length)].map((element, index) =>
            <Dot
              key={index}
              onClick={e => this.handleElement(e, index)}
              className={this.state.currentClient === index ? 'current' : ''}
            />
          )}
        </div>
      </div>
    );
  }

  handleElement(element, index) {
    this.setState({currentClient: index});
  }
}

export default Clients;
