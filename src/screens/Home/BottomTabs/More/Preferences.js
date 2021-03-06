import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import RnButton from '../../../../components/RnButton'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText'
import { wp, hp } from '../../../../helpers/Responsiveness'
import { useSelector,useDispatch } from 'react-redux'
import { StackActions } from '@react-navigation/routers'
import { useEffect } from 'react'
import { CUISINES_DATA, OTHERS_DATA, POPULER_DISHES_DATA,} from '../../../../constants/mock'
import { NavigationHelpersContext } from '@react-navigation/core'
import { getFoodPrefrences } from '../../../../redux/actions/user.actions'

export default function Preferences({navigation}) {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  useEffect(()=>{
    dispatch(getFoodPrefrences(1, 4));
    
  })
  const Prefrences = useSelector(state => state.appReducers.getFoodPrefrences.data);
  const loading = useSelector(state => state.appReducers.getFoodPrefrences.loading);
  console.log('Prefrences:',Preferences)
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

  return (
    <View style={{ flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite }}>
      <View style={[styles.header,{backgroundColor: isThemeDark ? colors.black2 : colors.white}]}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
        <View style={{backgroundColor:colors.yellow, padding:10, borderRadius:20}}>
          <Icon source={require('../../../../assets/icons/x.png')} tintColor={colors.white} size={20} />
        </View>
        </TouchableOpacity>
        <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={4}>
          Preferences
        </ResponsiveText>
        <View style={{ backgroundColor: colors.yellow, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <ResponsiveText color={colors.white} size={3} >Reset</ResponsiveText>
        </View>
      </View>
      <View style={{ flex: 0.9,}}>
        <ScrollView>
        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={isThemeDark ?  colors.white: colors.black}>
            Cuisines
          </ResponsiveText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:20,
            flexWrap: 'wrap',
            // alignContent: 'center',
          }}>
          {CUISINES_DATA.map((item, index) => {
            return (
              <TouchableOpacity onPress={()=>toggleSelection(item)} >
                <View
                  style={{
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: itemList.includes(item) ? colors.yellow : isThemeDark ? colors.black2 : colors.white,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : isThemeDark ? colors.white : colors.black1, }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>


        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={isThemeDark ?  colors.white: colors.black}>
            Popular Dishes
          </ResponsiveText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:20,

            flexWrap: 'wrap',
            // alignContent: 'center',
          }}>
          {POPULER_DISHES_DATA.map((item, index) => {
            return (
              <TouchableOpacity onPress={()=>toggleSelection(item)} >
                <View
                  style={{
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: itemList.includes(item) ? colors.yellow : isThemeDark ? colors.black2 : colors.white,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : isThemeDark ? colors.white : colors.black1,}}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>


        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={isThemeDark ?  colors.white: colors.black}>
            Others
          </ResponsiveText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:20,
            marginBottom:20,
            flexWrap: 'wrap',
            // alignContent: 'center',
          }}>
          {OTHERS_DATA.map((item, index) => {
            return (
              <TouchableOpacity onPress={()=>toggleSelection(item)} >
                <View
                  style={{
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: itemList.includes(item) ? colors.yellow : isThemeDark ? colors.black2 : colors.white,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : isThemeDark ? colors.white : colors.black1, }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>
        <View style={{paddingHorizontal:40, marginBottom:20}} >
        <RnButton onPress={()=>navigation.dispatch(StackActions.replace('Home'))} fontFamily='SemiBold'  margin={[20, 0]} title="Continue" />

        </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.black2,
  },
  cuisinesButton: {
    backgroundColor: colors.yellow,
    paddingVertical: 8,
    // paddingHorizontal:5,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
    // justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
