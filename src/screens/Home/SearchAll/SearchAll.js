import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import Api from '../../../redux/lib/api';
import urls from '../../../redux/lib/urls';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import SearchDropDown from '../../../components/Basics/Searchdropdown';
import AutocompleteInput from 'react-native-autocomplete-input';
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RnText';
import {GetAreaAllListAction, GetPremiseAllListAction, SearchResult} from '../../../redux/actions/user.actions';
import {colors} from '../../../constants/colorsPallet';
import {hp, wp} from '../../../helpers/Responsiveness';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {
  advertisementBannerFakeDATA,
  AwardsMenuSectionsData,
  CUISINES_DATA,
  FacilityData,
  ourRecommendationFakeDATA,
  Search_Result,
  DISH_TAG,
  OTHERS_DATA,
} from '../../../constants/mock';
import { Rating } from 'react-native-ratings';
import Icon from '../../../components/Icon';
import { globalPath } from '../../../constants/globalPath';
import { myListingTabs } from '../../../constants/mock';
import { useDispatch, useSelector } from 'react-redux';

import { routeName } from '../../../constants/routeName';
import SearchHeader from '../../../components/SearchHeader';
import Modal from 'react-native-modal';
import { FiltersDummyData } from '../../../constants/mock';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator } from 'react-native-paper';
import DropDown from '../../../components/DropDown';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function SearchAll({ navigation }) {
  const data = ['Amauat', 'Salmon', 'Chicken Teryaki', 'Spicy Chicken', 'Lamp Shank Biryani,Amauat', 'Salmon', 'Chicken Teryaki', 'Spicy Chicken', 'Lamp Shank Biryani']
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(SearchResult());
  // }, []);


  const DATA = useSelector(state => state.appReducers.SearchResult.data);
  const Loading = useSelector(state => state.appReducers.SearchResult.loading);
  console.log('searching', DATA);
  const [SearchText, setSearchText] = React.useState('');
  const [Note, setNote] = React.useState('');

  // MOCK_DATA 
  const DISH_TYPE = ['Drinks', 'Side Dish', 'Main Dish', 'Dessert']
  const RESTAURANT_TYPE = ['Café','Fast Food', 'Food Court', 'Home Based', 'Restaurant', 'Stalls']
  const OCCASION = ['Birthdays','Business','Casual' ,'Fine Dining','High Tea','Large Groups','Outdoor Dining','Romantic','Quick Bites','Budget','Dinner', 'Lunch']
  const WIFI = ['Standard Wi-Fi (Up to 50Mbps)','High Speed Wi-Fi (Up to 300 Mbps)']
  const PRIVATE_ROOM = ['Private room - Up to 12','Private room - Up to 24']
  const GROUP_TABLE = ['Group Table - Table for 10', 'Group Table - Table for 12', 'Group Table - Table for 6', 'Group Table - Table for 8']
  const PRAYER_ROOM = ['Prayer room - Group', 'Prayer room - Single']
  const AWARDS = ['Best Dish Awards', 'Top 10 Dish Awards', 'Best Participating Dish Awards', 'Lifetime Achievement Awards', 'Best Restaurant Awards', 'Best Catering Awards', 'Best Barista Awards', 'Best Chef Awards']
  const STAR_RATINGS = [5,4,3,2,1,'No ratings']


  React.useEffect(() => {
    // dispatch(SearchResult());

    areaList.length  > -1 ? dispatch(GetAreaAllListAction()) : null
    premiseList.length > -1 ? dispatch(GetPremiseAllListAction()) : null

  }, []);
  
  const DATA = useSelector(state => state.appReducers.SearchResult.data);
  const Loading = useSelector(state => state.appReducers.SearchResult.loading);
  console.log('searching', DATA);

    const districtList = ['Brunei Muara', 'Belait', 'Tutong', 'Temburong']
    const areaList = useSelector(state => state.appReducers.AllAreas.data)
    const premiseList = useSelector(state => state.appReducers.AllPremises.data)
    


    

  const [searchBar, toggleSearchBar] = React.useState('false');
  const [SearchText, setSearchText] = React.useState('');
  const [Note, setNote] = React.useState('');
  const [itemList, setItemList] = React.useState([]);
  const toggleSelection =(item)=>{
    if(itemList.includes(item)){
      const newArray = itemList.filter((item1)=>{
        return item!==item1
     });
     setItemList(newArray);
    }
    else
    {
      itemList.length<5 ? setItemList([...itemList, item]) : undefined
    }
  }

  const [selected, setSelected] = React.useState('Dishes');
  const [filtered, setFiltered] = useState(data)
  const [searching, setSearching] = useState(false)
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [dataFiltersDummyData, setFiltersDummyData] = React.useState();
  const [SuggestionData, setSuggestionData] = React.useState([]);



  const GetSuggestionData = async rest => {
    try {
      const res = await Api.get(selected==='Dishes'?'api/RestaurantDish/SuggestionHomeDashboard?DishName='+rest:'api/RestaurantDish/SuggestionHomeDashboard?RestaurentName='+rest);
      console.log('GetLookUpMarriageStatus', res);
      if (res && res.success == true) {
        setSuggestionData(res.data)
      } else {
        setSuggestionData([])
      }
    } catch (error) { }
  };
  const Search = (text) => {
    console.log(text);
    if (text < 3) {
      setNote('Please type atleast 3 characters');
    } else {
      dispatch(SearchResult(text.toLowerCase(), selected));
      setNote(`Now showing dish result for "${text}"`);
      setSuggestionData([])
      setSearching(false)


    }
  };
  const onSearch = (text) => {
    setSearchText(text);

    console.log(text);
    if (text < 3) {
      setNote('Please type atleast 3 characters');
    } else {
      // dispatch(SearchResult(SearchText.toLowerCase(), selected));
      setNote(`Now showing dish result for "${SearchText}"`);
    console.log('text');

      GetSuggestionData(text);

    }
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = data.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(data)
    }

  }
  const onPressHandler = (item, index, i) => {
    // setSelectItem({selectedItem: item});
    console.log(index, 'onpreeeeeee');
    dataFiltersDummyData[0].data[index].select =
      !dataFiltersDummyData[0].data[index].select;
    setFiltersDummyData(dataFiltersDummyData);
  };
  const onSelect = (chindex, value) => {
    // setSelectItem({selectedItem: item});
    console.log('butttonn', value);
    setSelected(value);
    // return check;
  };
  const onChangeSearchText = Text => {
    setSearchText(Text);
    if (Text.length >= 3) {
      setNote('');
    } else {
      setNote('Please type atleast 3 characters');
    }
  };
  const renderItem = (item, index, i) => {
    return (
      <TouchableOpacity
        onPress={() => onPressHandler(item.select, index, i)}
        style={{
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: item.select ? colors.yellow : colors.black3,
          marginHorizontal: 10,
          padding: 10,
          marginTop: 10,
          borderColor: colors.grey1,
          borderWidth: 0.5,
        }}>
        <ResponsiveText color={colors.white} fontFamily={'regular'}>
          {item.name}
          <ResponsiveText color={colors.yellow}>({item.value})</ResponsiveText>
        </ResponsiveText>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.black3 }}>
      <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginRight: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
        <TextInput
         style={{
          height: hp(6),
          width: wp(73),
          backgroundColor: colors.black1,
          borderRadius: wp(4),
          padding: wp(4),
          color: colors.white,
        }}
        editable={true}
        fontSize={11}
        placeholderTextColor={colors.grey}
        placeholder={'Search....'}
        onChangeText={text =>onSearch(text)}

      />
    
        {/* <TouchableOpacity
          onPress={() => {
            Search();
          }}>
          <Icon
            source={globalPath.SEARCH_LOGO}
            size={25}
            margin={[0, 0, 0, 10]}
          />
        </TouchableOpacity> */}
      
      </View>
      {
        searching &&
        <SearchDropDown
          onPress={() => setSearching(false)}
          onSearch={Search}
          data={SuggestionData} />
      }
      <View style={{ marginHorizontal: wp(3) }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
          <RadioGroup
            color={colors.yellow}
            style={{ flex: 1, flexDirection: 'row' }}
            onSelect={(index, value) => onSelect(index, value)}
            selectedIndex={0}>
            <RadioButton value={'Dishes'} style={{ marginStart: 1 }}>
              <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>
                Dishes{' '}
              </ResponsiveText>
            </RadioButton>

            <RadioButton value={'Restaurants'} style={{ marginStart: 10 }}>
              <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>
                Restaurants{' '}
              </ResponsiveText>
            </RadioButton>
          </RadioGroup>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row' }}>
            <Icon
              source={globalPath.PREFERANCES}
              size={20}
              margin={[0, 0, 0, 10]}
            />
            <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>
              Filter{' '}
            </ResponsiveText>
          </TouchableOpacity>

        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.9}
        style={{justifyContent: 'flex-end'}}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        // onModalHide={()=>navigation.navigate(routeName.LANDING_SCREEN)}
        coverScreen={true}>
        <SafeAreaView
          style={{flex: 1, marginLeft: wp(8), backgroundColor: colors.black3}}>
        
          <ScrollView>
          <View
            style={{
              //flex: 0.1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: colors.black2,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                borderRadius: 5,
                marginLeft: 5,
                padding: 10,
                backgroundColor: colors.black1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon size={20} source={require('../../../assets/icons/x.png')} />
            </TouchableOpacity>

            <ResponsiveText color={colors.white} size={4}>
              Filter By
            </ResponsiveText>
            <TouchableOpacity
              // onPress={toggleModal}
              style={{
                paddingVertical: 8,
                marginRight: -50,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: colors.yellow,
              }}>
              <ResponsiveText color={colors.black} size={3.4}>
                Reset
              </ResponsiveText>
            </TouchableOpacity>
            <Icon />
          </View>
            <View  style={{padding: wp(5)}}>
            <ResponsiveText margin={[5, 0, 2, 0]} color={colors.yellow}>
              District
            </ResponsiveText>
            <DropDown data={districtList} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Area
            </ResponsiveText>
            <DropDown data={areaList.map(e=>e.name)} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Premise
            </ResponsiveText>
            <DropDown data={premiseList.map(e=>e.name)} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 5, 0]} color={colors.yellow}>
              Cuisine
            </ResponsiveText>
            <View
              style={{
                flexDirection: 'row',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingHorizontal: 0,
                flexWrap: 'wrap',
                // alignContent: 'center',
                paddingTop: hp(1),
                borderTopWidth: 0.3,
                borderTopColor: colors.white,
              }}>
              {CUISINES_DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                  // onPress={()=>toggleSelection(item)}
                  >
                    <View
                      style={{
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.black2,
                        marginHorizontal: 5,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                      }}>
                      <Text style={{fontSize: 10, color: colors.white}}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            
            <ResponsiveText margin={[25, 0, 2, 0]} color={colors.yellow}>
              Dish Type
            </ResponsiveText>
            <DropDown data={DISH_TYPE} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Dish Tag
            </ResponsiveText>
            <DropDown data={DISH_TAG}height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Restaurant Type
            </ResponsiveText>
            <DropDown data={RESTAURANT_TYPE}height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Occasion
            </ResponsiveText>
            <DropDown data={OCCASION}height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 5, 0]} color={colors.yellow}>
              Facilities
            </ResponsiveText>
            <View
              style={{
                flexDirection: 'row',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingHorizontal: 0,
                flexWrap: 'wrap',
                // alignContent: 'center',
                paddingTop: hp(1),
                borderTopWidth: 0.3,
                borderTopColor: colors.white,
              }}>
              {FacilityData.map((item, index) => {
                return (
                  <TouchableOpacity
                  // onPress={()=>toggleSelection(item)}
                  >
                    <View
                      style={{
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.black2,
                        marginHorizontal: 5,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                      }}>
                      <Text style={{fontSize: 10, color: colors.white}}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ResponsiveText margin={[25, 0, 2, 0]} color={colors.yellow}>
              Wi-Fi
            </ResponsiveText>
            <DropDown data={WIFI} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Private Room
            </ResponsiveText>
            <DropDown data={PRIVATE_ROOM} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Group Table
            </ResponsiveText>
            <DropDown data={GROUP_TABLE} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Prayer Room
            </ResponsiveText>
            <DropDown data={PRAYER_ROOM} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 5, 0]} color={colors.yellow}>
              Awards
            </ResponsiveText>
            <View
              style={{
                flexDirection: 'row',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingHorizontal: 0,
                flexWrap: 'wrap',
                // alignContent: 'center',
                paddingTop: hp(1),
                borderTopWidth: 0.3,
                borderTopColor: colors.white,
              }}>
              {AWARDS.map((item, index) => {
                return (
                  <TouchableOpacity
                  // onPress={()=>toggleSelection(item)}
                  >
                    <View
                      style={{
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.black2,
                        marginHorizontal: 5,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                      }}>
                      <Text style={{fontSize: 10, color: colors.white}}>
                        {item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ResponsiveText margin={[25, 0, 2, 0]} color={colors.yellow}>
              By Star Rating
            </ResponsiveText>
            <DropDown data={STAR_RATINGS} height={hp(5)} width={wp(73)} />
            <ResponsiveText margin={[10, 0, 2, 0]} color={colors.yellow}>
              Preferences (Select 5)
            </ResponsiveText>

            <View
              style={{
                flexDirection: 'row',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingHorizontal: 0,
                flexWrap: 'wrap',
                // alignContent: 'center',
                paddingTop: hp(1),
                borderTopWidth: 0.3,
                borderTopColor: colors.white,
              }}>
              {OTHERS_DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                  onPress={()=>toggleSelection(item)}
                  >
                    <View
                      style={{
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: itemList.includes(item) ? colors.yellow : colors.black2,
                        marginHorizontal: 5,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                      }}>
                      <Text style={{fontSize: 10, color: itemList.includes(item) ? colors.black : colors.white}}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{height:hp(10)}}></View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <View>
        {/* <ScrollView showsHorizontalScrollIndicator={false} > */}
        {DATA.length > 0 ? (
          <FlatList
            data={DATA}
            // extraData={dataFiltersDummyData}
            renderItem={({ item, index }) => {
              if(selected=='Dishes'){
              return(
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.black2,
                  marginTop: 10,
                  marginHorizontal: 15,
                  borderRadius: 5,
                }}
                onPress={() =>
                  navigation.navigate(routeName.DISH_DETAIL, { dish: item })
                }>
                <View
                  style={{
                    justifyContent: 'center',
                    borderRadius: 5,
                    overflow: 'hidden',
                  }}>
                  <FastImage
                    style={{
                      height: hp(8),
                      width: wp(17),
                      alignSelf: 'center',
                      margin: 10,
                    }}
                    source={{ uri: item.imageDataB }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginLeft: 5,
                      width: wp(55),
                    }}>
                    <ResponsiveText size={3} color={colors.white}>
                      {item.titleD}
                    </ResponsiveText>
                    <ResponsiveText size={2.7} color={colors.white}>
                      {item.titleR}
                    </ResponsiveText>
                    <Rating
                      size={2}
                      tintColor={colors.black2}
                      imageSize={10}
                      style={{
                        paddingVertical: 10,
                        color: colors.black2,
                        marginLeft: -5,
                        marginTop: -5,
                      }}
                    />
                  </View>
                  <View style={{ margin: 20 }}>
                    <Icon source={globalPath.LOCATION1} />
                    <ResponsiveText color={colors.white} top={5} size={3}>
                      1km
                    </ResponsiveText>
                  </View>
                </View>
              </TouchableOpacity>
              )}
           else{
             return(
              <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors.black2,
                marginTop: 10,
                marginHorizontal: 15,
                borderRadius: 5,
              }}
              onPress={() =>
                navigation.navigate(routeName.RestaurantDetail, item.restaurantBranchId)
              }>
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                <FastImage
                  style={{
                    height: hp(8),
                    width: wp(17),
                    alignSelf: 'center',
                    margin: 10,
                  }}
                  source={{ uri: item.restaurantLogo }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 5,
                    width: wp(55),
                  }}>
                   
                  <ResponsiveText size={2.7} color={colors.white}>
                    {item.titleR}
                  </ResponsiveText>
                  <ResponsiveText size={3} color={colors.white}>
                      {item.awardName}
                    </ResponsiveText>
                  <Rating
                    size={2}
                    tintColor={colors.black2}
                    imageSize={10}
                    style={{
                      paddingVertical: 10,
                      color: colors.black2,
                      // marginLeft: 5,
                      alignSelf:'flex-start',
                      marginTop: -5,
                    }}
                  />
                </View>
                <View style={{ margin: 20 }}>
                  <Icon source={globalPath.LOCATION1} />
                  <ResponsiveText color={colors.white} top={5} size={3}>
                    1km
                  </ResponsiveText>
                </View>
              </View>
            </TouchableOpacity>
             )}
            }}
            keyExtractor={item => item.restaurantDishId}
          />
        ) : SearchText ==''?
          <View
            style={{
              width: wp(100),
              marginTop: 100,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
              {/* <Text style={{color:colors.white}}>Search  Item</Text> */}
            <Icon
              borderColor={colors.yellow}
              borderWidth={0}
              borderRadius={0}
              margin={[hp(3),0,0,0]}
              size={300}
              source={require('../../../assets/icons/search-img.png')}
            />
          </View>:null
        }
        {/* </ScrollView> */}
      </View>
      {Loading === true ? (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            top: 10,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(65, 65, 65, 0)',
          }}>
          <BarIndicator color={colors.yellow} size={hp(3)} />
        </View>
      ) : undefined}
      {/* <SortResult navigation={navigation} /> */}
    </View>
  );
}

{
  /* <Modal isVisible={isModalVisible} backdropOpacity={0.90} style={{ justifyContent: 'flex-end' }}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        // onModalHide={()=>navigation.navigate(routeName.LANDING_SCREEN)}
        coverScreen={true}
      >
        {/* ------------ ModalView -------------- */
}

{
  /* <View style={{ flex: 1, marginLeft: 40, backgroundColor: colors.black3, justifyContent: 'center' }}> */
}
{
  /* <View style={{
            flex: 0.1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            backgroundColor: colors.black2
          }}>
            <TouchableOpacity onPress={toggleModal} style={{ borderRadius: 5, marginLeft: 5, padding: 10, backgroundColor: colors.black1, alignItems: 'center', justifyContent: 'center' }} ><Icon size={20} source={require('../../../assets/icons/x.png')} /></TouchableOpacity>

            <ResponsiveText color={colors.white} size={4}>Filter By</ResponsiveText>
            <TouchableOpacity onPress={toggleModal} style={{ paddingVertical: 8, marginRight: -50, paddingHorizontal: 10, borderRadius: 5, backgroundColor: colors.yellow }} >
              <ResponsiveText color={colors.black} size={3.4}>Reset</ResponsiveText>
            </TouchableOpacity>
            <Icon />
          </View> */
}
{
  /* <View style={{ flex: 0.9 }} >
            <FlatList
              data={searching}
              // extraData={dataFiltersDummyData}
              renderItem={({ item, i }) => (
                <>
                  <View style={{ margin: 20 }}>
                    <ResponsiveText size={4} color={colors.white}>{item.dishName}</ResponsiveText>
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: colors.grey1 }}></View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      // justifyContent: 'center',
                      flexWrap: 'wrap',
                      alignContent: 'center',
                      marginHorizontal: 10

                    }}>
                    {item.data.map((item, index) => {
                      return (
                        renderItem(item, index, i)
                      )
                    })}
                  </View>
                </>)}
              keyExtractor={item => item.id}
            /> */
}

{
  /* <View style={{ height: 50, backgroundColor: colors.black2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <ResponsiveText margin={[0, 20, 0, 20]} color={colors.yellow}>2523 Properties</ResponsiveText>
              <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: colors.yellow, borderRadius: 3, padding: 6, marginRight: 20 }}>
                <ResponsiveText size={3.3}>Show Result</ResponsiveText>
              </TouchableOpacity>
            </View> */
}
{
  /* </View>
        </View> */
}
{
  /* ------------ ModalView End -------------- */
}
{
  /* </Modal> */
}
const styles = StyleSheet.create({
  everyOneFavoriteHeaderSection: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 0.9,
    borderColor: colors.black1,
  },
  everyOneFavoriteItemsSection: {
    flex: 1,
    // flexDirection: 'row',
    // display: 'flex',
    paddingBottom: 20,
    justifyContent: 'center',
    // overflow: 'hidden',
  },
  buttonShape: {
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  buttonViewStyle: {
    margin: 20,
    flexDirection: 'row',
  },
});
