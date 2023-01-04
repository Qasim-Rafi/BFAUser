//Node Imports
import {auto} from 'async';
import {size} from 'lodash';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import Modal from 'react-native-modal';
import {act} from 'react-test-renderer';

//Local Imports
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {globalPath} from '../../../constants/globalPath';
import {routeName} from '../../../constants/routeName';
import {hp, wp} from '../../../helpers/Responsiveness';
import {useSelector, useDispatch} from 'react-redux';
import {
  checkoutOrder,
  getNotificationData,
  getOrders,
} from '../../../redux/actions/user.actions';
import urls from '../../../redux/lib/urls';
import Api from '../../../redux/lib/api';
import { BarIndicator } from 'react-native-indicators';

export default function TransactionConfirmation({route, navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeTabs, setActive] = useState('tab1');
  const [mode, setMode] = useState('mode1');

  const [count, changeCount] = useState(40);
  const [data, setData] = useState(route.params.data);
  const [preobj, setObj] = useState(route.params.obj)
  const [total, addTotal] = useState(0);
  const [tip, setTip] = useState();
const [loading, setLoading] = useState(false)
  const [pickup, setPickup] = useState(true);
  const dispatch = useDispatch();

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  const paymentMethod = route.params.paymentMethod ? route.params.paymentMethod : 'Cash'

  useEffect(() => {
    console.log('PARAMS CONFIRM ', route.params);
  });

  const toggleModal = async () => {
    var obj = {
      ...preobj,
      ...{
        // OrderType: mode == 'mode1' ? 'TakeAway' :mode == 'mode2' ? 'DineIn' : 'Self_Pickup',
        OrderType:mode == 'mode1' ? 2 :'mode2' ? 1 : 2,
        tip: activeTabs === 'tab1' ? 0 : count,
        PaymentType: paymentMethod
      },
    };
    console.log('res check', obj);
    setLoading(true)

    try {
      const response = await Api.post(urls.CHECK_ORDER, obj, false);
      console.log('res check', response);
      if (response && response.success == true) {
        setModalVisible(!isModalVisible);
        dispatch(getOrders());
        addNotification();
        setLoading(false);
      } else {
        // setLoading(false);
        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: 'Something went wrong',
        //   type: 'danger',
        //   icon: {icon: 'auto', position: 'left'},
        //   //backgroundColor:colors.black1
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const orderConfirmation = async DATA => {
    // dispatch(removeCart(data));
    try {
      const res = await Api.post(urls.ORDER_CONFIRMATION, {}, false);
      console.log('res', res);
      if (res && res.success == true) {
        toggleModal();
      } else {
      }
    } catch (error) {}
  };
  const addNotification = async DATA => {
    // dispatch(removeCart(data));
    let formdata = new FormData();
    formdata.append('NotificationType', 'Order');
    formdata.append('Remarks', 'Your Order Has Been Placed');
    formdata.append('SourceId', preobj.orderId);
    // formdata.append("Seen", false);
    formdata.append('UserId', preobj.userId);
    formdata.append('RestaurantBranchId', data.restaurantBranchId);


    try {
      const res = await Api.post(urls.ADD_NOTIFICATIONS, formdata, true);
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getNotificationData());
      } else {
      }
    } catch (error) {}
  };
  const Calculate = (totl) => {
    if (activeTabs === 'tab2') {
      return  count;
    } else if (activeTabs === 'tab3') {
      var x = data.amount * (count / 100);
      console.log(x);
      return parseFloat(x).toFixed(2);
    } else {
      return 0;
    }
  };
  const totalsum = (totl) => {
    if (activeTabs === 'tab2') {
      var x=data.amount+ count
      return parseFloat(x).toFixed(2);
    } else if (activeTabs === 'tab3') {
      var x =data.amount+  data.amount * (count / 100);
      console.log(x);
      return parseFloat(x).toFixed(2);
    } else {
      return parseFloat(data.amount).toFixed(2);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: isThemeDark ? colors.black2 : colors.white,
          justifyContent: 'center',
        }}>
        <Header
          // iconPath={globalPath.BACK_ARROW}
          title={'Check out'}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
        <ResponsiveText margin={[25, 0, 0, 20]} color={colors.yellow}>
          Transaction Confirmation
        </ResponsiveText>
        <ResponsiveText margin={[15, 0, 0, 20]} color={isThemeDark ?  colors.white: colors.black}>
          Confirm payment for the following:
        </ResponsiveText>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            paddingBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: isThemeDark ?  colors.black2: colors.white,
          }}>
          <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>Restaurant Name</ResponsiveText>
          <ResponsiveText color={colors.yellow}>
            {data.restaurantName}
          </ResponsiveText>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName.SELECT_PAYMENT_METHOD)}>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              paddingBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ResponsiveText color={isThemeDark ? colors.white : colors.black}>Payment Method</ResponsiveText>
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                paddingHorizontal: 5,
              }}
              onPress={() =>
                navigation.navigate(routeName.SELECT_PAYMENT_METHOD)
              }>
              <ResponsiveText color={colors.black} size={3}>
                {paymentMethod}
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: colors.yellow,
            marginTop: 15,
            height: hp(5),
            width: wp(90),
            alignSelf: 'center',
            borderRadius: 4,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              setMode('mode1');
            }}
            style={{
              backgroundColor: mode=='mode1' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
              flex: 1,
              margin: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ResponsiveText color={mode=='mode1' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
              Take Away
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMode('mode2');
            }}
            style={{
              backgroundColor: mode=='mode2' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
              flex: 1,
              margin: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ResponsiveText color={mode=='mode2' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
              Dine In
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMode('mode3');
            }}
            style={{
              backgroundColor: mode=='mode3' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
              flex: 1,
              margin: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ResponsiveText color={mode=='mode3' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
              Self Pick Up
            </ResponsiveText>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingBottom: 10,
            backgroundColor: isThemeDark ?  colors.black2: colors.white,
            borderRadius: 5,
            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <ResponsiveText color={isThemeDark ?  colors.white: colors.black} margin={[15, 0, 0, 15]}>
            Add Tip?
          </ResponsiveText>
          <View
            style={{
              backgroundColor: colors.yellow,
              marginTop: 5,
              height: hp(5),
              width: wp(85),
              alignSelf: 'center',
              borderRadius: 4,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                setActive('tab1');
                changeCount(0);
              }}
              style={{
                backgroundColor:
                  activeTabs === 'tab1' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
                flex: 1,
                margin: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ResponsiveText
                color={activeTabs === 'tab1' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
                No
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActive('tab2');
              }}
              style={{
                backgroundColor:
                  activeTabs === 'tab2' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
                flex: 1,
                margin: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ResponsiveText
                color={activeTabs === 'tab2' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
                $
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActive('tab3');
                count > 100 ? changeCount(100) : undefined;
              }}
              style={{
                backgroundColor:
                  activeTabs === 'tab3' ? colors.yellow : isThemeDark ?  colors.black2: colors.white,
                flex: 1,
                margin: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ResponsiveText
                color={activeTabs === 'tab3' ? isThemeDark ?  colors.black: colors.white : colors.yellow}>
                %
              </ResponsiveText>
            </TouchableOpacity>
          </View>
          {activeTabs === 'tab1' ? null : (
            <View
              style={{
                backgroundColor: isThemeDark ?  colors.black2: colors.white,
                marginTop: 16,
                height: hp(5),
                width: wp(85),
                alignSelf: 'center',
                borderRadius: 4,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPressIn={() =>
                  activeTabs === 'tab2' || activeTabs === 'tab3'
                    ? changeCount(count > 1 ? count - 1 : 1)
                    : changeCount(count)
                }
                style={{
                  backgroundColor: isThemeDark ?  colors.black2: colors.white,
                  borderColor: colors.black1,
                  borderWidth: 1,
                  flex: 0.22,
                  margin: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ResponsiveText color={colors.yellow} size={6}>
                  -
                </ResponsiveText>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite,
                  borderColor: colors.black1,
                  borderWidth: 1,
                  flex: 0.56,
                  margin: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}>
                <ResponsiveText color={colors.yellow} size={4}>
                  {activeTabs === 'tab2' ? '$' : ''}
                  {activeTabs === 'tab1'
                    ? ''
                    : activeTabs === 'tab1'
                    ? count
                    : count}
                  {activeTabs === 'tab3' ? '%' : ''}
                </ResponsiveText>
              </View>
              <TouchableOpacity
                onPressIn={() =>
                  activeTabs === 'tab2' || activeTabs === 'tab3'
                    ? changeCount(
                        activeTabs === 'tab3' && count < 100
                          ? count + 1
                          : activeTabs === 'tab2'
                          ? count + 1
                          : count,
                      )
                    : undefined
                }
                style={{
                  backgroundColor: isThemeDark ?  colors.black2: colors.white,
                  borderColor: colors.black1,
                  borderWidth: 1,
                  flex: 0.22,
                  margin: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ResponsiveText color={colors.yellow} size={6}>
                  +
                </ResponsiveText>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite,
            marginTop: 10,
            paddingHorizontal: 5,
          }}>
          <View
            style={{
              borderBottomColor: isThemeDark ?  colors.black2: colors.white,
              paddingBottom: 5,
              borderBottomWidth: 1,
              marginHorizontal: 15,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>Total</ResponsiveText>
            <ResponsiveText color={colors.yellow}>
              ${parseFloat(data.amount).toFixed(2)}
            </ResponsiveText>
          </View>
          <View
            style={{
              borderBottomColor: isThemeDark ?  colors.black2: colors.white,
              paddingBottom: 5,
              borderBottomWidth: 1,
              marginHorizontal: 15,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>Tips</ResponsiveText>
            <ResponsiveText color={colors.yellow}>
              {activeTabs === 'tab2' ? '$' : ''}
              {Calculate()}
              {activeTabs === 'tab3' ? '$' : ''}
            </ResponsiveText>
          </View>
          <View
            style={{
              borderBottomColor: isThemeDark ?  colors.black2: colors.white,
              paddingBottom: 5,
              marginHorizontal: 15,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>Final</ResponsiveText>
            <ResponsiveText color={colors.yellow}>
              $ {totalsum()}
            </ResponsiveText>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              height: hp(5),
              width: wp(90),
              backgroundColor: colors.yellow,
            }}
            onPress={ orderConfirmation}>
            <ResponsiveText>Order Confirmation</ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              height: hp(5),
              width: wp(90),
              borderColor: colors.yellow,
              borderWidth: 1,
              backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite,
            }}>
            <ResponsiveText color={colors.yellow}>Cancel</ResponsiveText>
          </TouchableOpacity>
        </View>

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
              backgroundColor: isThemeDark ?  colors.black2: colors.white,
              borderRadius: 7,
              marginBottom: 20,
            }}>
            <View
              style={{
                flex: 0.2,
                backgroundColor:isThemeDark ?colors.black1: colors.bgWhite,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 7,
                borderTopLeftRadius: 7,
              }}>
              <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={3.5}>
                Order Placed
              </ResponsiveText>
            </View>
            <View
              style={{
                flex: 0.18,
                backgroundColor: isThemeDark ?  colors.black2: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 15,
              }}>
              <ResponsiveText color={colors.grey1} size={2.6}>
                Order placed successfully
              </ResponsiveText>
            </View>
            <View
              style={{
                flex: 0.13,
                backgroundColor: isThemeDark ?  colors.black2: colors.white,
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
                  ${totalsum()}
                </ResponsiveText>
              </View>
              <View style={{flex: 0.1}}>
                <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={3}>
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
                backgroundColor: isThemeDark ?  colors.black2: colors.white,
                flexDirection: 'row',
                marginHorizontal: 15,
              }}>
              <View style={{flex: 0.55, marginTop: 5}}>
                <ResponsiveText
                  size={3}
                  color={isThemeDark ?  colors.white: colors.black}
                  margin={[0, 0, 0, 15]}>
                  Your Current Points:
                </ResponsiveText>
              </View>
              <View style={{flex: 0.45, marginTop: 5}}>
                <ResponsiveText size={3} color={colors.yellow}>
                  0 pts
                </ResponsiveText>
              </View>
            </View>
            <View
              style={{
                flex: 0.29,
                backgroundColor: isThemeDark ?  colors.black2: colors.white,
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
                onPress={() => setModalVisible(!isModalVisible)}>
                <ResponsiveText size={3} color={colors.yellow}>
                  OK
                </ResponsiveText>
              </TouchableOpacity>
            </View>
          </View>
          {/* ------------ ModalView End -------------- */}
        </Modal>
      </View>
      {
        loading===true?   <View style={{justifyContent:'center', backgroundColor: 'rgba(65, 65, 65, 0)', flex: 1 }}>
        < BarIndicator color={colors.yellow1} size={25} />
        </View>:null
      }
    </View>
  );
}
