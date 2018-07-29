import React, {Component} from 'react';
import classnames from 'classnames';
import SectionHeading from 'components/Typography/SectionHeading';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';

import Dot from './components/Dot';
import './index.styl';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElementIndex: 0,
      activeAnimation: false
    };
  }

  intervalCurrentElement(index, interval) {
    const intervalElement = setInterval(() => {
      this.setState({currentElementIndex: index});
      clearInterval(intervalElement);
    }, interval);
  }

  intervalAnimation(interval) {
    const intervalAnimation = setInterval(() => {
      this.setState({activeAnimation: false});
      clearInterval(intervalAnimation);
    }, interval);
  }

  renderPagination(data, currentElementIndex) {
    if (data.length <= 1) return null;
    return data.map((element, index) => (
      <Dot
        key={index}
        onClick={() => {
          this.setState({activeAnimation: true});
          this.intervalCurrentElement(index, 600);
          this.intervalAnimation(1400);
        }}
        className={currentElementIndex === index ? 'current' : ''}
      />
    ));
  }

  renderAnimation() {
    return (
      <div className="clients-animation">
        <div className="light-layer" />
        <div className="dark-layer" />
      </div>
    );
  }

  render() {
    const {currentElementIndex, activeAnimation} = this.state;
    const {
      name, position, comment, href, page, photo, color
    } = clients[currentElementIndex];
    return (
      <div className="clients">
        {activeAnimation && this.renderAnimation()}
        <div className="background" style={{backgroundColor: color}} key={currentElementIndex} />
        <div className={classnames('content', activeAnimation && 'animated')}>
          <SectionHeading subTitle="What Our" title="Clients Say" />
          <ClientFooter
            name={name}
            position={position}
            comment={comment}
            href={href}
            page={page}
            photo={photo}
            color={color}
            key={currentElementIndex}
          />
          <div className="pagination">
            {this.renderPagination(clients, currentElementIndex)}
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
