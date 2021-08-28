import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colorsPallet';
import {iconPath} from '../../constants/icon';
import {XCategoryData} from '../../constants/mock';
import {wp} from '../../helpers/Responsiveness';
import {gStyles} from '../../styles/global';
import CustomModal from '../CustomModal';
import Icon from '../Icon';
import ResponsiveText from '../RnText';
import {connect} from 'react-redux';

import {categoryData, toggleData} from '../../redux/Users/actions';

const MainCategoryModal = ({visible, setVisibile, SetMenu, ...props}) => {
  return (
    <CustomModal postion="flex-end" visible={visible} setVisibile={setVisibile}>
      <View style={styles.ModalContainer}>
        <View style={gStyles.row_alC}>
          <TouchableOpacity onPress={setVisibile}>
            <Icon
              source={iconPath.CANCEL_ICON}
              tintColor={colors.grey}
              margin={[0, 0, 0, 5]}
            />
          </TouchableOpacity>
          <ResponsiveText
            fontFamily="SemiBold"
            size={'h6'}
            margin={[0, 20, 0, 15]}>
            Select a category
          </ResponsiveText>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 28,
            paddingHorizontal: 4,
          }}>
          {XCategoryData.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  SetMenu(item);
                  props.categoryData(item.name);
                  props.toggleData(true);
                }}
                style={styles.categoryListing}>
                <Image
                  style={{width: wp(10), height: wp(10)}}
                  source={item.icon}
                />
                <ResponsiveText fontFamily="SemiBold" margin={[0, 10]}>
                  {item.name}
                </ResponsiveText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </CustomModal>
  );
};

const DispatchToProps = (dispatch) => {
  return {
    toggleData: (data) => dispatch(toggleData(data)),
    categoryData: (data) => dispatch(categoryData(data)),
  };
};

export default connect(null, DispatchToProps)(MainCategoryModal);

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 0.93,
    backgroundColor: colors.background.white,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  categoryListing: {
    marginTop: 3,
    flexDirection: 'row',
    height: wp(16),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  // ===========================
  ItemConditionContainer: {
    flex: 0.5,
    backgroundColor: colors.background.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
});
