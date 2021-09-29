import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../../../components/Header'
import Icon from '../../../../components/Icon'
import ResponsiveText from '../../../../components/RnText'
import { colors } from '../../../../constants/colorsPallet'
import { globalPath } from '../../../../constants/globalPath'
import { hp, wp } from '../../../../helpers/Responsiveness'
import { Rating } from 'react-native-ratings'
import { MY_REVIEWS_DATA } from '../../../../constants/mock'

export default function MyReviews({navigation}) {
    return (
        <View style={{ flex:1, backgroundColor:colors.black3}}>
        <View style={{ flex:0.1, backgroundColor:colors.black2, justifyContent:'center'}}>
            <Header iconPath={globalPath.BACK_ARROW} navigation={navigation} />
        </View>
        <View style={{flex:0.9}}>
            <ScrollView>
            <ResponsiveText margin={[30,20,20,20]} size={4} color={colors.yellow} >My Reviews</ResponsiveText>
            
            <View style={{marginBottom:50}}>
            {MY_REVIEWS_DATA.map((item)=>{
                return(
                
                <View style={{flexDirection:'row', marginRight:20,marginLeft:40, backgroundColor:colors.black2, padding:10, borderRadius:7, marginBottom:10}}>
                
                <Icon borderColor={colors.grey} borderWidth={10} margin={[1,0,0,-33]} source={item.url} borderRadius={40} size={50} />
                
                <View style={{justifyContent:'center', paddingRight:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between', width:wp(70), marginLeft:15}}>
                        <ResponsiveText color={colors.white} size={3.5} >{item.title}</ResponsiveText>
                        <ResponsiveText color={colors.grey} size={2.5} >{item.date}</ResponsiveText>
                    </View>
                    <View style={{alignItems:'flex-start', marginLeft:15}}>
                    <Rating
                      tintColor={'rgba(0, 0, 0, 0.8)'}                  
                      imageSize={11}
                      
                    />
                    </View>
                    <View style={{marginRight:10, marginLeft:15, overflow:'hidden',}}>
                    <ResponsiveText color={colors.grey} size={3} margin={[5,10,0,0]} >{item.comment}</ResponsiveText>
                    </View>
                </View>
            </View>
            )})}
            </View>



        </ScrollView>
        </View>
        </View>
    )
}
