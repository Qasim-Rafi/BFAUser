import React, { useState } from 'react'
import { ScrollView, View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text, ImageBackground, Image } from 'react-native'
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { SearchResult } from '../../../redux/actions/user.actions'
import { colors } from '../../../constants/colorsPallet'
import { hp, wp } from '../../../helpers/Responsiveness'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA, Search_Result } from '../../../constants/mock'
import { Rating } from 'react-native-ratings'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { myListingTabs } from '../../../constants/mock'
import { useDispatch, useSelector } from 'react-redux';

import { routeName } from '../../../constants/routeName'
import SearchHeader from '../../../components/SearchHeader'
import Modal from "react-native-modal";
import { FiltersDummyData } from '../../../constants/mock'
import FastImage from 'react-native-fast-image'
export default function SearchAll({ navigation }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(SearchResult());

  }, []);
  const DATA = useSelector(
    state => state.appReducers.SearchResult.data,
  );
  console.log("searching", DATA)
  const [searchBar, toggleSearchBar] = React.useState('false');
  const [SearchText, setSearchText] = React.useState('');
  const [selected, setSelected] = React.useState('Dishes');

  // const [activeTab, setActiveTab] = React.useState(myListingTabs[0].id);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [dataFiltersDummyData, setFiltersDummyData] = React.useState();
  const Search = () => {
    dispatch(SearchResult(SearchText, selected));
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [SelectItem, setSelectItem] = React.useState();
  React.useEffect(() => {
    setFiltersDummyData(FiltersDummyData)

  }, [FiltersDummyData]);

  const onPressHandler = (item, index, i) => {
    // setSelectItem({selectedItem: item});
    console.log(index, 'onpreeeeeee')
    dataFiltersDummyData[0].data[index].select = !dataFiltersDummyData[0].data[index].select
    setFiltersDummyData(dataFiltersDummyData)
  };
  const onSelect = (chindex, value) => {
    // setSelectItem({selectedItem: item});
    console.log("butttonn", value)
    setSelected(value)
    // return check;
  };
  const renderItem = (item, index, i) => {
    return (
      <TouchableOpacity onPress={() => onPressHandler(item.select, index, i)}
        style={{
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: item.select ? colors.yellow : colors.black3,
          marginHorizontal: 10,
          padding: 10,
          marginTop: 10,
          borderColor: colors.grey1,
          borderWidth: 0.5
        }}>
        <ResponsiveText color={colors.white} fontFamily={'regular'}>
          {item.name}<ResponsiveText color={colors.yellow}>({item.value})
          </ResponsiveText>
        </ResponsiveText>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.black3 }}>
      <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: colors.yellow, paddingVertical: 10, paddingHorizontal: 10, marginRight: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>

        <TextInput
          style={{ height: hp(6), width: wp(75), backgroundColor: colors.black1, borderRadius: wp(4), padding: wp(4) }}
          editable={true}
          fontSize={11}
          placeholderTextColor={colors.grey}
          placeholder={"Search...."}
          onChangeText={(Text) => setSearchText(Text)}
        />
        <TouchableOpacity
          onPress={() => {
            Search()
          }}
        >
          <Icon source={globalPath.SEARCH_LOGO} size={25} margin={[0, 0, 0, 10]} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: wp(3) }}>
        <ResponsiveText color={colors.white} size={3} margin={[10, 0, 0, 10]}>5 Result Found </ResponsiveText>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, }}>
          <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
            onSelect={(index, value) => onSelect(index, value)}
            selectedIndex={0}
          >
            <RadioButton value={'Dishes'} style={{ marginStart: 1 }}>
              <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Dishes </ResponsiveText>
            </RadioButton>

            <RadioButton value={'Restaurants'} style={{ marginStart: 10 }}>
              <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Restaurants  </ResponsiveText>
            </RadioButton>
          </RadioGroup>

        </View>

      </View>
      <View>
        {/* <ScrollView showsHorizontalScrollIndicator={false} > */}
        <FlatList
          data={DATA[0]}
          // extraData={dataFiltersDummyData}
          renderItem={({ item, index }) => (

            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: colors.black2, marginTop: 10, marginHorizontal: 15, borderRadius: 5 }} onPress={() => props.navigation.navigate(routeName.DISH_DETAIL, { dish: url })}>
              <View style={{ justifyContent: 'center', borderRadius: 5, overflow: 'hidden', }}>
                <FastImage style={{ height: hp(8), width: wp(17), alignSelf: 'center', margin: 10 }} source={{ uri: item.restaurantLogo }} />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', marginLeft: 5 }} >
                  <ResponsiveText size={3} color={colors.white}>{item.titleD}</ResponsiveText>
                  <ResponsiveText size={2.7} color={colors.white}>{item.titleR}</ResponsiveText>
                  <Rating
                    size={2}
                    tintColor={colors.black2}
                    imageSize={10}
                    style={{ paddingVertical: 10, color: colors.black2, marginLeft: -25, marginTop: -5 }}
                  />
                </View>
                <View style={{ margin: 20 }}>
                  <Icon source={globalPath.LOCATION1} />
                  <ResponsiveText color={colors.white} top={5} size={3}>1km</ResponsiveText>
                </View>

              </View>
            </TouchableOpacity>
          )}
        // keyExtractor={item => item.id}
        />

        {/* </ScrollView> */}
      </View>

      {/* <SortResult navigation={navigation} /> */}

    </View>
  )
}

{/* <Modal isVisible={isModalVisible} backdropOpacity={0.90} style={{ justifyContent: 'flex-end' }}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        // onModalHide={()=>navigation.navigate(routeName.LANDING_SCREEN)}
        coverScreen={true}
      >
        {/* ------------ ModalView -------------- */}


{/* <View style={{ flex: 1, marginLeft: 40, backgroundColor: colors.black3, justifyContent: 'center' }}> */ }
{/* <View style={{
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
          </View> */}
{/* <View style={{ flex: 0.9 }} >
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
            /> */}

{/* <View style={{ height: 50, backgroundColor: colors.black2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <ResponsiveText margin={[0, 20, 0, 20]} color={colors.yellow}>2523 Properties</ResponsiveText>
              <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: colors.yellow, borderRadius: 3, padding: 6, marginRight: 20 }}>
                <ResponsiveText size={3.3}>Show Result</ResponsiveText>
              </TouchableOpacity>
            </View> */}
{/* </View>
        </View> */}
{/* ------------ ModalView End -------------- */ }
{/* </Modal> */ }
const Filter = (props) => {
  <>
    <View></View>
  </>
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
    borderColor: colors.black1
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

  }
})