//Node Imports
import React ,{useEffect}from 'react';
import {View, BackHandler, TouchableOpacity, ScrollView} from 'react-native';

//Local Imports
import {colors} from '../../../../constants/colorsPallet';
import {hp} from '../../../../helpers/Responsiveness';
import {wp} from '../../../../helpers/Responsiveness';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import Header from '../../../../components/Header';
import ResponsiveText from '../../../../components/RnText';
import moment from 'moment';
import StaticMap from '../../../../components/StaticMap';
import Restaurant_Description from '../../RestaurantBranchDetail/ResturantDesceiption';
import { routeName } from '../../../../constants/routeName';
import { useSelector } from 'react-redux';

export default function OrderDetails({navigation, route}) {
  const [data, setdata] = React.useState(route.params.data);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  function handleBackButtonClick() {
    navigation.navigate(routeName.ORDER_HISTORY);
    return true;
  }
  return (
    <View style={{ flex: 1, backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite,  }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate(routeName.ORDER_HISTORY);
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 0.9, backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite, }} >
        <View
          style={{
            backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite,
            marginHorizontal: wp(5),
            marginVertical: hp(2),
          }}>
          <ResponsiveText size={4} color={colors.yellow}>
            Order Details
          </ResponsiveText>
        </View>
        <View style={{ width: wp(73), flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: colors.lightBlack, marginLeft: '5%' }} >
          <View style={{ flexDirection: 'row', }}>
            <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>Restaurant Name: </ResponsiveText>
            <ResponsiveText size={3} margin={[0, 5, 0, 25]} color={colors.grey}>{data ? data.restaurantName : 'CustomerName'}</ResponsiveText>
          </View>

        </View>
        <View style={{ padding: hp(0.5), flexDirection: 'row' }}>
          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2} margin={[0, 0, 0, 15]}>
            Order Id:
          </ResponsiveText>
          <ResponsiveText size={3} color={colors.grey} margin={[0, 0, 0, 15]}>
            {data ? data.id : 'id'}
          </ResponsiveText>
        </View>
        <View style={{ padding: hp(0.5), flexDirection: 'row' }}>
          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2} margin={[0, 0, 0, 15]}>
            Date/Time:
          </ResponsiveText>
          <ResponsiveText size={3} color={colors.grey} margin={[0, 0, 0, 15]}>
            {moment(data ? data.orderDateTimes : 'orderDateTimes').format("dddd, MMMM Do YYYY, h:mm a")}
          </ResponsiveText>

        </View>
        <View style={{ padding: hp(0.5), flexDirection: 'row', marginLeft: '4%' }}>
          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>Order Status: </ResponsiveText>
          <ResponsiveText size={3} margin={[0, 5, 0, 50]} color={isThemeDark ? colors.yellow : colors.black3}>{data.statusName}{'/'}{data.orderType}</ResponsiveText>
        </View>
        <View style={{ padding: hp(0.5), flexDirection: 'row', marginLeft: '4%' }}>
          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>Assign Table: </ResponsiveText>
          <ResponsiveText size={3} margin={[0, 5, 0, 50]} color={isThemeDark ? colors.yellow : colors.black3}>{data.tableNo ? data.tableNo : 'Table Not Assign'}</ResponsiveText>
        </View>
        {/* <View style={{ padding: hp(0.5), flexDirection: 'row', marginLeft: '5%' }}>
          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>Dish Remarks: </ResponsiveText>
          <ResponsiveText size={3} margin={[0, 5, 0, 50]} color={isThemeDark ? colors.yellow : colors.black3}>{data.remarks ? data.remarks : 'Null'}</ResponsiveText>
        </View> */}
        <View
          style={{
            backgroundColor: isThemeDark ? colors.black1 : colors.grey,
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View
            style={{ flex: 0.6, justifyContent: 'center', marginHorizontal: 15 }}>
            <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>
              Ordered Items
            </ResponsiveText>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center' }}>
            <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>
              Qty
            </ResponsiveText>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center' }}>
            <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black2}>
              Amount
            </ResponsiveText>
          </View>
        </View>
        {data ? data.addOrderDetail.map(item => {
          return (
            <View style={{ margin: 10, borderWidth: 2, borderColor: colors.white, borderRadius: 5 }}>
              <View
                style={{
                  backgroundColor: isThemeDark ? colors.lightBlack : colors.yellow,
                  flexDirection: 'row',
                  // borderBottomWidth: 1,
                  borderBottomColor: colors.black1,
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    flex: 0.6,
                    justifyContent: 'center',
                    marginHorizontal: 15,
                  }}>
                  <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black3}>
                    {item.dishName}
                  </ResponsiveText>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                  <ResponsiveText size={3} margin={[0, 0, 0, 7]} color={isThemeDark ? colors.white : colors.black3}>
                    {item.quantity}
                  </ResponsiveText>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                  <ResponsiveText size={3} margin={[0, 0, 0, 28]} color={isThemeDark ? colors.white : colors.black3}>
                    $ {parseFloat(item.dishPrice*item.quantity).toFixed(2)}
                  </ResponsiveText>
                </View>
              </View>
              {item.orderDetailSoftDrinkList.length > 0 ?
                <View>
                  <ResponsiveText
                    margin={[0, 0, 0, 10]}
                    color={isThemeDark ? colors.yellow : colors.yellow}
                  >Soft Drinks</ResponsiveText>
                </View>
                : null}


              {item ? item.orderDetailSoftDrinkList.map(item => {
                return (
                  <View>
                    <View
                      style={{
                        backgroundColor: isThemeDark ? colors.black2 : colors.lighterGrey,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: colors.black1,
                        paddingVertical: 10,
                      }}>
                      <View
                        style={{
                          flex: 0.6,
                          justifyContent: 'center',
                          marginHorizontal: 15,
                        }}>
                        <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black3}>
                          {item.restaurantSoftDrinkName}
                        </ResponsiveText>
                      </View>
                      <View style={{ flex: 0.1, justifyContent: 'center' }}>
                        <ResponsiveText size={3} margin={[0, 0, 0, 7]} color={isThemeDark ? colors.white : colors.black3}>
                          {item.quantity}
                        </ResponsiveText>
                      </View>
                      <View style={{ flex: 0.3, justifyContent: 'center' }}>
                        <ResponsiveText size={3} margin={[0, 0, 0, 28]} color={isThemeDark ? colors.white : colors.black3}>
                          $ {parseFloat(item.price*item.quantity).toFixed(2)}
                        </ResponsiveText>
                      </View>

                    </View>

                  </View>
                );
              }) : null}
              {item.orderDetailExtraItemList.length > 0 ? <View>
                <ResponsiveText
                  margin={[0, 0, 0, 10]}
                  color={isThemeDark ? colors.yellow : colors.yellow}
                >Extra Item List</ResponsiveText>
              </View>
                : null}

              <View style={{ margin: 0, borderWidth: 0, borderColor: colors.white }}>
                {item ? item.orderDetailExtraItemList.map(item => {
                  return (
                    <View>
                      <View
                        style={{
                          backgroundColor: isThemeDark ? colors.black2 : colors.lighterGrey,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: colors.black1,
                          paddingVertical: 10,
                        }}>
                        <View
                          style={{
                            flex: 0.6,
                            justifyContent: 'center',
                            marginHorizontal: 15,
                          }}>
                          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black3}>
                            {item.restaurantDishExtraItemName}
                          </ResponsiveText>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                          <ResponsiveText size={3} margin={[0, 0, 0, 7]} color={isThemeDark ? colors.white : colors.black3}>
                            {item.quantity}
                          </ResponsiveText>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                          <ResponsiveText size={3} margin={[0, 0, 0, 28]} color={isThemeDark ? colors.white : colors.black3}>
                            $ {parseFloat(item.price*item.quantity).toFixed(2)}
                          </ResponsiveText>
                        </View>

                      </View>

                    </View>
                  );
                }) : null}
              </View>
              {item.orderDetailLinkedItemList.length > 0 ?
                <View>
                  <ResponsiveText
                    margin={[0, 0, 0, 10]}
                    color={isThemeDark ? colors.yellow : colors.yellow}
                  >Linked Item List</ResponsiveText>
                </View>
                : null}
              <View style={{ margin: 0, borderWidth: 0, borderColor: colors.white }}>
                {item ? item.orderDetailLinkedItemList.map(item => {
                  return (
                    <View>
                      <View
                        style={{
                          backgroundColor: isThemeDark ? colors.black2 : colors.lighterGrey,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: colors.black1,
                          paddingVertical: 10,
                        }}>
                        <View
                          style={{
                            flex: 0.6,
                            justifyContent: 'center',
                            marginHorizontal: 15,
                          }}>
                          <ResponsiveText size={3} color={isThemeDark ? colors.white : colors.black3}>
                            {item.restaurantDishLinkedItemName}
                          </ResponsiveText>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                          <ResponsiveText size={3} margin={[0, 0, 0, 7]} color={isThemeDark ? colors.white : colors.black3}>
                            {item.quantity}
                          </ResponsiveText>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                          <ResponsiveText size={3} margin={[0, 0, 0, 28]} color={isThemeDark ? colors.white : colors.black3}>
                            $ {parseFloat(item.price*item.quantity).toFixed(2)}
                          </ResponsiveText>
                        </View>

                      </View>

                    </View>
                  );
                }) : null}
              </View>
            </View>
          );
        }) : null}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 25,
            marginTop: 10,
          }}>
          <View style={{ flex: 0.45, alignItems: 'flex-start' }}>
            <ResponsiveText color={isThemeDark ? colors.white : colors.black2} size={3}>
              Sub Total
            </ResponsiveText>
          </View>
          <View style={{ flex: 0.55, alignItems: 'flex-end' }}>
            <ResponsiveText margin={[0, 0, 0, 0]} color={isThemeDark ? colors.yellow : colors.black3} size={3}>
              ${data ? parseFloat(data.amount).toFixed(2) : 'amount'}
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 25,
            marginTop: 10,
            borderBottomColor: colors.black1,
            paddingBottom: 5,
            borderBottomWidth: 1,
          }}>
          <View style={{ flex: 0.45, alignItems: 'flex-start' }}>
            <ResponsiveText color={isThemeDark ? colors.white : colors.black2} size={3}>
              Tips
            </ResponsiveText>
          </View>
          <View style={{ flex: 0.54, alignItems: 'flex-end' }}>
            <ResponsiveText margin={[0, 0, 0, 0]} color={isThemeDark ? colors.yellow : colors.black3} size={3}>
              ${data.tip}
            </ResponsiveText>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 20,
          }}>
          <View style={{ flex: 0.45, alignItems: 'flex-start' }}>
            <ResponsiveText color={isThemeDark ? colors.white : colors.black2} size={3}>
              Final Total
            </ResponsiveText>
          </View>
          <View style={{ flex: 0.55, alignItems: 'flex-end' }}>
            <ResponsiveText
              margin={[0, 0, 0, 0]}
              color={isThemeDark ? colors.yellow : colors.black3}
              size={4.5}>
              ${data ? parseFloat(data.amount).toFixed(2) : 'amount'}
            </ResponsiveText>
          </View>
        </View>
        {data.orderStatusName == 6 ?
          <View style={{ alignItems: 'center', margin: 5 }}>
            <View style={{ backgroundColor: colors.white, margin: 10, padding: 10 }}>
              <QRCode
                size={200}
                value={JSON.stringify(data.id)}
                backgroundColor={colors.white}
              />
            </View>
          </View>
          : undefined}
        {data.orderStatusName == 6 ?
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => { confirm(), navigation.goBack() }}
              style={{
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
                height: hp(5),
                width: wp(24),
                borderRadius: 20,
                backgroundColor: colors.yellow,
                marginBottom: 5
              }} ><ResponsiveText color={colors.black}
                size={2.5} >Paid</ResponsiveText>
            </TouchableOpacity>
            {/* <TouchableOpacity
              // onPress={() => {InProcess(item, 3)}}
              style={{
                alignItems: 'center',
                marginTop: 15,
                marginLeft: 10,
                justifyContent: 'center',
                height: hp(5),
                width: wp(24),
                borderRadius: 20,
                backgroundColor: colors.yellow,
              }} ><ResponsiveText color={colors.black}
                size={2.5} >UnPaid</ResponsiveText>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={printPDF}
              style={{
                alignItems: 'center',
                marginTop: 15,
                marginLeft: 10,
                justifyContent: 'center',
                height: hp(5),
                width: wp(24),
                borderRadius: 20,
                backgroundColor: colors.yellow,
              }} ><ResponsiveText color={colors.black}
                size={2.5} >Print</ResponsiveText>
            </TouchableOpacity>
          </View>
          : undefined}
      </ScrollView>
    </View>
  );
}
