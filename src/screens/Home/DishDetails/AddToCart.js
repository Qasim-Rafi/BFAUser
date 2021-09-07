import React from 'react'
import { View, Text ,StyleSheet,ScrollView,} from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import ResponsiveText from '../../../components/RnText'
import { wp } from '../../../helpers/Responsiveness'

export default function AddToCart({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerImage}>
            <ImageHeader navigation={navigation}/>
            </View>
        <View>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <ResponsiveText color={colors.white}>Choose Your Soft Drink</ResponsiveText>
                <ResponsiveText color={colors.white}>1 Required</ResponsiveText>
                </View>
                <View>
                <RadioGroup
                color={colors.yellow}
        onSelect = {null}
      >
        <RadioButton value={'item1'} color={colors.yellow} >
         <View style={{flexDirection:'row',width:wp(80),justifyContent:'space-between'}}>
         <ResponsiveText color={colors.white}>Coke</ResponsiveText>
          <ResponsiveText color={colors.white} >+$0.00</ResponsiveText>
             </View>
        </RadioButton>

        <RadioButton value={'item2'} color={colors.yellow}>
        <View style={{flexDirection:'row',width:wp(80),justifyContent:'space-between'}}>
         <ResponsiveText color={colors.white}>Sprite</ResponsiveText>
          <ResponsiveText color={colors.white} >+$0.00</ResponsiveText>
             </View>
        </RadioButton>

        <RadioButton value={'item3'} color={colors.yellow}>
        <View style={{flexDirection:'row',width:wp(80),justifyContent:'space-between'}}>
         <ResponsiveText color={colors.white}>Mountain Dew</ResponsiveText>
          <ResponsiveText color={colors.white} >+$0.00</ResponsiveText>
             </View>
        </RadioButton>
      </RadioGroup>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:0.2,backgroundColor:'red'}}>
                <Text>Hello</Text>
            </View>
        </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
container:{
    backgroundColor:colors.black3,
    flex:1
},
headerImage:{
    height:200
}
})