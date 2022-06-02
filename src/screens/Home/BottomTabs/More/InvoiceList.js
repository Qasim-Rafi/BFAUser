import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { routeName } from '../../../../constants/routeName';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { colors } from '../../../../constants/colorsPallet';
import { hp } from '../../../../helpers/Responsiveness';
import { wp } from '../../../../helpers/Responsiveness';
import { globalPath } from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { INVOICE_DATA } from '../../../../constants/mock';
import Modal from 'react-native-modal';

import Api from '../../../../redux/lib/api';
import urls from '../../../../redux/lib/urls';
import { BarIndicator } from 'react-native-indicators';
import FlashMessage from 'react-native-flash-message';
import { useSelector } from 'react-redux';

const InvoiceList = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [checked, setCheck] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const dropdownRef = React.useRef(null);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      getData();
      console.log("useEffect");
    });

    return unsubscribe;
  }, [navigation]);
  const submitOrder = async Item => {
    // console.log('itemmmmm', Item);
if(data.statusName==='Paid'){
  dropdownRef.current.showMessage({
    message: 'Alert',
    description: "Already paid",
    type: 'success',
    // duration:'3000',
    icon: { icon: 'auto', position: 'left' },
    backgroundColor: colors.red,
  });
  return false;
}
    const obj = {
      id: 0,
      orderId: data.id,
      amount: data.amount,
      resturantBranchId: data.restaurantBranchId,
      updatedDateTime: new Date(),
      paymentMode: 1,
    };
    try {
      const res = await Api.post(urls.ADD_PAYMENT, obj);
      console.log('res', res);
      if (res && res.success == true) {
        // setModalVisible(true)
        BcoinPayment()

        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: "paid Successfully",
        //   type: 'success',
        //   // duration:'6000',
        //   icon: { icon: 'auto', position: 'left' },
        //   backgroundColor: colors.green1,
        // });
        // navigation.navigate(routeName.LANDING_SCREEN,);

      } else {
      }
    } catch (error) { }
    console.log('paymentssss', obj);
    //dispatch(checkoutOrder(obj,navigation));
    //
  };

  const BcoinPayment=async()=>{
    try {
      const res =await Api.put(urls.BALI_COIN_PAYMENT+data.id);
      console.log('res', res);
      if (res && res.success == true) {
        setModalVisible(true)

        dropdownRef.current.showMessage({
          message: 'Success',
          description: res.message,
          type: 'success',
          // duration:'6000',
          icon: { icon: 'auto', position: 'left' },
          backgroundColor: colors.green1,
        });
        // navigation.navigate(routeName.LANDING_SCREEN,);

      } else {
        dropdownRef.current.showMessage({
          message: 'Alert',
          description: res.message,
          type: 'danger',
          // duration:'6000',
          icon: { icon: 'auto', position: 'left' },
        });
      }
    } catch (error) { }
  }
  const getData = async id => {
    // var obj = {
    //   orderStatus: 5,
    //   updatedDateTime: new Date(),
    //   updatebyId: userId,
    // };
    // console.log('obj', obj);
    try {
      setLoading(true)
      const res = await Api.get(urls.GET_ORDER_BY_ID + route.params);
      console.log('ree', res);
      if (res && res.success == true) {
        setLoading(false)

        setData(res.data);
        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: 'Order Canceled',
        //   type: 'success',
        //   icon: { icon: 'auto', position: 'left' },
        //   //backgroundColor:colors.black1
        // });
      } else {
        setLoading(false)

      }
    } catch (error) { }
  };
  return (
    <View style={{ flex: 1, backgroundColor: isThemeDark? colors.black3: colors.bgWhite }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 7,
          backgroundColor: isThemeDark? colors.black3: colors.bgWhite,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate(routeName.BARCODE_READER);
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
        <View style={{ alignSelf: 'center', marginLeft: '27%' }}>
          <ResponsiveText size={4} color={isThemeDark? colors.white: colors.black1}>
            Invoice
          </ResponsiveText>
        </View>
      </View>

      <ScrollView>
        {loading == true ?
          <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0.5)', flex: 1 }}>
            <BarIndicator color={colors.yellow} size={50} />
          </View> :


          <View style={{ flex: 1 }}>

            <View
              style={{
                width: wp(100),
                marginTop: 0,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Icon size={200} source={data.restaurantLogo ? { uri: data.restaurantLogo } : globalPath.INVOICE_ICON} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(8),
              }}>
              <ResponsiveText size={4} color={isThemeDark? colors.white: colors.black1}>
                OrderId:{' '}
                <ResponsiveText color={colors.grey1}>{data.id}</ResponsiveText>
              </ResponsiveText>
              <ResponsiveText size={4} color={isThemeDark? colors.white: colors.black1}>
                Date:{' '}
                <ResponsiveText color={colors.grey1}>
                  {data.createdDateTime}
                </ResponsiveText>
              </ResponsiveText>
            </View>

            <View style={[styles.Container,{backgroundColor: isThemeDark ?  colors.black2: colors.white}]}>
              {Object.keys(data).length != 0
                ? data.addOrderDetail.map(item => {
                  return (
                    <View
                      style={{
                        // backgroundColor: colors.black2,
                        height: hp(10),
                        borderRadius: 5,
                        marginTop: hp(3),
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: colors.black1,
                        paddingLeft: wp(2),
                        alignItems: 'center',
                      }}>
                      <View style={{ marginTop: '2%', marginLeft: '2%' }}>
                        <Icon
                          source={{ uri: item.imageDataB }}
                          borderRadius={5}
                          size={65}
                        />
                      </View>
                      <View style={{ marginTop: '2%', marginLeft: '2%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <ResponsiveText color={isThemeDark? colors.white: colors.black1}>
                            {item.dishName}
                          </ResponsiveText>
                          <ResponsiveText
                            size={2.8}
                            margin={[0, 0, 0, 5]}
                            color={isThemeDark? colors.white: colors.black1}>
                              ${parseFloat(item.dishPrice).toFixed(2)}
                            {/* ${item.dishPrice} */}
                          </ResponsiveText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <ResponsiveText size={2.8} color={colors.grey}>
                            {item.dishDescription}
                          </ResponsiveText>
                        </View>
                      </View>
                    </View>
                  );
                })
                : null}

              <View style={{ alignItems: 'center', marginTop: '5%' }}>
                <ResponsiveText color={isThemeDark? colors.white: colors.black1}>
                  {'Total Amount'}
                </ResponsiveText>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '2%',
                }}>
                <ResponsiveText size={10} color={colors.yellow}>
                  {'$'}
                  {parseFloat(data.amount).toFixed(2)}
                </ResponsiveText>
              </View>
              <View>
                {/* <View
                                style={{
                                    marginTop: 10,
                                    paddingVertical: 5,
                                    alignSelf: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: colors.white, fontSize: 30 }} >Choose Your Card</Text>
                            </View> */}
                <View
                  style={{
                    flex: 1,
                    marginTop: 0,
                    // backgroundColor: colors.black2,
                    borderTopRightRadius: 30,
                    paddingVertical: 5,
                    borderTopLeftRadius: 30,
                    // alignSelf:'center',
                    paddingTop: 20,
                    width: '100%',
                  }}>
                  <View style={{ flex: 0.3 }}>
                    <RadioGroup
                      color={colors.yellow}
                      onSelect={() => setCheck(true)}
                      selectedIndex={0}>
                      {INVOICE_DATA.map(item => {
                        return (
                          <RadioButton
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: wp(3),
                              borderBottomWidth: 1,
                              borderBottomColor: colors.black1,
                              borderTopWidth: 1,
                              borderTopColor: colors.black1,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginHorizontal: wp(2),
                                marginTop: 0,
                                paddingBottom: 5,
                                borderBottomColor: colors.black1,

                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  width: wp(70),
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  paddingHorizontal: 5,
                                }}>
                                <Icon source={item.url} size={35} />
                                <View style={{ marginLeft: wp(5) }}>
                                  <ResponsiveText
                                    // margin={[0, 10, 0, 15]}
                                    color={isThemeDark? colors.white: colors.black1}>
                                    {item.cardType}
                                  </ResponsiveText>
                                  <ResponsiveText color={colors.grey} size={3}>
                                    {item.cardNo}
                                  </ResponsiveText>
                                </View>
                              </View>
                            </View>
                          </RadioButton>
                        );
                      })}
                    </RadioGroup>
                  </View>
                  <View style={{ alignItems: 'center', marginTop: hp(9) }}>
                    <TouchableOpacity
                      onPress={() => {
                        submitOrder()
                      }}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp(75),
                        // marginTop: 90,
                        height: hp(5),
                        // alignSelf: 'center',
                        borderRadius: 7,
                        backgroundColor: colors.yellow,
                        position: 'absolute',
                        bottom: 10,
                        zIndex: 2,
                      }}>
                      <ResponsiveText color={colors.black} size={3.5}>
                        Pay Now
                      </ResponsiveText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>}
          <Modal
          isVisible={isModalVisible}
          statusBarTranslucent={true}
          backdropOpacity={0.9}
          style={{justifyContent: 'flex-end'}}
          onModalHide={() => navigation.goBack()}>
          {/* ------------ ModalView -------------- */}
          <View
            style={{
              flex: 0.3,
              backgroundColor: colors.black2,
              borderRadius: 7,
              marginBottom: 20,
            }}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: colors.black1,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 7,
                borderTopLeftRadius: 7,
              }}>
              <ResponsiveText color={isThemeDark? colors.white: colors.black1} size={3.5}>
               Payment Confirmation
              </ResponsiveText>
            </View>
            <View
              style={{
                flex: 0.18,
                backgroundColor: colors.black2,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 15,
              }}>
              <ResponsiveText color={colors.grey1} size={3}>
              Your order has been paid successfully 
              </ResponsiveText>
            </View>
            <View
              style={{
                flex: 0.13,
                backgroundColor: colors.black2,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 2,
                borderBottomColor: colors.black1,
                marginHorizontal: 15,
              }}>
              <View style={{flex: 0.45, alignItems: 'flex-end'}}>
                <ResponsiveText
                  color={colors.yellow}
                  size={3}
                  margin={[0, 10, 0, 0]}>
                 {parseFloat(data.amount).toFixed(2)}
                </ResponsiveText>
              </View>
              <View style={{flex: 0.1}}>
                <ResponsiveText color={isThemeDark? colors.white: colors.black1} size={3}>
                  To
                </ResponsiveText>
              </View>
              <View style={{flex: 0.45}}>
                <ResponsiveText color={colors.yellow} size={3}>
                  {data.restaurantName}
                </ResponsiveText>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                backgroundColor: colors.black2,
                flexDirection: 'row',
                marginHorizontal: 15,
              }}>
              {/* <View style={{flex: 0.55, marginTop: 5}}>
                <ResponsiveText
                  size={3}
                  color={colors.white}
                  margin={[0, 0, 0, 15]}>
                  Your Current Points:
                </ResponsiveText>
              </View>
              <View style={{flex: 0.45, marginTop: 5}}>
                <ResponsiveText size={3} color={colors.yellow}>
                  0 pts
                </ResponsiveText>
              </View> */}
            </View>
            <View
              style={{
                flex: 0.29,
                backgroundColor: colors.black2,
                alignItems: 'center',
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: colors.yellow,
                  width: wp(83),
                  height: hp(5),
                }}
                onPress={() => {setModalVisible(!isModalVisible)}
        // navigation.navigate(routeName.LANDING_SCREEN,)
                }>
                <ResponsiveText size={3} color={colors.yellow}>
                  OK
                </ResponsiveText>
              </TouchableOpacity>
            </View>
          </View>
          {/* ------------ ModalView End -------------- */}
        </Modal>
      </ScrollView>
  <FlashMessage ref={dropdownRef} />

    </View>

  );
};

export default InvoiceList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  Container: {
    backgroundColor: colors.black2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: wp(3),
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  buttonTouchable: {
    padding: 16,
  },
});
