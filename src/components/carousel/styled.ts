import { StyleSheet, Dimensions, Platform } from 'react-native';
import SnapCarousel, { ParallaxImage } from 'react-native-snap-carousel';

import styled from 'styled-components/native';

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled.View``;

export const Carousel = styled(SnapCarousel).attrs({
  sliderWidth: screenWidth - 60,
  sliderHeight: screenWidth - 200,
  itemWidth: screenWidth - 60,
})``;

export const ContainerItem = styled.View`
  width: ${screenWidth - 60}px;
  height: ${screenWidth - 200}px;
`;

export const Parallax = styled(ParallaxImage).attrs({
  style: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  containerStyle: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
})``;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.primary};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.small};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.text};
  margin-top: 5px;
`;
