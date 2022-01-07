import React, {useEffect} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Header from '../../../../components/Header';
import {Cart_Details} from '../../../../constants/mock';
import TransactionConfirmation from '../../DishDetails/TransactionConfirmation';
import {routeName} from '../../../../constants/routeName';
import {set} from 'react-native-reanimated';
import SharedData from './SharedData';
import {useSelector,useDispatch} from 'react-redux';
import { removeCart } from '../../../../redux/actions/user.actions';

const CartDetails = ({navigation}) => {
  const cartList = useSelector(state => state.appReducers.cartList.data);
  const dispatch = useDispatch()

  const [random, setRandom] = React.useState([]);

  React.useEffect(() => {
    setRandom(SharedData.state.data);
    let sum = cartList.reduce((a, c) => {
      return a + c.price * c.quantity;
    }, 0);
    console.log('sum: ', sum);
    console.log('cart data........', cartList);
  }, [random]);

  // const changeValue = (item, id)=> {
  //     const newArray = random.filter((item)=>{
  //         item.id===id ? item.quantity=item.quantity+1 : undefined;
  //         return random
  //       });
  //       console.log('quantity', item.quantity);
  //     setRandom(newArray);
  // }

  const onItemRemove = (data, position) => {
    // const newArray = SharedData.data.filter((item,i)=>{
    //    return data===item? position !== i : SharedData.data;
    // });
    dispatch(removeCart(data))
    // const arr = SharedData.state.data;
    // arr.splice(position, 1);
    // setRandom(arr);
    // SharedData.UpdateData(arr);
    // console.log('Cart_Details', random);
  };

  const onItemIncrease = item => {
    const newArray = random.filter(item1 => {
      item1 === item ? (item1 = item) : undefined;
      return random;
    });
    // console.log('quantity', item.data.quantity);
    setRandom(newArray);
  };

  const onItemDecrease = item => {
    const newArray = random.filter(item1 => {
      item1 === item ? (item1 = item) : undefined;
      return random;
    });
    // console.log('quantity', item.data.quantity);
    setRandom(newArray);
  };

  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black2,
        }}>
        <Header navigation={navigation} />
      </View>

      <View style={{flex: 0.9, justifyContent: 'space-between'}}>
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: wp(100),
              }}>
              <ResponsiveText
                margin={[15, 20, 15, 20]}
                color={colors.yellow}
                size={4}>
                My Cart
              </ResponsiveText>
            </View>
            {cartList.length === 0
              ? undefined
              : cartList.map((item, index) => {
                  return (
                    <View
                      style={{
                        backgroundColor: colors.black2,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        padding: 5,
                        marginBottom: 10,
                        borderRadius: 7,
                        alignItems: 'center',
                      }}>
                      <View>
                        <Icon
                          size={60}
                          borderRadius={7}
                          source={{uri: item.imageDataB}}
                        />
                      </View>
                      <View style={{justifyContent: 'center', width: wp(60)}}>
                        <ResponsiveText
                          size={3.5}
                          color={colors.white}
                          margin={[0, 0, 0, 10]}>
                          {item.cusineName}
                        </ResponsiveText>
                        <ResponsiveText
                          size={2.5}
                          color={colors.grey}
                          margin={[-5, 0, 0, 10]}>
                          {item.description}
                        </ResponsiveText>
                        <ResponsiveText
                          size={3}
                          color={colors.yellow}
                          margin={[0, 0, 0, 10]}>
                          $ {item.price}
                        </ResponsiveText>
                      </View>

                      <View style={{marginLeft: -15}}>
                        <TouchableOpacity
                          onPress={() => {
                            item.quantity =
                              item.quantity > 1
                                ? item.quantity - 1
                                : item.quantity;
                            onItemDecrease(item);
                          }}
                          style={{
                            backgroundColor: colors.yellow,
                            height: hp(2),
                            borderTopLeftRadius: 2,
                            borderTopRightRadius: 2,
                            alignItems: 'center',
                            width: wp(6),
                          }}>
                          <ResponsiveText margin={[-3, 0, 0, 0]}>
                            -
                          </ResponsiveText>
                        </TouchableOpacity>
                        <View
                          style={{
                            height: hp(3),
                            width: wp(6),
                            backgroundColor: colors.black3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: colors.yellow,
                            borderWidth: 1,
                          }}>
                          <ResponsiveText color={colors.yellow} size={3}>
                            {item.quantity}
                          </ResponsiveText>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            item.quantity = item.quantity + 1;
                            onItemIncrease(item);
                            // onItemIncrease(index, item.quantity)
                          }}
                          style={{
                            backgroundColor: colors.yellow,
                            height: hp(2),
                            borderBottomRightRadius: 2,
                            borderBottomLeftRadius: 2,
                            alignItems: 'center',
                            width: wp(6),
                          }}>
                          <ResponsiveText margin={[-3, 0, 0, 0]}>
                            +
                          </ResponsiveText>
                        </TouchableOpacity>
                      </View>
                      <View style={{marginLeft: 15, marginTop: 15}}>
                        <TouchableOpacity
                          onPress={() => {
                            onItemRemove(item, index);
                          }}>
                          <Icon
                            source={globalPath.DELETE_ICON}
                            tintColor={colors.yellow}
                            margin={[-20, 0, 0, 0]}
                            size={30}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
          </View>

          <View>
            <View
              style={{
                backgroundColor: colors.black2,
                paddingVertical: 15,
                marginHorizontal: 20,
                marginTop: 20,
                borderRadius: 7,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                  justifyContent: 'space-between',
                }}>
                <ResponsiveText color={colors.white} size={3}>
                  Total
                </ResponsiveText>
                <ResponsiveText color={colors.yellow} size={3}>
                  ${' '}
                  {cartList.reduce((a, c) => {
                    return a + c.price * c.quantity;
                  }, 0)}
                </ResponsiveText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  paddingHorizontal: 15,
                  justifyContent: 'space-between',
                  paddingBottom: 5,
                  borderBottomColor: colors.black1,
                  borderBottomWidth: 1,
                }}>
                <ResponsiveText color={colors.white} size={3}>
                  Tips
                </ResponsiveText>
                <ResponsiveText color={colors.yellow} size={3}>
                  $ 6.00
                </ResponsiveText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 15,
                  paddingHorizontal: 15,
                  justifyContent: 'space-between',
                }}>
                <ResponsiveText color={colors.white} size={3}>
                  Final Total
                </ResponsiveText>
                <ResponsiveText color={colors.yellow} size={4}>
                  $ {cartList.reduce((a, c) => {
                    return a + c.price * c.quantity;
                  }, 0)+6}
                </ResponsiveText>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routeName.TRANSACTION_CONFIRMATION)
              }
              style={{
                height: hp(5),
                width: wp(80),
                backgroundColor: colors.yellow,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 30,
              }}>
              <ResponsiveText size={3.5}>Check out</ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CartDetails;
