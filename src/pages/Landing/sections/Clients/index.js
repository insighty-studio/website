import React, {Component} from 'react';
import SectionHeading from 'components/Typography/SectionHeading';
import ClientFooter from 'components/Sections/ClientFooter';

import Dot from './components/Dot';
import clients from './clients';
import './index.styl';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElementIndex: 0
    };
  }

  renderPagination(data, currentElementIndex) {
    if (data.length <= 1) return null;
    return data.map((element, index) => (
      <Dot
        key={index}
        onClick={() => this.setState({currentElementIndex: index})}
        className={currentElementIndex === index ? 'current' : ''}
      />
    ));
  }

  render() {
    const {currentElementIndex} = this.state;
    const {
      name, position, comment, href, page, photo, color
    } = clients[currentElementIndex];
    return (
      <div className="clients">
        <div className="background" style={{backgroundColor: color}} key={currentElementIndex} />
        <div className="content">
          <SectionHeading subTitle="what our" title="clients say" />
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
