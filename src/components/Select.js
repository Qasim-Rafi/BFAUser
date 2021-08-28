import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'; //outside view onpress handler
import {colors} from '../constants/colorsPallet';
import {hp, wp} from '../helpers/Responsiveness';
import Icon from './Icon';
import ResponsiveText from './RnText';
import CustomModal from './CustomModal';
import {gStyles} from '../styles/global';
import {ItemCondition, XCategoryData} from '../constants/mock';
import {iconPath} from '../constants/icon';
import MainCategoryModal from './Static/MainCategoryModal';

const Select = (props) => {
  const [isExpand, setIsExpand] = React.useState(false);
  let label = 'select';
  const [selected, setselected] = React.useState(label);
  const toggleSwitch = () => setIsExpand((previousState) => !previousState);
  const SetMenu = (data) => {
    console.log(data);
    setselected(data.name);
    // props.onPress(data);
    toggleSwitch();
  };
  return (
    <View style={[styles.container, {zIndex: props.zIndex}]}>
      <Pressable onPress={toggleSwitch}>
        <View style={styles.button}>
          <View style={{}}>
            {props.label && (
              <ResponsiveText
                fontFamily="SemiBold"
                size={3}
                margin={[0, 0, 0, 4]}>
                {props.label}
              </ResponsiveText>
            )}
            <ResponsiveText
              fontFamily="SemiBold"
              margin={[0, 0, 0, 4]}
              size={3.5}>
              {selected}
            </ResponsiveText>
          </View>
          <View style={{}}>
            <Icon
              tintColor={'grey'}
              width={wp(6)}
              height={wp(6)}
              source={isExpand ? iconPath.ARROW : iconPath.ARROW_DOWN_ICON}
            />
          </View>
        </View>
      </Pressable>
      {props.additemCategory && (
        <MainCategoryModal
          visible={isExpand}
          SetMenu={SetMenu}
          setVisibile={toggleSwitch}
        />
      )}

      {props.itemCondition && (
        <CustomModal
          postion="flex-end"
          visible={isExpand}
          setVisibile={toggleSwitch}>
          <View style={styles.ItemConditionContainer}>
            <View style={gStyles.row_alC}>
              <Pressable onPress={toggleSwitch}>
                <Icon
                  source={iconPath.CANCEL_ICON}
                  tintColor={colors.grey}
                  height={wp(5)}
                  width={wp(5)}
                />
              </Pressable>
              <ResponsiveText
                fontFamily="SemiBold"
                size={'h5'}
                margin={[0, 20]}>
                Select a condition
              </ResponsiveText>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 8,
                paddingBottom: 20,
              }}>
              {ItemCondition.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => SetMenu(item)}
                    style={styles.categoryListing}>
                    <Image
                      style={{
                        width: wp(9),
                        height: wp(9),
                        resizeMode: 'contain',
                      }}
                      source={item.icon}
                    />
                    <View>
                      <ResponsiveText fontFamily="SemiBold" margin={[0, 10]}>
                        {item.name}
                      </ResponsiveText>
                      <ResponsiveText
                        size={'h7'}
                        color={'grey'}
                        padding={[0, 30, 0, 0]}
                        margin={[4, 10]}>
                        {item.desc}
                      </ResponsiveText>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </CustomModal>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    // zIndex: 40000,
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background.grey,
  },
  ModalContainer: {
    flex: 0.95,
    backgroundColor: colors.background.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  categoryListing: {
    flexDirection: 'row',
    height: wp(18),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  // ===========================
  ItemConditionContainer: {
    maxHeight: hp(95),
    backgroundColor: colors.background.white,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
