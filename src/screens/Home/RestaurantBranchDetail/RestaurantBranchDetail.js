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
import RestaurantDescription from './ResturantDesceiption'
import RnButton from '../../../components/RnButton'
import ResponsiveText from '../../../components/RnText'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { hp, wp } from '../../../helpers/Responsiveness'
import StaticMap from '../../../components/StaticMap'
import { colors } from '../../../constants/colorsPallet'
export default function RestaurantBranchDetailScreen({navigation}) {
    return (
       
        <ScrollView style={{backgroundColor:'#202020'}}>
            <View style={styles.headerImage}>
            <ImageHeader navigation={navigation}/>
            </View>
            <View style={styles.buttonStyle}>
            <HeaderButtons/>
            </View>
            <RestaurantDescription/>
            <View style={{margin:20}}>
            <ResponsiveText color={colors.white} margin={[0,0,10,0]}>Location</ResponsiveText>
            <StaticMap/>
            <View style={{paddingTop: 10, }}>
        <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>
         Phone Number
        </ResponsiveText>
        <ResponsiveText
          top={5}
          fontFamily="Regular"
          size={3.5}
          color={colors.grey}>
          +632-5342-454
        </ResponsiveText>
      </View>
            </View>
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