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
import { routeName } from '../../../constants/routeName'
import {Cart_Details} from '../../../constants/mock'


export default function DishDetails({route, navigation}) {
    const [dish, addDish] = React.useState('');
    // React.useEffect(()=>{addDish(route.params.dish)
    //     })

       

    return (
       
        <ScrollView style={{backgroundColor:colors.black3}}>
            <View style={styles.headerImage}>
            <ImageHeader navigation={navigation}/>
            </View>
        <DishDescription/>
        <View style={{margin:20,paddingBottom:20}}>
        
        
        <RnButton onPress={()=>{
            
            navigation.navigate(routeName.ADD_TO_CART,{dish:dish})
            

            }}>
            
            <ResponsiveText  padding={0} color={colors.black}>Add to Order</ResponsiveText>
        </RnButton>
        </View>
        <CalorieCount/>
        <View style={{marginLeft:20, marginVertical:10}} >
        <MoreFromResturant navigation={navigation}/>
        <PeopleSay/>
        </View>

        {/* <Comments/> */}
        <View style={{margin:20,paddingBottom:20}}>
        
        
        <RnButton onPress={()=>{
            
            navigation.navigate(routeName.ADD_TO_CART,{dish:dish})
            
            }}>
            
            <ResponsiveText  padding={0} color={colors.black}>Add to Order</ResponsiveText>
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