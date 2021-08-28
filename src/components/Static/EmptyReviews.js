import React from 'react';
import {StyleSheet, View} from 'react-native';

import ResponsiveText from '../RnText';
import Icon from '../Icon';
import {wp} from '../../helpers/Responsiveness';
import {iconPath} from '../../constants/icon';

const EmptyReviews = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        margin={[0, 0, wp(8), 0]}
        source={iconPath.REPORT_SENT}
        width={wp(80)}
        height={wp(73)}
      />
      <ResponsiveText margin={[15, 0]} size={5} fontFamily="Bold">
        No Reviews (yet!)
      </ResponsiveText>
      <ResponsiveText size={4} style={styles.gStyle}>
        Thanks for your anonymous report and for helping us to make deal zone
        the best place to buy and sell locally.
      </ResponsiveText>
    </View>
  );
};

export default EmptyReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
});
