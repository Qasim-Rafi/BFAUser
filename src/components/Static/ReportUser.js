import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/colorsPallet';
import {iconPath} from '../../constants/icon';
import {reportUser} from '../../constants/mock';
import {wp} from '../../helpers/Responsiveness';
import Icon from '../Icon';
import RnButton from '../RnButton';
import ResponsiveText from '../RnText';

const ReportUser = () => {
  return (
    <View style={styles.container}>
      <Icon
        margin={[5, 8]}
        source={iconPath.CROSS_ICON}
        width={wp(3)}
        tintColor={colors.black}
        height={wp(3)}
      />
      <ResponsiveText size={4} fontFamily="SemiBold">
        Report User
      </ResponsiveText>
      <View style={styles.contentContainer}>
        <ResponsiveText color={colors.grey} size={3}>
          why are you reporting this user?
        </ResponsiveText>
        <ResponsiveText fontFamily="Bold" margin={[10, 0]} size={3}>
          Selling something inappropiate
        </ResponsiveText>
        <ResponsiveText
          color={colors.black}
          fontFamily={'SemiBold'}
          margin={[7, 0]}
          size={2.8}>
          Behaving suspiciously?
        </ResponsiveText>
        {reportUser.map((item, index) => (
          <View style={styles.questionListing}>
            <ResponsiveText
              color={colors.black}
              fontFamily={'SemiBold'}
              margin={[7, 0]}
              size={2.8}>
              {item.name}
            </ResponsiveText>
            <Icon
              margin={[5, 8]}
              source={iconPath.ARROW_RIGHT_ICON}
              width={wp(4)}
              tintColor={colors.black}
              height={wp(4)}
            />
          </View>
        ))}
      </View>
      <View style={styles.footerCOntainer}>
        <RnButton
          margin={[0, wp(15)]}
          textColor={colors.primary}
          btnStyle={{backgroundColor: colors.red3}}
          title="Report"
        />
      </View>
    </View>
  );
};

export default ReportUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    marginVertical: 20,
  },
  questionListing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    alignItems: 'center',
  },
  footerCOntainer: {
    flex: 0.2,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    justifyContent: 'center',
  },
});
