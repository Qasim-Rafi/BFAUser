import React from 'react'
import { View, Text, ScrollView ,StyleSheet, Image} from 'react-native'
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import { colors } from '../../../constants/colorsPallet'
const text="Description"
import ResponsiveText from '../../../components/RnText'
import CaloriesList from '../../../components/CalorieList'
import { DATA } from '../../../constants/mock'
export default function CalorieCount({}) {
    return (
       
        <View style={{backgroundColor:'#404040',}}>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Calorie Count</ResponsiveText>
            </View>
            <CaloriesList data={DATA} />
           </View>
    )
}
const styles= StyleSheet.create({
    headerImage:{
        height:200
    },
    priceDesc :{
        padding:20
    }
})