import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import ResponsiveText from '../RnText';
import Icon from '../Icon';
import {wp} from '../../helpers/Responsiveness';
import {iconPath} from '../../constants/icon';
import {gStyles} from '../../styles/global';
import RnButton from '../RnButton';
import {colors} from '../../constants/colorsPallet';
import {routeName} from '../../constants/routeName';
import CurrentLocationModel from '../CurrentLocationModel';
import CategoryModal from '../../screens/Home/Feed/CategoryModal';

const EmptySoldLisitng = ({navigation, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems: 'center'}}>
      {modalVisible && (
        <CategoryModal
          visible={modalVisible}
          navigation={navigation}
          toggleModal={() => setModalVisible(!modalVisible)}
        />
      )}
      <Icon
        margin={[wp(2.5), 0]}
        source={iconPath.NO_EXPIRED_LISTINGS_ICON}
        width={wp(70)}
        height={wp(45)}
      />
      <ResponsiveText margin={[0, 0]} size={'h4'} fontFamily="SemiBold">
        No Sold Listings
      </ResponsiveText>
      <ResponsiveText
        size={'h6'}
        padding={[0, 28]}
        margin={[10, 0]}
        style={gStyles.center_text}
        textAlign>
        It feels so good making your first sale on deal zone. Second and your
        third
      </ResponsiveText>
      <RnButton
        margin={[wp(5), 0, 0, 0]}
        padding={[wp(2), wp(8)]}
        borderRadius={wp(10)}
        textColor={colors.primary}
        btnStyle={{backgroundColor: colors.red1, allignSelf: 'center'}}
        title="Start Selling"
        onPress={() => setModalVisible(!modalVisible)}
        fontFamily={'Bold'}
      />
    </ScrollView>
  );
};

export default EmptySoldLisitng;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
