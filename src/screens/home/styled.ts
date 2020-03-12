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

export const ContainerCarousel = styled.View`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding-bottom: 20px;
`;

export const Session = styled.View`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyBold};
  font-size: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.primary};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  padding: 20px;
`;

export const SessionScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 10 },
})``;

export const TouchableCard = styled.TouchableOpacity``;

export const CardItem = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Card = styled.Image`
  margin-bottom: 5px;
  border-radius: 11px;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.fontFamilyMedium};
  font-size: ${props => props.theme.fonts.small};
  color: ${props => props.theme.colors.text};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  width: 122px;
  font-family: ${props => props.theme.fonts.fontFamilyLight};
  font-size: ${props => props.theme.fonts.smaller};
  color: ${props => props.theme.colors.text};
`;
