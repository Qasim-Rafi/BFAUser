import React from 'react';
import {StyleSheet, View} from 'react-native';

import ResponsiveText from '../RnText';
import Icon from '../Icon';
import {wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import {gStyles} from '../../styles/global';
import {iconPath} from '../../constants/icon';

const ReportSent = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        style={gStyles.alSstart}
        margin={[15, 0]}
        source={iconPath.CROSS_ICON}
        width={wp(4)}
        height={wp(4)}
        tintColor={colors.black}
      />
      <Icon
        margin={[wp(8), 0]}
        source={iconPath.REPORT_SENT}
        width={wp(70)}
        height={wp(62)}
      />
      <ResponsiveText margin={[15, 0]} size={6} fontFamily="Bold">
        Report Sent!
      </ResponsiveText>
      <ResponsiveText size={4} style={styles.gStyle}>
        Thanks for your anonymous report and for helping us to make deal zone
        the best place to buy and sell locally.
      </ResponsiveText>
    </View>
  );
};

export default ReportSent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
  image: {
    flex: 0.4,
  },
});
