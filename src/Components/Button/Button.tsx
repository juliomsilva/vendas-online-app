import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonSecondary, GradientButton } from './button.styles';
import Texto from '../Text/Text';
import { theme } from '../themes/theme';
import { textTypes } from '../Text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disable?: boolean;
  loading?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  const renderText = (color: string) => (
    <>
      {props.loading ? (
        <ActivityIndicator color={theme.colors.neutralTheme.white} />
      ) : (
        <Texto type={textTypes.BUTTON_BOLD} color={color}>
          {props.title}
        </Texto>
      )}
    </>
  );

  switch (props.type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={props.margin} {...props}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:

    default:
      return (
        <ButtonContainer margin={props.margin} {...props}>
          <GradientButton
            colors={['#f46430', '#f46430']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
  }
};
export default Button;
