import styled from 'styled-components/native';
import { theme } from '../themes/theme';
import { Icon } from '../Icon/Icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.white};
  width: 100%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 25px;
  z-index: 9;
  elevation: 5;
  shadowcolor: ${theme.colors.grayTheme.gray80};
  shadowopacity: 0.9;
  shadowradius: 5px;
  shadowoffset: {
    width: 0;
    height: 2px;
  }
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
