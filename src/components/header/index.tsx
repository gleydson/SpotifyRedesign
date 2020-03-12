import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  IconImage,
  Icon,
  Title,
} from './styled';

interface Props {
  backButtonEnabled?: boolean;
  title?: string;
  rightIcon?: ImageSourcePropType | string;
  rightIconOnPress?(): void;
}

const header: React.SFC<Props> = ({
  backButtonEnabled,
  title,
  rightIcon,
  rightIconOnPress,
}) => {
  const navigation = useNavigation();

  function handlePressBackButton() {
    if (backButtonEnabled && navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  function renderIcon() {
    if (rightIcon === undefined) {
      return null;
    }
    if (typeof rightIcon === 'string') {
      return <Icon name={rightIcon} />;
    }
    return <IconImage source={rightIcon} />;
  }

  return (
    <Container>
      <ContainerLeft onPress={handlePressBackButton}>
        {backButtonEnabled && <Icon name='chevron-left' />}
      </ContainerLeft>
      <ContainerCenter>{title && <Title>{title}</Title>}</ContainerCenter>
      <ContainerRight onPress={rightIconOnPress}>
        {rightIcon && renderIcon()}
      </ContainerRight>
    </Container>
  );
};

export default header;
