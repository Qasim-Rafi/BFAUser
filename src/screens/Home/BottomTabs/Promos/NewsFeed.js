import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../../../../components/Header'
import Advertisement2ndVarient from '../Home/Advertisement2ndVarient'
import PromosBanner from './PromoBanner'
import RnButton from '../../../../components/RnButton'
import { colors } from '../../../../constants/colorsPallet'
import { hp, wp } from '../../../../helpers/Responsiveness'
import ResponsiveText from '../../../../components/RnText'
import { myPromosListingTabs } from '../../../../constants/mock'
import Icon from '../../../../components/Icon'
import { globalPath } from '../../../../constants/globalPath'
import { NewsFeeds } from '../../../../constants/mock'
import { routeName } from '../../../../constants/routeName'



const NewsFeed = (props) => {

    return (
        <View style={{marginTop:30}} >
            <ResponsiveText color={colors.white}>Inbox</ResponsiveText>
            {NewsFeeds.map((url,index)=>{
                return(
                    <View style={{ backgroundColor: colors.black2, height: hp(46), borderRadius: 5,marginTop:10 }}>
            <View style={{ flexDirection: 'row', marginVertical:12,marginHorizontal:15 }}>
                <View ><Icon size={40} source={globalPath.ALIGATO} /></View>
                <View>
                    <ResponsiveText margin={[0, 7]} color={colors.white} size={2.7}>Aligato</ResponsiveText>
                    <ResponsiveText margin={[0, 7]} color={colors.grey} size={2.7}>Times Square Shopping Complex</ResponsiveText>
                </View>
            </View>
            <ImageBackground style={styles.Advertisement2ndVarientImage}
                // source={{ uri: url }}
                source={globalPath.NEWS_FEED_IAMGE1}

            >
            </ImageBackground>
            <View style={{ marginTop: 10, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                    <TouchableOpacity><View style={{ justifyContent:'center',alignItems:'center', backgroundColor: '#707070',flexDirection:'row',borderRadius:20,height:hp(4),width:wp(17) }}>
                        <Icon source={globalPath.F_HEART} />
                        <ResponsiveText margin={[0,5,0,8]} color={colors.white} size={3}>224</ResponsiveText>
                    </View></TouchableOpacity>
                    <View style={{marginRight:15}}>
                    
                        {/* <TouchableOpacity style={{width:wp(25), height:hp(4), borderRadius:20, backgroundColor:colors.yellow, alignItems:'center', justifyContent:'center'}}
                         onPress={()=>props.navigation.navigate(routeName.ADD_TO_CART)}>
                             <ResponsiveText size={3}>Order Now</ResponsiveText>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:7,}}>
                <ResponsiveText top={0} color={colors.white} size={3}>Dish of the day: <ResponsiveText color={colors.grey} size={3}>Spaghetti marinara with freshlt imported boston lobster</ResponsiveText></ResponsiveText>
                
                </View>
            </View>
        </View>)
                
            })}
        </View>
    )
        
}
export default NewsFeed
const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { justifyContent: 'center', height: hp(25), },

})