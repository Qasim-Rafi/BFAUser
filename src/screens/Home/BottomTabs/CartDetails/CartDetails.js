import React, {useEffect} from 'react';
import {
  View,
  Text,
  Touchable,
  StyleSheet,
  Image,
  Button,
  Animated,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Header from '../../../../components/Header';
import SharedData from './SharedData';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeCart,
  addCart,
  checkoutOrder,
  retriveCart,
  getOrders,
} from '../../../../redux/actions/user.actions';
import AsyncStorage from '@react-native-community/async-storage';
import {routeName} from '../../../../constants/routeName';
import Api from '../../../../redux/lib/api';
import urls from '../../../../redux/lib/urls';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {BarIndicator} from 'react-native-indicators';

const CartDetails = ({navigation}) => {
  const cartList = useSelector(state => state.appReducers.cartList.data);
  const orderList = useSelector(
    state => state.appReducers.your_ordersList.data,
  );
  const orderList_Loading = useSelector(
    state => state.appReducers.your_ordersList.loading,
  );
  const dispatch = useDispatch();
  const [selectedItem, SetSelectedItem] = React.useState(null);
  const [random, setRandom] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const dropdownRef = React.useRef(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // React.useEffect(async () => {
  //   const item = await AsyncStorage.removeItem('cartData');

  //   console.log(JSON.parse(item), 'cart dataataaaaaaa');
  //   if (item != null) {
  //     dispatch(retriveCart(JSON.parse(item)));
  //   }
  // }, []);
  const newArray = [];
  cartList.forEach(obj => {
    if (!newArray.some(o => o.titleR === obj.titleR)) {
      newArray.push({...obj});
    }
  });
  React.useEffect(async () => {
    dispatch(getOrders());

    setRandom(SharedData.state.data);
    let sum = cartList.reduce((a, c) => {
      return a + c.price * c.quantity;
    }, 0);
    setTotalPrice(sum);
    console.log('sum: ', sum);
    console.log('cart data........', cartList);
  }, [random]);

  //Remove product
  const onItemRemove = async item => {
    console.log('itemm', item);
    // dispatch(removeCart(data));
    try {
      setLoading(true);

      const res = await Api.delete(
        urls.DELETE_DISH_FROM_CART +
          item.orderId +
          '&restaurantDishId=' +
          item.restaurantDishId,
      );
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getOrders());
        setLoading(false);
        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Dish deleted',
          type: 'success',
          icon: {icon: 'auto', position: 'left'},
          //backgroundColor:colors.black1
        });
      } else {
        setLoading(false);

        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Something went wrong',
          type: 'danger',
          icon: {icon: 'auto', position: 'left'},
          //backgroundColor:colors.black1
        });
      }
    } catch (error) {}
  };
  const onClearOrder = async id => {
    // dispatch(removeCart(data));
    try {
      setLoading(true);
      const res = await Api.delete(urls.DELETE_ORDER_FROM_CART + id);
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getOrders());
        setLoading(false);
        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Order cleared',
          type: 'success',
          icon: {icon: 'auto', position: 'left'},
          //backgroundColor:colors.black1
        });
      } else {
        setLoading(false);

        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Something went wrong',
          type: 'danger',
          icon: {icon: 'auto', position: 'left'},
          //backgroundColor:colors.black1
        });
      }
    } catch (error) {}
  };
  //increase quantity
  const onItemIncrease = async (index, item) => {
    var obj = {
      orderId: item.orderId,
      restaurantDishId: item.restaurantDishId,
      quantity: item.quantity + 1,
    };
    console.log('increase', obj);
    try {
      const res = await Api.put(urls.UPDATE_QUANTITY, obj);
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getOrders());
      } else {
      }
    } catch (error) {}

    // var i = cartList.findIndex(obj => obj.id === id);

    // cartList[i].quantity = cartList[i].quantity + 1;
    // console.log('quantity', cartList);
    // setRandom(cartList);
    // dispatch(retriveCart(cartList));
  };
  //Decrease quantity
  const onItemDecrease = async item => {
    var obj = {
      orderId: item.orderId,
      restaurantDishId: item.restaurantDishId,
      quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
    };
    console.log('increase', obj);
    try {
      const res = await Api.put(urls.UPDATE_QUANTITY, obj);
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getOrders());
      } else {
      }
    } catch (error) {}
  };
  const submitOrder = async Item => {
    var userId = await AsyncStorage.getItem('@userId');
    console.log('itemmmmm', Item);

    const obj = {
      id: 0,
      userId: userId,
      orderId: Item.id,
      amount: Item.amount,
      resturantBranchId: Item.restaurantBranchId,
      updatedDateTime: 'string',
      updatebyId: userId,
    };
    console.log('objjjjjjjjjjjj,obj', obj);
    //dispatch(checkoutOrder(obj,navigation));
    navigation.navigate(routeName.TRANSACTION_CONFIRMATION, {obj:obj,data:Item});
    //
  };
  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 0.9,
          justifyContent: 'space-between',
          backgroundColor: colors.black1,
          margin: 5,
          borderRadius: 20,
        }}>
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
                {item.restaurantName}
              </ResponsiveText>
              {item.statusName === 'PreOrder' ?
              <TouchableOpacity onPress={() => onClearOrder(item.id)}>
                <ResponsiveText
                  margin={[15, 30, 15, -10]}
                  color={colors.white}
                  size={4}>
                  Clear Order
                </ResponsiveText>
              </TouchableOpacity>:null}
            </View>
            {item.addOrderDetail.length === 0
              ? undefined
              : item.addOrderDetail.map((item, index) => {
                  return (
                    <View
                      style={{
                        backgroundColor: colors.black2,
                        marginHorizontal: 10,
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
                      <TouchableOpacity
                        onPress={() => {
                          setVisible(true);
                          SetSelectedItem(item);
                        }}>
                        <View style={{justifyContent: 'center', width: wp(60)}}>
                          <ResponsiveText
                            size={3.5}
                            color={colors.white}
                            margin={[0, 0, 0, 10]}>
                            {item.dishName}
                          </ResponsiveText>
                          <ResponsiveText
                            size={2.5}
                            color={colors.grey}
                            margin={[-3, 15, 0, 10]}>
                            {item.dishDescription}
                          </ResponsiveText>
                          <ResponsiveText
                            size={3}
                            color={colors.yellow}
                            margin={[0, 0, 0, 10]}>
                            $ {item.dishPrice}
                          </ResponsiveText>
                        </View>
                      </TouchableOpacity>

                      <View style={{marginLeft: -15}}>
                        <TouchableOpacity
                          onPress={() => {
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
                            // item.quantity = item.quantity + 1;
                            //onItemIncrease(item);
                            onItemIncrease(index, item);
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
                      <View style={{marginLeft: wp(2), marginTop: 15}}>
                        <TouchableOpacity
                          onPress={() => {
                            Alert.alert(
                              '',
                              'Do you want to remove this item from cart ?',
                              [
                                {
                                  text: 'Cancel',
                                  onPress: () => {},
                                  style: 'cancel',
                                },
                                {
                                  text: 'OK',
                                  onPress: () => {
                                    // if(item.statusName === 'PreOrder'){

                                      onItemRemove(item);
                                    // }else{
                                    //   Alert.alert('','Order in process')
                                    // }
                                  },
                                },
                              ],
                            );
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
                  $ {item.amount}
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
                  $ 0.00
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
                  $ {item.amount}
                  {/* {cartList
                    .filter(i => i.titleR == item.titleR)
                    .reduce((a, c) => {
                      return a + c.price * c.quantity;
                    }, 0) + 6+item.extraCheeses.reduce((a, c) => {
                      return a + c.price;
                    }, 0)} */}
                </ResponsiveText>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                item.statusName === 'PreOrder' ? submitOrder(item) : {};
              }}
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
              <ResponsiveText size={3.5}>
                {item.statusName === 'PreOrder' ? 'Check out' : 'Pending'}
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <ModalPoup visible={visible}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require('../../../../assets/fake_Images/cross.png')}
              style={{height: 22, width: 22}}
            />
          </TouchableOpacity>
        </View>

        {selectedItem !== null ? (
          <>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: selectedItem.imageDataB}}
                style={styles.popupImage}
              />

              <View style={{flexDirection: 'column', marginLeft: 5}}>
                <Text style={styles.ModalDish}>{selectedItem.dishName}</Text>
                <Text style={styles.ModalPrice}>$ {selectedItem.dishPrice}</Text>
              </View>
            </View>

            <View style={styles.ModalInnerDisign}>
              <Text style={styles.headingDiscription}>Description:</Text>
              <Text style={styles.ModalDiscription}>
                {selectedItem.dishDescription}
              </Text>
              <Text style={styles.headingDrinks}>Drink:</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    backgroundColor: colors.white,
                    height: 5,
                    width: 5,
                    borderRadius: 50,
                    marginTop: 6,
                  }}></View>
                <Text style={styles.ModalDrink}> {selectedItem.addOnName}</Text>
              </View>
              <View>
                <Text style={styles.headingAddOns}>Add ons: </Text>
              </View>
              {selectedItem.orderDetailExtraItemList.length > 0
                ? selectedItem.orderDetailExtraItemList.map((item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginLeft: 10,
                        }}>
                        <View
                          style={{
                            backgroundColor: colors.white,
                            height: 5,
                            width: 5,
                            borderRadius: 50,
                            marginTop: 6,
                          }}></View>
                        <Text style={styles.ModalDrink}>
                          {item.restaurantDishExtraItemName}
                        </Text>
                      </View>
                    );
                  })
                : undefined}
              <View></View>
              <Text style={styles.headingAddOns}>Upsize:</Text>
              {selectedItem.orderDetailLinkedItemList.length > 0
                ? selectedItem.orderDetailLinkedItemList.map((item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginLeft: 10,
                        }}>
                        <View
                          style={{
                            backgroundColor: colors.white,
                            height: 5,
                            width: 5,
                            borderRadius: 50,
                            marginTop: 6,
                          }}></View>
                        <Text style={styles.ModalDrink}>
                          {item.restaurantDishLinkedItemName}
                        </Text>
                      </View>
                    );
                  })
                : undefined}
              <Text style={styles.headingInstructions}>Remarks:</Text>
              <Text style={styles.ModalInstructions}>
                {selectedItem.instructions
                  ? selectedItem.instructions
                  : 'no remarks'}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 10,
                  marginTop: 4,
                  alignSelf: 'flex-end',
                }}>
                Total: $ {selectedItem.itemTotalPrice}
              </Text>
            </View>
          </>
        ) : undefined}
      </ModalPoup>
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black2,
        }}>
        <Header navigation={navigation} />
      </View>
      {isLoading === true ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(65, 65, 65, 0.5)',
            flex: 1,
            zIndex: 10,
          }}>
          <BarIndicator color={colors.yellow} size={50} />
        </View>
      ) : undefined}
      <View
        style={{flex: 0.9, marginHorizontal: '1%', justifyContent: 'center'}}>
        {orderList.length > 0 ? (
          <FlatList
            contentContainerStyle={{paddingVertical: 10}}
            data={orderList}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            // onViewableItemsChanged={onViewRef}
            // viewabilityConfig={viewConfigRef.current}
          />
        ) : (
          <Text style={{alignSelf: 'center', color: colors.white}}>
            No order yet
          </Text>
        )}
      </View>
      <FlashMessage ref={dropdownRef} />

      <View style={styles.centeredView}></View>
    </View>
  );
};

export default CartDetails;
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(65, 65, 65, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    // height: '45%',
    backgroundColor: colors.black2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  popupImage: {
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 66,
    resizeMode: 'cover',
    borderColor: colors.yellow1,
    borderWidth: 1,
  },
  header: {
    width: '100%',
    height: 25,
    position: 'absolute',
    margin: 15,
    alignItems: 'flex-end',
  },
  ModalDishName: {
    color: colors.white,
    padding: 2,
    fontWeight: '600',
  },
  ModalInnerDisign: {
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.yellow1,
  },
  ModalPrice: {
    color: colors.white,
    fontSize: 10,
    paddingLeft: 5,
    fontWeight: '400',
  },
  ModalDiscription: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
  },
  headingDiscription: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
  ModalDrink: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
    marginLeft: 4,
  },
  headingAddOns: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
  headingDrinks: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
  ModalAddons: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
  },
  ModalDish: {
    color: colors.white,
    padding: 2,
    fontWeight: '600',
  },
  ModalInstructions: {
    color: colors.white,
    fontSize: 10,
    marginTop: 1,
    marginVertical: 12,
  },
  headingInstructions: {
    color: colors.white,
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
});
