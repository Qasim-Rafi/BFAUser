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



const NewsFeed = (navigation) => {

    return (
        <>
            {NewsFeeds.map((url,index)=>{
                return(
                    <View style={{ backgroundColor: '#303030', height: hp(46), borderRadius: 5,marginTop:20 }}>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <View ><Icon size={40} source={globalPath.RESTAURANT_LOGO} /></View>
                <View>
                    <ResponsiveText margin={[0, 10]} color={colors.white}>Aligato</ResponsiveText>
                    <ResponsiveText margin={[0, 10]} color={colors.grey}>Times Square Shopping Complex</ResponsiveText>
                </View>
            </View>
            <ImageBackground style={styles.Advertisement2ndVarientImage}
                // source={{ uri: url }}
                source={globalPath.HOME_ADD_BANNER_1}

            >
            </ImageBackground>
            <View style={{ marginTop: 10, marginLeft: 20 }}>
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                    <View style={{ backgroundColor: '#707070',flexDirection:'row',padding:8,borderRadius:20,height:hp(5) }}>
                        <Icon source={globalPath.F_HEART} />
                        <ResponsiveText margin={[0,5,0,8]} color={colors.white}>224</ResponsiveText>
                    </View>
                    <RnButton btnStyle={{ width: wp(28), }}><ResponsiveText>Order Now</ResponsiveText></RnButton>
                </View>
                <ResponsiveText top={7} color={colors.white}>Dish of the day:</ResponsiveText>
                <ResponsiveText margin={[0,10,0,0]} color={colors.grey}>Spaghetti marinara with freshlt imported boston lobster</ResponsiveText>

            </View>
        </View>)
                
            })}
        </>
    )
        
}
export default NewsFeed
const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { justifyContent: 'center', height: hp(18), },

})