import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const ContainerProgress = styled.View`
  width: ${props => props.theme.metrics.widthScreen * 0.85}px;
  height: 3px;
  background-color: ${props => props.theme.colors.dark};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const Progress = styled.View<{ progress: number }>`
  width: ${({ progress, theme }) =>
    progress === 0 ? 0 : progress * (theme.metrics.widthScreen * 0.85 - 10)}px;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

export const Point = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
`;

export const ContainerTime = styled.View`
  width: ${props => props.theme.metrics.widthScreen * 0.85}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
`;

export const Time = styled.Text`
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.fontFamilyMedium};
  font-size: ${props => props.theme.fonts.small};
`;
