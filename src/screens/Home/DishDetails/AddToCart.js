import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../constants/colorsPallet';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import ResponsiveText from '../../../components/RnText';
import {hp, wp} from '../../../helpers/Responsiveness';
import AddToCartDetails from './AddToCartDetails';
import CheckBox from '../../../components/Static/CheckBox';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../../components/Icon';
import {globalPath} from '../../../constants/globalPath';
import {routeName} from '../../../constants/routeName';
import {
  addCart,
  addDish,
  addOrder,
  AddOrder,
  checkoutOrder,
  getOrders,
} from '../../../redux/actions/user.actions';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import {BarIndicator} from 'react-native-indicators';
import Api from '../../../redux/lib/api';
import urls from '../../../redux/lib/urls';
export default function AddToCart({route, navigation}) {

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  const cartList = useSelector(state => state.appReducers.cartList.data);
  const orderList = useSelector(
    state => state.appReducers.your_ordersList.data,
  );
  //const loading = useSelector(state => state.appReducers.AddOrder.loading);
  // console.log('Add Admin: ', cartList);
  const [vary, setVary] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const [count, changeCount] = useState(1);
  const [Selecteddrinks, setSelecteddrinks] = useState(
    route.params.dish.restaurantSoftDrinksList
      ? route.params.dish.restaurantSoftDrinksList[0]
      : null,
  );
  const [dishPrice, updateDishPrice] = useState(route.params.dish.price);
  const [total, updateTotal] = useState(route.params.dish.price);
  const [extraTotal, setextraTotal] = useState(0);

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [extraCheese, setExtrachess] = useState([]);
  const [linkedItem, setlinkedItem] = useState([]);
  const [SelectedDrinks, setSelectedDrinks] = useState([]);

  const [dish, addDish] = React.useState(route.params.dish);
  React.useEffect(() => {
    // addDish(route.params.dish);
    // var sumoflinedItems = linkedItem.reduce((a, c) => {
    //   return a + c.price;
    // }, 0);
    // console.log(linkedItem.length);
    PriceCalculations();
    // updateTotal(dishPrice * count + extraTotal);

    // extraCheese.length, SelectedDrinks.length,linkedItem.length,
  }, [count,extraCheese.length, SelectedDrinks.length,linkedItem.length,total]);

 
  const Drinks = value => {
    setSelecteddrinks(value);
    console.log('Idddddddddd:', value);
  };

  const PriceCalculations = () => {
    setVary(vary+1)
    var sumofExtra = extraCheese.reduce((a, c) => {
      return c.quantity? a + c.price * c.quantity:0;
    }, 0);
    var sumofDrinks = SelectedDrinks.reduce((a, c) => {
      return c.quantity? a + c.price * c.quantity:0;
    }, 0);
    var sumofUpsize = linkedItem.reduce((a, c) => {

      return c.quantity? a + c.price * c.quantity:0;
    }, 0);
    console.log('linkedItem', linkedItem)
     console.log('sum of extra', sumofExtra);
     console.log('sum of sumofDrinks', sumofDrinks);
     console.log('sum of sumofUpsize', sumofUpsize);

     console.log('setextraTotal', sumofExtra + sumofDrinks + sumofUpsize);
    updateTotal(dishPrice * count + sumofExtra + sumofDrinks+sumofUpsize);
    // setextraTotal(sumofExtra + sumofDrinks + sumofUpsize);
  };
  
  const AddDrinks = (item, index) => {
    dish.restaurantSoftDrinksList[index].quantity = 1;

    if (SelectedDrinks.some(o => o.id === item.id)) {
      setSelectedDrinks(SelectedDrinks.filter(i => i.id !== item.id));
      delete dish.restaurantSoftDrinksList[index].quantity;
      // var sumofDrinks = SelectedDrinks
      //   .filter(i => i.id !== item.id)
      //   .reduce((a, c) => {
      //     return a + (c.price * c.quantity);
      //   }, 0);

      // console.log('removeeee',extraCheese.filter(i => i.id !== item.id));
    } else {
      SelectedDrinks.push(dish.restaurantSoftDrinksList[index]);
      // var sumofDrinks = SelectedDrinks.reduce((a, c) => {
      //   return a + (c.price * c.quantity);
      // }, 0);
    }
    // updateTotal(total + sumofDrinks);
    PriceCalculations();

    console.log('SelectedDrinks', SelectedDrinks);
  };
  const UpdateDrinksQ = (index, type) => {
    if (type == 'inc') {
      //  extraCheese[index].quantity=extraCheese[index].quantity+1;
      dish.restaurantSoftDrinksList[index].quantity =
        dish.restaurantSoftDrinksList[index].quantity + 1;
      addDish(dish);
      // console.log(extraCheese[index].quantity);
    } else if (type == 'dec') {
      // extraCheese[index].quantity=extraCheese[index].quantity>1?extraCheese[index].quantity -1 :1;
      dish.restaurantSoftDrinksList[index].quantity =
        dish.restaurantSoftDrinksList[index].quantity > 1
          ? dish.restaurantSoftDrinksList[index].quantity - 1
          : 1;
    }
    //  var sumofDrinks = SelectedDrinks.reduce((a, c) => {
    //   return a + (c.price * c.quantity);
    // }, 0);
    // updateTotal(total + sumofDrinks);
    PriceCalculations();
  };
  const ExtraChees = (item, index) => {
    //extraCheese.push(item)
    dish.restaurantDishExtraItemList[index].quantity = 1;

    if (extraCheese.some(o => o.id === item.id)) {
      setExtrachess(extraCheese.filter(i => i.id !== item.id));
      delete dish.restaurantDishExtraItemList[index].quantity;
      // var sumofExtra = extraCheese
      //   .filter(i => i.id !== item.id)
      //   .reduce((a, c) => {
      //     return a + (c.price * c.quantity);
      //   }, 0);

      // console.log('removeeee',extraCheese.filter(i => i.id !== item.id));
    } else {
      extraCheese.push(dish.restaurantDishExtraItemList[index]);
      // var sumofExtra = extraCheese.reduce((a, c) => {
      //   return a + (c.price * c.quantity);
      // }, 0);
    }
    // updateTotal(total + sumofExtra);
    PriceCalculations();

    // console.log('Extraaaaaaa', sumofExtra);
  };
  const UpdateExtra = (index, type) => {
    if (type == 'inc') {
      //  extraCheese[index].quantity=extraCheese[index].quantity+1;
      dish.restaurantDishExtraItemList[index].quantity =
        dish.restaurantDishExtraItemList[index].quantity + 1;
      addDish(dish);
      // console.log(extraCheese[index].quantity);
    } else if (type == 'dec') {
      // extraCheese[index].quantity=extraCheese[index].quantity>1?extraCheese[index].quantity -1 :1;
      dish.restaurantDishExtraItemList[index].quantity =
        dish.restaurantDishExtraItemList[index].quantity > 1
          ? dish.restaurantDishExtraItemList[index].quantity - 1
          : 1;
    }
    //  var sumofExtra = extraCheese.reduce((a, c) => {
    //   return a + (c.price * c.quantity);
    // }, 0);
    // updateTotal(total + sumofExtra);
    PriceCalculations();
  };
  const LinkedItem = (item, index) => {
    //extraCheese.push(item)
    // if (linkedItem.some(o => o.dishLinkedItemo === item.dishLinkedItemId)) {
    //   setlinkedItem(
    //     linkedItem.filter(i => i.dishLinkedItemId !== item.dishLinkedItemId),
    //   );
    // } else {
    //   linkedItem.push(item);
    // }
    // console.log('after', linkedItem);
    dish.restaurantDishLinkedItemList[index].quantity = 1;

    if (linkedItem.some(o => o.id === item.id)) {
      setlinkedItem(linkedItem.filter(i => i.id !== item.id));
      delete dish.restaurantDishLinkedItemList[index].quantity;
      // var sumofExtra = extraCheese
      //   .filter(i => i.id !== item.id)
      //   .reduce((a, c) => {
      //     return a + (c.price * c.quantity);
      //   }, 0);

      console.log('removeeee restaurantDishLinkedItemList',linkedItem.filter(i => i.id !== item.id));
    } else {
      linkedItem.push(dish.restaurantDishLinkedItemList[index]);
      // var sumofExtra = extraCheese.reduce((a, c) => {
      //   return a + (c.price * c.quantity);
      // }, 0);
    console.log('add restaurantDishLinkedItemList', linkedItem);

    }
    console.log('after', linkedItem);

    PriceCalculations();
  };
  const updateLinkedItem = (index, type) => {
    //extraCheese.push(item)
    // if (linkedItem.some(o => o.dishLinkedItemo === item.dishLinkedItemId)) {
    //   setlinkedItem(
    //     linkedItem.filter(i => i.dishLinkedItemId !== item.dishLinkedItemId),
    //   );
    // } else {
    //   linkedItem.push(item);
    // }
    // console.log('after', linkedItem);

    if (type == 'inc') {
      //  extraCheese[index].quantity=extraCheese[index].quantity+1;
      dish.restaurantDishLinkedItemList[index].quantity =
        dish.restaurantDishLinkedItemList[index].quantity + 1;
      addDish(dish);
      // console.log(extraCheese[index].quantity);
    } else if (type == 'dec') {
      // extraCheese[index].quantity=extraCheese[index].quantity>1?extraCheese[index].quantity -1 :1;
      dish.restaurantDishLinkedItemList[index].quantity =
        dish.restaurantDishLinkedItemList[index].quantity > 1
          ? dish.restaurantDishLinkedItemList[index].quantity - 1
          : 1;
    }
    //  var sumofExtra = extraCheese.reduce((a, c) => {
    //   return a + (c.price * c.quantity);
    // }, 0);
    // updateTotal(total + sumofExtra);
    PriceCalculations();
  };
  const AddToCart = () => {
    const data = {
      ...dish,
      quantity: count,
      totalPrice: total,
      selectedDrink: Selecteddrinks,
      extraCheeses: extraCheese,
      linkItems: linkedItem,
    };
    dispatch(addCart(data));
    navigation.navigate(routeName.LANDING_SCREEN);
    //console.log("obj: ",Date);

    // Cart_Details.includes(dish) ? undefined : Cart_Details.push(dish);
    // SharedData.setData(dish);
  };
  const submitOrder = async () => {
    var userId = await AsyncStorage.getItem('@userId');
    var checkData = orderList.find(
      o =>
        o.statusName === 'PreOrder' &&
        o.restaurantBranchId === dish.restaurantBranchId,
    );
    console.log('filter    nnnn', checkData);
  
    // console.log('filter    orderList', orderList);
    // console.log('filter    dish', dish);

    const addOrderDetail = [];
    const orderDetailExtraItemList = [];
    const orderDetailLinkedItemList = [];
    const DrinksList = [];
    if (SelectedDrinks.length > 0) {
      SelectedDrinks.forEach(e => {
        DrinksList.push({
          RestaurantDishSoftDrinkId: e.id,
          price: e.price,
          quantity: e.quantity,
        });
      });
    }
    // cartList.forEach(obj => {
    // if (obj.restaurantBranchId === BrachId) {
    if (extraCheese.length > 0) {
      extraCheese.forEach(e => {
        orderDetailExtraItemList.push({
          restaurantDishExtraItemId: e.id,
          price: e.price,
          quantity: e.quantity,
        });
      });
    }
    if (linkedItem.length > 0) {
      linkedItem.forEach(e => {
        orderDetailLinkedItemList.push({
          restaurantDishLinkedItemId: e.id,
          price: e.price,
          quantity: e.quantity,
        });
      });
    }
    addOrderDetail.push({
      restaurantDishId: dish.restaurantDishId,
      // addOnId: Selecteddrinks ? Selecteddrinks.softDrinkId : 1,
      quantity: count,
      RestaurantSoftDrinkId: 5,
      // RestaurantSoftDrinkId:Selecteddrinks ? Selecteddrinks.softDrinkId : 1,
      Price: dish.price,
      dishPrice: dish.price,
      orderDetailExtraItemList: orderDetailExtraItemList,
      orderDetailLinkedItemList: orderDetailLinkedItemList,
      OrderDetailSoftDrinkList: DrinksList,
    });

    // }
    // });
    const obj = {
      id: checkData ? checkData.id : 0,
      customerId: userId,
      statusType: 1,
      orderStatus: 1,
      ActionMode: checkData ? 2 : 1,
      // couponNo: 'NO',
      orderPlacedfrom: 'Application',
      remarks: text,
      restaurantBranchId: dish.restaurantBranchId,
      amount: total,
      addOrderDetail: addOrderDetail,
      // orderDetailExtraItemList: orderDetailExtraItemList,
      // orderDetailLinkedItemList: orderDetailLinkedItemList,
    };
    console.log('objjjjjjjjjjjj,obj', obj);
    var response = null;

    try {
      setLoading(true);
      if (obj.ActionMode == 1) {
        response = await Api.post(urls.ADD_ORDER, obj, false);
        // console.log(response, 'post cart resssssss');
      } else {
        response = await Api.put(urls.UPDATE_ORDER + obj.id, obj, false);
      }
      console.log('res', response);
      if (response && response.success == true) {
        dispatch(getOrders());
        navigation.navigate(routeName.LANDING_SCREEN);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    // if(checkData.addOrderDetail.some(o =>o.restaurantDishId === dish.id)){
    //   //var checkDish=checkData.addOrderDetail.some(o =>o.restaurantDishId === dish.id)
    //   console.log('okoko');
    // //   if(checkData.addOrderDetail.indexOf(dish.id) !== -1){
    // //     alert("Value exists!")
    // // } else{
    // //     alert("Value does not exists!")
    // // }
    // //.some(elem => elem === obj)
    // }
    // dispatch(addOrder(obj, navigation));
    //navigation.navigate(routeName.TRANSACTION_CONFIRMATION)
    //
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={[styles.container,{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}]}>
        {loading === true ? (
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
        <View>
          <View style={styles.headerImage}>
            <ImageHeader
              navigation={navigation}
              img={route.params.dish.imageDataB}
            />
          </View>
          <View style={{padding: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>
                {route.params.dish.dishName}
              </ResponsiveText>
              <ResponsiveText color={colors.yellow}>
                {' '}
                ${route.params.dish.price}
              </ResponsiveText>
            </View>
            <ResponsiveText color={colors.grey1}>
              {route.params.dish.description}
            </ResponsiveText>
          </View>
          <AddToCartDetails
            data={dish}
            ExtraChees={ExtraChees}
            SelectedDrinks={Drinks}
            UpdateExtra={UpdateExtra}
            AddDrinks={AddDrinks}
            UpdateDrinksQ={UpdateDrinksQ}
          />
          {route.params.dish.restaurantDishLinkedItemList?.length > 0 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: colors.black2,
                padding: 5,
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>{'Upsize'}</ResponsiveText>
              <ResponsiveText color={isThemeDark ?  colors.white: colors.black}>{'Optional'}</ResponsiveText>
            </View>
          ) : undefined}
          <View style={{padding: 20}}>
            {Object.keys(route.params.dish).length != 0 &&
            route.params.dish.restaurantDishLinkedItemList
              ? route.params.dish.restaurantDishLinkedItemList.map(
                  (item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        <CheckBox
                          text={item.dishLinkedItemName}
                          additem={LinkedItem}
                          value={item}
                          index={index}
                        />
                        <View style={{flexDirection: 'row'}}>
                          <ResponsiveText color={isThemeDark ?  colors.white: colors.black} margin={[0, 10]}>
                            $
                            {item.quantity
                              ? item.price * item.quantity
                              : item.price}
                          </ResponsiveText>
                          {item.quantity ? (
                            <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity
                                onPress={() => {
                                  updateLinkedItem(index, 'dec');
                                  // setCheeseCount(CheeseCount > 1 ? CheeseCount - 1 : 1);
                                }}>
                                <Icon
                                  size={28}
                                  source={globalPath.MINUS_ICON}
                                />
                              </TouchableOpacity>
                              <ResponsiveText
                                size={5}
                                margin={[0, 10]}
                                color={isThemeDark ?  colors.white: colors.black}>
                                {item.quantity}
                              </ResponsiveText>
                              <TouchableOpacity
                                onPress={() => {
                                  updateLinkedItem(index, 'inc');
                                  //  setCheeseCount(CheeseCount + 1);
                                }}>
                                <Icon size={28} source={globalPath.PLUS_ICON} />
                              </TouchableOpacity>
                            </View>
                          ) : null}
                        </View>
                      </View>
                    );
                  },
                )
              : null}
            {/* // (loading == false ?
              //   <View style={{ width: wp(100), marginTop: 100, alignItems: 'center', alignSelf: 'center' }}>
              //     <Icon borderColor={colors.yellow} borderWidth={0} borderRadius={0} size={250} source={require('../../../components/../assets/icons/norecordfound.png')} />
              //   </View> : null
              // ) */}
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <TouchableOpacity
            // onPress={() => setVisible(!visible)}
            >
              <Icon source={globalPath.PLUS_ICON} />
            </TouchableOpacity>
            <ResponsiveText color={isThemeDark ?  colors.white: colors.black} margin={[0, 0, 0, 10]}>
              Add Special Instruction
            </ResponsiveText>
          </View>

          <View
            style={{
              margin: 5,
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{
                height: 70,
                borderWidth: 0.5,
                borderRadius: 3,
                paddingHorizontal: 15,
                borderColor: color.black2,
                alignContent: 'center',
                backgroundColor: isThemeDark ? colors.black2 : colors.white,
                color: isThemeDark ?  colors.white: colors.black,
              }}
              placeholderTextColor={isThemeDark ? undefined : colors.grey}
              textAlignVertical="top"
              multiline={true}
              placeholder="Instructions..."
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
          </View>
        </View>

        <View
          style={{flexDirection: 'row', height: hp(9), position: 'relative'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: isThemeDark ? colors.black1 : colors.white,
              width: wp(62),
              padding: 16,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => changeCount(count > 1 ? count - 1 : 1)}>
                <Icon size={28} source={globalPath.MINUS_ICON} />
              </TouchableOpacity>
              <ResponsiveText size={5} margin={[0, 10]} color={isThemeDark ?  colors.white: colors.black}>
                {count}
              </ResponsiveText>
              <TouchableOpacity onPress={() => changeCount(count + 1)}>
                <Icon size={28} source={globalPath.PLUS_ICON} />
              </TouchableOpacity>
            </View>
            <ResponsiveText size={5} color={isThemeDark ?  colors.white: colors.black}>
              ${parseFloat(total).toFixed(2)}
            </ResponsiveText>
          </View>
          <View style={{padding: 16, backgroundColor: isThemeDark ? colors.black1 : colors.white}}>
            <TouchableOpacity
              style={{
                height: hp(4),
                width: wp(30),
                backgroundColor: colors.yellow,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
              }}
              onPress={() => {
                submitOrder();
                // console.log("Data: ",data);
                //             SharedData.setData(dish);
                //             console.log(SharedData.data);
                //             navigation.navigate(routeName.LANDING_SCREEN)
              }}>
              <ResponsiveText> Add to cart</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black3,
  },
  headerImage: {
    height: 200,
  },
});
