import styled from 'styled-components/native';

interface IContainer {
  bottomSafe: number;
}

export const Container = styled.View.attrs({
  shadowRadius: 2,
  shadowOffset: {
    width: 0,
    height: -3,
  },
  shadowColor: '#fff',
  elevation: 4,
}) <IContainer>`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: ${({ bottomSafe }) => bottomSafe || 10}px;
`;

export const TabItem = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

interface ILabel {
  isFocused: boolean;
}

export const Label = styled.Text<ILabel>`
  color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary : theme.colors.disable};
  text-transform: lowercase;
  font-size: ${props => props.theme.fonts.smaller};
  font-family: ${props => props.theme.fonts.fontFamilyLight};
`;
