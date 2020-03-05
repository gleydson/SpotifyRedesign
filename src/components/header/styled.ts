import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-size: ${props => props.theme.fonts.big};
  font-family: ${props => props.theme.fonts.fontFamily};
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
`;

export const ContainerLeft = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 20, bottom: 10, right: 20 },
})`
  flex: 1;
`;

export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 20, bottom: 10, right: 20 },
})`
  flex: 1;
  align-items: flex-end;
`;
