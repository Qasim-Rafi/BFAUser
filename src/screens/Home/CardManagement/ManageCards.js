import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../components/RnText';
import { colors } from '../../../constants/colorsPallet';
import Header from '../../../components/Header';
import { hp, wp } from '../../../helpers/Responsiveness';
import { globalPath } from '../../../constants/globalPath';
import { CARD_DATA } from '../../../constants/mock';
import Icon from '../../../components/Icon';
import { routeName } from '../../../constants/routeName';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

export default function ManageCards({ navigation }) {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    <View style={{ flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite }}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
        <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
      </View>

      <ResponsiveText margin={[20, 20, 10, 20]} color={isThemeDark ?  colors.yellow: colors.black} size={4}>
        Card Management
      </ResponsiveText>
      <View style={{ flex: 0.3 }}>
        <ImageBackground
          style={{ height: hp(25), width: wp(100) }}
          resizeMode={'stretch'}
          source={globalPath.CARDS_IMG}></ImageBackground>
      </View>
      <View
        style={{
          flex: 0.6,
          marginTop: 20,
          backgroundColor: isThemeDark ?  colors.black2: colors.white,
          borderTopRightRadius: 30,
          paddingVertical: 20,
          borderTopLeftRadius: 30,
        }}>
        {/* <ResponsiveText color={colors.white}>MAster</ResponsiveText> */}
        {CARD_DATA.map(item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 40,
                marginTop: 10,
                paddingBottom: 10,
                borderBottomColor: colors.black1,
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routeName.VIEW_CARD)}>
                <View
                  style={{
                    width: wp(50),
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 5,
                  }}>
                  <Icon source={item.url} size={40} />
                  <ResponsiveText margin={[0, 10, 0, 15]} color={isThemeDark ?  colors.white: colors.black}>
                    {item.cardType}
                  </ResponsiveText>
                  <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>
                    {item.cardNo}
                  </ResponsiveText>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: wp(30),
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Icon
                    source={globalPath.DELETE_ICON}
                    tintColor={colors.yellow}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(routeName.ADD_CARD);
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(75),
            marginTop: 40,
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 7,
            backgroundColor: colors.yellow,
          }}>
          <ResponsiveText color={colors.black} size={3.5}>
            Add a new Card
          </ResponsiveText>
        </TouchableOpacity>
      </View>

      {/* --------------Model for Delete Branch */}
      <Modal
        isVisible={isModalVisible ? true : false}
        coverScreen={true}
        backdropOpacity={0.9}
        style={{ justifyContent: 'flex-end' }}>
        {/* ------------ ModalView -------------- */}
        <View
          style={{
            backgroundColor: colors.black1,
            borderRadius: 7,
            marginBottom: 20,
          }}>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 20,
              marginBottom: 10,
              borderBottomColor: colors.grey1,
              borderBottomWidth: 1,
              paddingBottom: 15,
            }}>
            <ResponsiveText color={colors.white} size={3.5}>
              Delete Card
            </ResponsiveText>
            <ResponsiveText color={colors.grey1} size={3} margin={[0, 0, 0, 0]}>
              Are you sure you want to delete this Card?
            </ResponsiveText>
          </View>
          <View
            style={{
              borderBottomColor: colors.grey1,
              borderBottomWidth: 1,
              paddingBottom: 10,
              marginHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <ResponsiveText color={colors.yellow} size={3.1}>
                Delete
              </ResponsiveText>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: colors.grey1,
              marginHorizontal: 15,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <ResponsiveText color={colors.yellow} size={3.1}>
                Cancel
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------ ModalView End -------------- */}
      </Modal>
    </View>
  );
}
