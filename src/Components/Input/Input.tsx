import { TextInputProps, View } from 'react-native';
import { ContainerInput, IconEye } from './input.style';
import { DisplayFlexColumn } from '../../globalStyles/globalView.style';
import Texto from '../Text/Text';
import { textTypes } from '../Text/textTypes';
import { theme } from '../themes/theme';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';

interface InputProps extends TextInputProps {
  placeholder?: string;
  title?: string;
  errorMessage?: string;
  securePassword?: boolean;
}

const Input = ({ ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!props.securePassword);

  console.log(props.secureTextEntry, 'props');
  console.log(currentSecure, 'state');
  const handleOnpressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn>
      {props.title && (
        <Texto
          customMargin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray80}
          type={textTypes.PARAGRAPH_SMALL_BOLD}
        >
          {props.title}
        </Texto>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={props.securePassword}
          secureTextEntry={currentSecure}
          isError={!!props.errorMessage}
          {...props}
        />
        {props.securePassword && (
          <IconEye
            onPress={handleOnpressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
          />
        )}
      </View>
      {props.errorMessage && (
        <Texto
          color={theme.colors.orangeTheme.orange80}
          customMargin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
        >
          {props.errorMessage}
        </Texto>
      )}
    </DisplayFlexColumn>
  );
};
export default Input;
