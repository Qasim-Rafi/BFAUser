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
import ResturantDescription from './ResturantDescription'
import RnButton from '../../../components/RnButton'
import ResponsiveText from '../../../components/RnText'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { hp, wp } from '../../../helpers/Responsiveness'
export default function RestaurantBranchDetailScreen({navigation}) {
    return (
       
        <ScrollView style={{backgroundColor:'#202020'}}>
            <View style={styles.headerImage}>
            <ImageHeader navigation={navigation}/>
            </View>
            <View style={styles.buttonStyle}>
            <HeaderButtons/>
            </View>
            <ResturantDescription/>
            <View style={{margin:20}}>
            <Text style={{color:'white',marginBottom:20}}>Facilities</Text>
            {/* <FacilityList data={FacilityData}/> */}
            <View style={{display:'flex', flexDirection:'row' }}>
        
                <Icon source={globalPath.WIFI_ICON} size={hp(8), wp(8)} margin={[0,0,0,20]} />
                <Icon source={globalPath.PARKING_ICON} size={hp(8), wp(8)} margin={[0,0,0,30]} />
                <Icon source={globalPath.MOSQUE_ICON} size={hp(8), wp(8)} margin={[0,0,0,30]}/>
            </View>
            
            </View>
            <TimeTable/>
            <View style={{marginBottom:30}}>
        <Comments/>
            </View>
            <View style={{margin:20,paddingBottom:20}}>
        <RnButton>
            
            <ResponsiveText padding={0} color={'black'}>SUBMIT</ResponsiveText>
        </RnButton>
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