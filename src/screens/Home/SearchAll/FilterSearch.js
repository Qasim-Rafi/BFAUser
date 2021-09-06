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
        <TouchableOpacity onPress={()=>{navigation.goBack()}}><Icon size={wp(2) , hp(4)} source={require('../../../assets/icons/back-arrow.png')} /></TouchableOpacity>
      
        <ResponsiveText color={colors.white} size={5}>Filter By</ResponsiveText>
        <Icon source={globalPath.SEARCH_LOGO} />
        </View>
        <FlatList
        data={FiltersDummyData}
        renderItem={({item, index}) => (
            <>
                <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>{item.title}</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
            <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}>
      {item.data.map((item, index) => {
        return (
          <View
            style={{
                borderRadius:18,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.black2,
              marginHorizontal: 10,
              padding: 10,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14,color:colors.white }}>
              {item.name}({item.value})
            </Text>
          </View>
        );
      })}
    </View>

                
            </>
        )
        }

        keyExtractor={item => item.id}
      />

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