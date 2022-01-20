import React, { useEffect } from 'react';
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
  ScrollView,
} from 'react-native';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import { colors } from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import { hp, wp } from '../../../../helpers/Responsiveness';
import Header from '../../../../components/Header';
import { Cart_Details } from '../../../../constants/mock';
import TransactionConfirmation from '../../DishDetails/TransactionConfirmation';
import { routeName } from '../../../../constants/routeName';
import { set } from 'react-native-reanimated';
import SharedData from './SharedData';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeCart,
  addCart,
  retriveCart,
} from '../../../../redux/actions/user.actions';
import AsyncStorage from '@react-native-community/async-storage';
import urls from '../../../../redux/lib/urls';

const CartDetails = ({ navigation }) => {
  const cartList = useSelector(state => state.appReducers.cartList.data);
  const dispatch = useDispatch();
  const [selectedItem, SetSelectedItem] = React.useState(null);
  const [random, setRandom] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState();
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  React.useEffect(async () => {
    const item = await AsyncStorage.getItem('cartData');
    console.log(JSON.parse(item), 'cart dataataaaaaaa');
    if (item != null) {
      dispatch(retriveCart(JSON.parse(item)));
    }
  }, []);

  React.useEffect(async () => {
    setRandom(SharedData.state.data);
    let sum = cartList.reduce((a, c) => {
      return a + c.price * c.quantity;
    }, 0);
    setTotalPrice(sum);
    console.log('sum: ', sum);
    console.log('cart data........', cartList);
  }, [random]);

  const onItemRemove = (data, position) => {
    dispatch(removeCart(data));
  };

  const onItemIncrease = (index, quantity) => {
    cartList[index].quantity = cartList[index].quantity + 1;
    console.log('quantity', cartList);
    setRandom(cartList);
    dispatch(retriveCart(cartList));

  };

  const onItemDecrease = (index, item) => {
    cartList[index].quantity =
      cartList[index].quantity > 1
        ? cartList[index].quantity - 1
        : cartList[index].quantity;

    console.log('quantity', cartList);
    setRandom(cartList);
    dispatch(retriveCart(cartList));

  };
  const ModalPoup = ({ visible, children }) => {
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
            style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{ backgroundColor: colors.black3, flex: 1 }}>
      <ModalPoup visible={visible} >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require('../../../../assets/fake_Images/cross.png')}
              style={{ height: 22, width: 22 }}
            />
          </TouchableOpacity>
        </View>

        {selectedItem !== null ?
          <View style={{ flexDirection: 'row' }}>

            <Image
              source={{ uri: selectedItem.imageDataB }}
              style={styles.popupImage}
            />

            <View style={{ flexDirection: 'column', marginLeft: 5, }}>
              <Text style={styles.ModalDish}>
                {selectedItem.cusineName}
              </Text>
              <Text style={styles.ModalPrice}>
                $ 235
              </Text>
            </View>
          </View>
          : undefined}
        <View style={styles.ModalInnerDisign}>

          <Text style={styles.ModalDiscription}>
            Description : The ingredients. Place the main ingredients of
            the dish first, starting with the most expensive and important ingredients
          </Text>
          <Text style={styles.ModalDrink}>
            Soft Drink : Sprite & coke
          </Text>

          <Text style={{ color: colors.white, fontSize: 10, marginTop: 4 }}>
            Extra Cheese : yes
          </Text>
          <Text style={styles.ModalAddons}>
            Add ons : Corn on the cob
          </Text>

          <Text style={styles.ModalInstructions}>
            Instructions : dried chilli flakes, to taste and  desiccated coconut
          </Text>
        </View>
        {/* <View>
          <TouchableOpacity style={styles.signin}>

            <Text style={{
              backgroundColor: colors.yellow1, borderRadius: 20, marginVertical: 10, paddingVertical: 5
              , textAlign: 'center'
            }}>
              Edit Order
            </Text>

          </TouchableOpacity>
        </View> */}
      </ModalPoup >
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black2,
        }}>
        <Header navigation={navigation} />
      </View>

      <View style={{ flex: 0.9, justifyContent: 'space-between' }}>
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
                        source={{ uri: item.imageDataB }}
                      />
                    </View>
                    <TouchableOpacity onPress={() => { setVisible(true); SetSelectedItem(item) }}>
                      <View style={{ justifyContent: 'center', width: wp(60) }}>
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
                    </TouchableOpacity>

                    <View style={{ marginLeft: -15 }}>
                      <TouchableOpacity
                        onPress={() => {
                          onItemDecrease(index, item);
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
                          onItemIncrease(index, item.quantity);
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
                    <View style={{ marginLeft: 15, marginTop: 15 }}>
                      <TouchableOpacity
                        onPress={() => {

                          Alert.alert(
                            "",
                            "Do you want to remove this item from cart ?",
                            [
                              {
                                text: "Cancel",
                                onPress: () => { },
                                style: "cancel"
                              },
                              {
                                text: "OK", onPress: () => {
                                  onItemRemove(item, index)
                                }
                              }
                            ]
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
                  ${' '}
                  {cartList.reduce((a, c) => {
                    return a + c.price * c.quantity;
                  }, 0) + 6}
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
      </View >
      <View style={styles.centeredView}>
      </View>
    </View >
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
    height: '35%',
    backgroundColor: colors.black2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  popupImage: {
    height: 50, width: 50, marginVertical: 0,
    borderRadius: 66,
    resizeMode: 'cover',
    borderColor: colors.yellow1, borderWidth: 1
  },
  header: {
    width: '100%',
    height: 25,
    position: 'absolute',
    margin: 15,
    alignItems: 'flex-end',
  },
  ModalDishName: {
    color: colors.white, padding: 2, fontWeight: '600'
  },
  ModalInnerDisign: {
    marginTop: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.yellow1
  },
  ModalPrice: {
    color: colors.white, fontSize: 10, paddingLeft: 5, fontWeight: '400'
  },
  ModalDiscription: {
    color: colors.white, fontSize: 10, marginTop: 4
  },
  ModalDrink: {
    color: colors.white, fontSize: 10, marginTop: 4
  },
  ModalAddons: {
    color: colors.white, fontSize: 10, marginTop: 4
  },
  ModalDish: {
    color: colors.white, padding: 2, fontWeight: '600'
  },
  ModalInstructions: {
    color: colors.white, fontSize: 10, marginTop: 4, marginVertical: 12
  }
})