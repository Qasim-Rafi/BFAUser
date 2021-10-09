import React, { useState } from 'react'
import {FlatList, View, StyleSheet,TouchableOpacity ,Text,ImageBackground,Image} from 'react-native'
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { hp, wp } from '../../../helpers/Responsiveness'
import { advertisementBannerFakeDATA } from '../../../constants/mock'
import { Rating } from 'react-native-ratings'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { myListingTabs } from '../../../constants/mock'
import { FiltersDummyData } from '../../../constants/mock'
export default function FilterSearch({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:colors.black3}}>
        <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}><Icon size={wp(5) } source={require('../../../assets/icons/back-arrow.png')} /></TouchableOpacity>
      
        <ResponsiveText  color={colors.white} size={5}>Filter By</ResponsiveText>
        <Icon />
        </View>
        <FlatList
        data={FiltersDummyData}
        renderItem={({item, index}) => (
            <>
                <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>{item.title}</ResponsiveText>
                <View style={{borderBottomWidth:0.5,borderBottomColor:colors.grey1}}></View>
                
            </View>
            <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        marginHorizontal:10
        
      }}>
      {item.data.map((item, index) => {
        return (
          <View
            style={{
                borderRadius:7,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.black3,
              marginHorizontal: 10,
              padding: 10,
              marginTop: 10,
              borderColor:colors.grey1,
        borderWidth:0.5
            }}>
            <ResponsiveText color={colors.white} fontFamily={'regular'}>
              {item.name}<ResponsiveText color={colors.yellow}>({item.value})
              </ResponsiveText>
            </ResponsiveText>
          </View>
        );
      })}
    </View>

                
            </>)}
      keyExtractor={item => item.id}/>
        <View style={{height:50,backgroundColor:colors.black2,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <ResponsiveText margin={[0,20,0,20]} color={colors.yellow}>2523 Properties</ResponsiveText>
          <TouchableOpacity style={{backgroundColor:colors.yellow,borderRadius:3,padding:6,marginRight:20}}>
            <ResponsiveText size={3.3}>Show Result</ResponsiveText>
          </TouchableOpacity>

        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header: {
        flex: 0.41,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor:colors.black2
    
    },
})