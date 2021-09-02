import React from 'react'
import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import DishDescription from './DishDescription'
import { colors } from '../../../constants/colorsPallet'
import CalorieCount from './CalorieCount'
import MoreFromResturant from './MoreFromResturant'
import PeopleSay from './PeopleSay'
import Comments from './Comments'
import RnButton from '../../../components/RnButton'
import ResponsiveText from '../../../components/RnText'
export default function DishDetails({navigation}) {
    return (
       
        <ScrollView style={{backgroundColor:'#202020'}}>
            <View style={styles.headerImage}>
            <ImageHeader navigation={navigation}/>
            </View>
        <DishDescription/>
        <CalorieCount/>
        <MoreFromResturant/>
        <PeopleSay/>
        <Comments/>
        <View style={{margin:20,paddingBottom:20}}>
        <RnButton>
            <ResponsiveText padding={15}>Order This Recipie</ResponsiveText>
        </RnButton>
        </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    headerImage:{
        height:200
    }
})