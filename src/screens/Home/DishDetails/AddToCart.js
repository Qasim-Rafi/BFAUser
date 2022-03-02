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
} from '../../../redux/actions/user.actions';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
export default function AddToCart({route, navigation}) {
  const cartList = useSelector(state => state.appReducers.cartList.data);
  const orderList = useSelector(
    state => state.appReducers.your_ordersList.data,
  );
  const loading = useSelector(state => state.appReducers.cartList.loading);
  // console.log('Add Admin: ', cartList);
  const [visible, setVisible] = React.useState(false);
  const [count, changeCount] = useState(1);
  const [Selecteddrinks, setSelecteddrinks] = useState(
    route.params.dish.restaurantSoftDrinksList
      ? route.params.dish.restaurantSoftDrinksList[0]
      : null,
  );
  const [dishPrice, updateDishPrice] = useState(route.params.dish.price);
  const [total, updateTotal] = useState(0);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [extraCheese, setExtrachess] = useState([]);
  const [linkedItem, setlinkedItem] = useState([]);

  const [dish, addDish] = React.useState(route.params.dish);
  React.useEffect(() => {
    // addDish(route.params.dish);
    // var sumoflinedItems = linkedItem.reduce((a, c) => {
    //   return a + c.price;
    // }, 0);
    var sumofExtra = extraCheese.reduce((a, c) => {
      return a + c.price;
    }, 0);

    updateTotal(dishPrice * count + sumofExtra);
  }, [count]);
  const Drinks = value => {
    setSelecteddrinks(value);
    console.log('Idddddddddd:', value);
  };

  // const data = () => [{
  //   "id": 0,
  //   customerId: 10,
  //   status: 1,
  //   orderStatus: 1,
  //   couponNo: "superior",
  //   orderPlacedfrom: "karachi",
  //   dishId: 26,
  //   remarks: "Good"
  //   // title : "Fish Crackers",
  //   // description: "lorem ipsum dolor sit amet, consectetur adipis",
  //   // quantity: 8,
  //   // price: '8.00',
  //   // url: require('../../../assets/fake_Images/cart-1.png'),
  // }];
  const ExtraChees = (item, index) => {
    //extraCheese.push(item)
    if (extraCheese.some(o => o.id === item.id)) {
      setExtrachess(extraCheese.filter(i => i.id !== item.id));
      var sumofExtra = extraCheese
        .filter(i => i.id !== item.id)
        .reduce((a, c) => {
          return a + c.price;
        }, 0);

      // console.log('removeeee',extraCheese.filter(i => i.id !== item.id));
    } else {
      extraCheese.push(item);
      var sumofExtra = extraCheese.reduce((a, c) => {
        return a + c.price;
      }, 0);
    }
    console.log('Extraaaaaaa', extraCheese);
    updateTotal(dishPrice * count + sumofExtra);
  };

  const LinkedItem = (item, index) => {
    //extraCheese.push(item)
    if (linkedItem.some(o => o.dishLinkedItemo === item.dishLinkedItemId)) {
      setlinkedItem(
        linkedItem.filter(i => i.dishLinkedItemId !== item.dishLinkedItemId),
      );
    } else {
      linkedItem.push(item);
    }
    console.log('after', linkedItem);
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
        o.statusName === "PreOrder" &&
        o.restaurantBranchId === dish.restaurantBranchId,
    );
     console.log('filter    nnnn', checkData);
    // console.log('filter    orderList', orderList);
    // console.log('filter    dish', dish);

    const addOrderDetail = [];
    const orderDetailExtraItemList = [];
    const orderDetailLinkedItemList = [];
    // cartList.forEach(obj => {
    // if (obj.restaurantBranchId === BrachId) {
      if (extraCheese.length > 0) {
        extraCheese.forEach(e => {
          orderDetailExtraItemList.push({
            restaurantDishExtraItemId: e.id,
          });
        });
      }
      if (linkedItem.length > 0) {
        linkedItem.forEach(e => {
          orderDetailLinkedItemList.push({
            restaurantDishLinkedItemId: e.id,
          });
        });
      }
    addOrderDetail.push({
      restaurantDishId: dish.restaurantDishId,
      addOnId: Selecteddrinks ? Selecteddrinks.softDrinkId : 1,
      quantity: count,
      RestaurantSoftDrinkId: 5,
      // RestaurantSoftDrinkId:Selecteddrinks ? Selecteddrinks.softDrinkId : 1,
      Price: total,
      orderDetailExtraItemList: orderDetailExtraItemList,
      orderDetailLinkedItemList: orderDetailLinkedItemList,
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
     dispatch(addOrder(obj,navigation));
    //navigation.navigate(routeName.TRANSACTION_CONFIRMATION)
    //
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
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
              <ResponsiveText color={colors.white}>
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
            data={route.params.dish}
            ExtraChees={ExtraChees}
            SelectedDrinks={Drinks}
          />
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
            <ResponsiveText color={colors.white}>{'Upsize'}</ResponsiveText>
            <ResponsiveText color={colors.white}>{'Optional'}</ResponsiveText>
          </View>

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
                        />
                        {/* <ResponsiveText color={colors.white}>
                          ${item.price}
                        </ResponsiveText> */}
                      </View>
                    );
                  },
                )
              : null}
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <TouchableOpacity
            // onPress={() => setVisible(!visible)}
            >
              <Icon source={globalPath.PLUS_ICON} />
            </TouchableOpacity>
            <ResponsiveText color={colors.white} margin={[0, 0, 0, 10]}>
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
                borderWidth: 2,
                borderRadius: 3,
                paddingHorizontal: 15,
                borderColor: color.black2,
                alignContent: 'center',
                backgroundColor: colors.black2,
              }}
              textAlignVertical="top"
              multiline={true}
              placeholder="Instructions..."
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', height: hp(9)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.black1,
              width: wp(62),
              padding: 16,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => changeCount(count > 1 ? count - 1 : 1)}>
                <Icon size={28} source={globalPath.MINUS_ICON} />
              </TouchableOpacity>
              <ResponsiveText size={5} margin={[0, 10]} color={colors.white}>
                {count}
              </ResponsiveText>
              <TouchableOpacity onPress={() => changeCount(count + 1)}>
                <Icon size={28} source={globalPath.PLUS_ICON} />
              </TouchableOpacity>
            </View>
            <ResponsiveText size={5} color={colors.white}>
              ${total}.00
            </ResponsiveText>
          </View>
          <View style={{padding: 16, backgroundColor: colors.black1}}>
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
