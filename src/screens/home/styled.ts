import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const ContainerCarousel = styled.View`
  padding: 20px 0;
`;
