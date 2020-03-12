import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const Container = styled.View`
  flex: 1;
`;

export const MusicImage = styled.Image`
  border-radius: 11px;
  width: ${props => props.theme.metrics.widthScreen * 0.85}px;
  height: ${props => props.theme.metrics.widthScreen * 0.85}px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  font-size: ${props => props.theme.fonts.big};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.text};
  padding: 20px 0 8px 0;
`;

export const Artist = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  font-size: ${props => props.theme.fonts.small};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.primary};
`;

export const Icon = styled(FeatherIcon).attrs(props => ({
  size: 30,
  color: props.theme.colors.primary,
}))``;

export const IconImage = styled.Image``;

export const Touchable = styled.TouchableOpacity``;

export const ContainerMusicInfo = styled.View`
  align-self: center;
  padding: 20px 0;
`;

export const ContainerMainIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const ContainerSecondaryIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
