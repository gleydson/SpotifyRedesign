import React from 'react';

import { Container, Icon, ButtonDescription, TouchableButton } from './styled';

interface Props {
  icon: string;
  buttonDescription: string;
}

const button: React.SFC<Props> = ({ icon, buttonDescription }) => {
  return (
    <TouchableButton>
      <Container>
        <Icon name={icon} />
        <ButtonDescription>{buttonDescription}</ButtonDescription>
      </Container>
    </TouchableButton>
  );
};

export default button;
