import React, {PureComponent} from 'react';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';

class ClientFooterSection extends PureComponent {
  render() {
    const {
      name, position, href, page, photo
    } = clients[1];

    return (
      <ClientFooter
        name={name}
        position={position}
        comment="They know how to build a great product for a very reasonable price."
        href={href}
        page={page}
        photo={photo}
        color="#FFF"
      />
    );
  }
}

export default ClientFooterSection;
