import {
  ModalProps as ModalPropsReact,
  Modal as ModalReact,
  Pressable,
  Text,
  View,
} from 'react-native';
import Texto from '../Text/Text';
import { ContainerModal, IconCloseModal } from './modal.style';
import { Icon } from '../Icon/Icon';
import { theme } from '../themes/theme';
import { textTypes } from '../Text/textTypes';
import Button from '../Button/Button';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

export default function Modal({ ...props }: ModalProps) {
  return (
    <ModalReact animationType="slide" transparent={true} {...props}>
      <ContainerModal>
        <Texto type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
          {props.title}
        </Texto>
        <Texto type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
          {props.text}
        </Texto>
        <Button title="OK" onPress={props.onCloseModal} />
        <IconCloseModal name="cross" size={15} onPress={props.onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
}
