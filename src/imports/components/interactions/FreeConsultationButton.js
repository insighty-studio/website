import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

const FreeConsultationButton = () => (
  <Link to="consult">
    <Button>FREE CONSULTATION</Button>
  </Link>
);

export default FreeConsultationButton;
