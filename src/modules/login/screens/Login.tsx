import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.styles';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Texto from '../../../Components/Text/Text';
import { theme } from '../../../Components/themes/theme';
import { useState } from 'react';
import { Icon } from '../../../Components/Icon/Icon';

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  function handleOnPress() {
    setLoading(true);
    console.log('clicou');
  }

  return (
    <View>
      <ContainerLogin>
        <ImageLogo source={require('../../../assets/images/logo.png')} />

        <Input title="E-mail: " placeholder="Digite o seu e-mail" />
        <Input securePassword={true} title="Senha: " placeholder="Digite a sua senha" />

        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="8px"
          title="ENTRAR"
          loading={loading}
          disabled={loading}
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
}
