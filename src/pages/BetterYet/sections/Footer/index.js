import React, {PureComponent} from 'react';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';

class Footer extends PureComponent {
  render() {
    const {
      name, position, comment, href, page, photo, color
    } = clients[1];

    return (
      <ClientFooter
        name={name}
        position={position}
        comment={comment}
        href={href}
        page={page}
        photo={photo}
        color={color}
      />
    );
  }
}

export default Footer;
