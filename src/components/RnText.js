import React from 'react';
import { Text } from 'react-native';
import { handleMargin, handlePadding } from '../constants/theme';
import Fonts from '../helpers/Fonts';
import { wp } from '../helpers/Responsiveness';

const ResponsiveText = ({
  children,
  color,
  size,
  fontFamily,
  margin,
  top,
  position,
  padding,
  numberOfLines,
  style,
  textAlign,
  cutText,

  //sizes
  ...props
}) => {
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[
        { ...styles.text },
        props.style,
        size && { fontSize: isNaN(size) ? wp(3) : wp(size) },
        margin && handleMargin(margin) : { margin: 0 },
        padding && handlePadding(padding) : { padding: 0 },
        position && { alignSelf: position },
        textAlign && { textAlign: 'center' },
        cutText && { textDecorationLine: 'line-through' },
        {top:top},
        { color: color },
        { fontFamily: fontFamily ? Fonts[fontFamily] : Fonts.Medium },
      ]}>
      {children}
    </Text>
  );
};
const styles = {
  text: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3.5),
  },
  // h0: {fontSize: wp(13)},
  // h1: {fontSize: wp(9)},
  // h2: {fontSize: wp(8)},
  // h3: {fontSize: wp(7)},
  // h4: {fontSize: wp(6)},
  // h5: {fontSize: wp(5)},
  // h6: {fontSize: wp(4)},
  // h7: {fontSize: wp(3)},
  // h8: {fontSize: wp(3.5)},
  // h9: {fontSize: wp(2)},
  // header: {fontSize: wp(4.5)},
};
export default ResponsiveText;
