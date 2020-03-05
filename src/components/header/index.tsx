import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  Icon,
  Title,
} from './styled';

const back = require('@assets/images/back/back.png');

interface Props {
  backButtonEnabled?: boolean;
  title?: string;
  rightIcon?: ImageSourcePropType;
  rightIconOnPress?(): void;
}

const header: React.SFC<Props> = ({
  backButtonEnabled,
  title,
  rightIcon,
  rightIconOnPress,
}) => {
  return (
    <Container>
      <ContainerLeft>
        {backButtonEnabled && <Icon source={back} />}
      </ContainerLeft>
      <ContainerCenter>{title && <Title>{title}</Title>}</ContainerCenter>
      <ContainerRight onPress={rightIconOnPress}>
        {rightIcon && <Icon source={rightIcon} />}
      </ContainerRight>
    </Container>
  );
};

export default header;
