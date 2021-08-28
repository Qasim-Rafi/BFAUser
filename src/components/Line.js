import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../constants/colorsPallet';
import {handleMargin} from '../constants/theme';

const Line = ({width, height, color, margin, position, type}) => {
  return (
    <View
      style={[
        margin ? handleMargin(margin) : undefined,
        styles.Line,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: height ? height : 0.6,
          borderColor: color ? color : colors.border,
          borderStyle: type ? type : 'solid',
          borderRadius: 1,

          width: width ? width : '100%',
          height: height ? height : 1,
          // backgroundColor: color ? color : colors.grey,
          alignSelf: position ? position : 'center',
        },
      ]}
    />
  );
};

export default Line;
const styles = StyleSheet.create({
  line: {
    borderRadius: 1,
  },
});
