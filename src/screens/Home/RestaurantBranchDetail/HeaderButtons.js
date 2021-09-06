import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../../components/Icon';
import { colors } from '../../../constants/colorsPallet';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
export default function HeaderButtons({}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={[styles.buttonView, {backgroundColor: colors.yellow}]}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon margin={[0, 0, 5, 0]} source={globalPath.INFO_ICON} />
          <Text>Info</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonView, {backgroundColor: colors.lighterGrey}]}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon margin={[0, 0, 5, 0]} source={globalPath.PROMO_ICON} />

          <Text>Promo</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonView, {backgroundColor: colors.lighterGrey}]}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon margin={[0, 0, 5, 0]} source={globalPath.MENU_ICON} />

          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonView, {backgroundColor: colors.lighterGrey}]}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon margin={[0, 0, 5, 0]} source={globalPath.BRANCH_ICON} />

          <Text>Branches</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
  buttonView: {
    width: wp(21),
    height: hp(9),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
