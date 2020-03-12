import { ImageSourcePropType, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ContainerHeaderPlaylist = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const PlaylistImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 11px;
`;

export const PlaylistCreatedBy = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyMedium};
  font-size: ${props => props.theme.fonts.small};
  color: ${props => props.theme.colors.regular};
  padding-top: 5px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
`;

export interface IMusicList {
  thumbnail: ImageSourcePropType;
  title: string;
  artist: string;
}

export const ContainerMusicList = styled.View`
  padding: 20px 30px;
`;

export const TouchableMusicItem = styled.TouchableOpacity``;

export const MusicItem = styled.View`
  flex-direction: row;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  border-top-color: ${props => props.theme.colors.darker};
  padding: 10px 0;
`;

export const Thumbnail = styled.Image`
  border-radius: 11px;
`;

export const ContainerText = styled.View`
  flex: 1;
  padding-left: 15px;
`;

export const Title = styled.Text`
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  font-size: ${props => props.theme.fonts.small};
`;

export const Description = styled.Text`
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.regular};
  font-family: ${props => props.theme.fonts.fontFamilyMedium};
  font-size: ${props => props.theme.fonts.smaller};
`;

export const Icon = styled(FeatherIcon).attrs(props => ({
  size: 15,
  color: props.theme.colors.dark,
}))``;
