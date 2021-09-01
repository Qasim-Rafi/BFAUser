import React from 'react'
import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import { FacilityList } from '../../../components/Facility'
import { FacilityData } from '../../../constants/mock'
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import Comments from '../DishDetails/Comments'
import DishDescription from '../DishDetails/DishDescription'
import HeaderButtons from './HeaderButtons'
import TimeTable from './TimeTable'
export default function RestaurantBranchDetailScreen({}) {
    return (
       
        <ScrollView style={{backgroundColor:'#202020'}}>
            <View style={styles.headerImage}>
            <ImageHeader/>
            </View>
            <View style={styles.buttonStyle}>
            <HeaderButtons/>
            </View>
            <DishDescription/>
            <View style={{margin:20}}>
            <Text style={{color:'white',marginBottom:20}}>Facilities</Text>
            <FacilityList data={FacilityData}/>
            </View>
            <TimeTable/>
            <View style={{marginBottom:30}}>
        <Comments/>
            </View>
        
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    headerImage:{
        height:200
    },
    buttonStyle:{
        padding:10
    }
})