import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconImage = styled.Image``;

export const Icon = styled(FeatherIcon).attrs(props => ({
  size: 30,
  color: props.theme.colors.primary,
}))``;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-size: ${props => props.theme.fonts.big};
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
`;

export const ContainerLeft = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 20, bottom: 10, right: 20 },
})`
  width: 30px;
`;

export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 20, bottom: 10, right: 20 },
})`
  width: 30px;
  align-items: flex-end;
`;
