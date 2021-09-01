import React from 'react'
import { View, Text, ScrollView ,StyleSheet, Image} from 'react-native'
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import { colors } from '../../../constants/colorsPallet'
const text="Description"
import Icon from '../../../components/Icon'
import ResponsiveText from '../../../components/RnText'
import { globalPath } from '../../../constants/globalPath'
import { wp } from '../../../helpers/Responsiveness'
export default function DishDescription({}) {
    return (
       
        <View>
            <View>
                <View style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={styles.priceDesc}>
                    <ResponsiveText size={4} color={colors.white}>Salman Sashimi Sushi</ResponsiveText>
                    <ResponsiveText size={3.7}  color={colors.grey}>1-Lotus Resturant</ResponsiveText>
                    <ResponsiveText size={4}  color={colors.yellow} >$10.00</ResponsiveText>
                    
                    
                </View>
                <Icon size={wp(18)} margin={[0,20,0,0]} source={globalPath.RESTAURANT_LOGO} />
                </View>

                
                <View >
                    <Image style={{width:30,height:25}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',padding:20,borderBottomColor:colors.grey,borderBottomWidth:1}}>
                <View style={{alignItems:'center'}}>
                <Icon source={globalPath.HEART} />
                    <ResponsiveText top={5} color={colors.yellow}>Favourite</ResponsiveText>
                </View>
                <View style={{alignItems:'center'}}>
                  <Icon source={globalPath.LOCATION} />  
                    <ResponsiveText top={5}  color={colors.yellow}>Go To </ResponsiveText>
                </View>
                <View style={{alignItems:'center'}}>
                <Icon source={globalPath.CONTACT} />  
                     <ResponsiveText top={5}  color={colors.yellow}>Contact</ResponsiveText>
                </View>
                <View style={{alignItems:'center'}}>
                <Icon source={globalPath.HOME_LOGO} />  
                  <ResponsiveText top={5}  color={colors.yellow}>More</ResponsiveText>
                </View>
            </View>
            <View style={{padding:20}}>
            <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>Description</ResponsiveText>
            <ResponsiveText top ={5} fontFamily="Regular" size={3.5} color={colors.grey}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</ResponsiveText>

            </View>
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