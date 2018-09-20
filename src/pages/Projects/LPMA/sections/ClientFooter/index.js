import React, {PureComponent} from 'react';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';

class ClientFooterSection extends PureComponent {
  render() {
    // TODO accept a `client` prop, then destruct
    const {
      name, position, href, page, photo, comment
    } = clients[0];

    return (
      <ClientFooter
        name={name}
        position={position}
        comment={comment}
        href={href}
        page={page}
        photo={photo}
        color="#FFF"
      />
    );
  }
}

export default ClientFooterSection;
