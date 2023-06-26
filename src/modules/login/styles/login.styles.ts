import styled from 'styled-components/native';
import { theme } from '../../../Components/themes/theme';

export const ContainerLogin = styled.View`
  top: 12%;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ImageLogo = styled.Image`
  position: absolute;
  width: 100%;
  height: 50%;
  top: -15%;
`;
