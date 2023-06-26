import { Text, TextProps } from 'react-native';
import { ContainerText } from './text.style';
import { textTypes } from './textTypes';
import { useMemo } from 'react';

interface textProps extends TextProps {
  color?: string;
  type?: string;
  customMargin?: string;
}

const Texto = ({ ...props }: textProps) => {
  const fontSize = useMemo(() => {
    switch (props.type) {
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_LIGHT:
      case textTypes.BUTTON_REGULAR:
        return '18px';
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUBTITLE_BOLD:
      case textTypes.SUBTITLE_LIGHT:
      case textTypes.SUBTITLE_REGULAR:
        return '20px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_REGULAR:
        return '10px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return '14px';
    }
  }, [props.type]);

  const fontFamily = useMemo(() => {
    switch (props.type) {
      case textTypes.TITLE_BOLD:
      case textTypes.BUTTON_BOLD:

      case textTypes.SUBTITLE_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_LIGHT:
      case textTypes.BUTTON_LIGHT:

      case textTypes.SUBTITLE_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_REGULAR:
      case textTypes.BUTTON_REGULAR:
      case textTypes.SUBTITLE_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:

      default:
        return 'Poppins-Regular';
    }
  }, [props.type]);

  return (
    <ContainerText
      customMargin={props.customMargin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={props.color}
      {...props}
    />
  );
};

export default Texto;
