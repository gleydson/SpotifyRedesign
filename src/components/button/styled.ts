import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const TouchableButton = styled.TouchableOpacity``;

export const Container = styled.View`
  width: 150px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Icon = styled(FeatherIcon).attrs(props => ({
  color: props.theme.colors.text,
  size: 12,
}))`
  padding-right: 5px;
`;

export const ButtonDescription = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyMedium};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.small};
`;
