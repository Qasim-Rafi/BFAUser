import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import RnButton from '../../../../components/RnButton'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText'
import { wp, hp } from '../../../../helpers/Responsiveness'
import { CUISINES_DATA, OTHERS_DATA, POPULER_DISHES_DATA,} from '../../../../constants/mock'
import { NavigationHelpersContext } from '@react-navigation/core'

export default function Preferences({navigation}) {
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
    <View style={{ flex: 1, backgroundColor: colors.black3 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
        <View style={{backgroundColor:colors.black1, padding:10, borderRadius:5}}>
          <Icon source={require('../../../../assets/icons/x.png')} tintColor={colors.white} size={20} />
        </View>
        </TouchableOpacity>
        <ResponsiveText color={colors.white} size={4}>
          Preferences
        </ResponsiveText>
        <View style={{ backgroundColor: colors.black1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <ResponsiveText color={colors.white} size={3} >Reset</ResponsiveText>
        </View>
      </View>
      <View style={{ flex: 0.9,}}>
        <ScrollView>
        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={colors.white}>
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
                    backgroundColor: itemList.includes(item) ? colors.yellow : colors.black2,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : colors.white, }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>


        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={colors.white}>
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
                    backgroundColor: itemList.includes(item) ? colors.yellow : colors.black2,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : colors.white,}}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

        </View>


        <View style={{ borderBottomColor: colors.black2, borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 15, }}>
          <ResponsiveText size={4} color={colors.white}>
            Others
          </ResponsiveText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:20,
            marginBottom:40,
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
                    backgroundColor: itemList.includes(item) ? colors.yellow : colors.black2,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal:20,
                    marginTop: 10,
                  }}>
                  <Text style={{ fontSize: 14, color: itemList.includes(item) ? colors.black : colors.white, }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

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
