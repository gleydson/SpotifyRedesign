import SnapCarousel from 'react-native-snap-carousel';

import styled from 'styled-components/native';

export const Container = styled.View``;

export const Carousel = styled(SnapCarousel).attrs(props => ({
  sliderWidth: props.theme.metrics.widthScreen,
  itemWidth:
    props.theme.metrics.widthScreen - props.theme.metrics.widthScreen * 0.35,
  loop: true,
  layout: 'default',
  inactiveSlideScale: 0.8,
}))``;

export const TouchableItem = styled.TouchableOpacity``;

export const ContainerItem = styled.View``;

export const Card = styled.Image``;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  font-size: ${props => props.theme.fonts.small};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.colors.text};
  padding-top: 10px;
`;
