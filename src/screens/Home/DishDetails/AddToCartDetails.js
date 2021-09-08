import React from 'react';
import {View, Text} from 'react-native';
import {ADD_TO_CART_FAKE_DATA} from '../../../constants/mock';
import ResponsiveText from '../../../components/RnText';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { wp } from '../../../helpers/Responsiveness'
import { colors } from '../../../constants/colorsPallet'

export default function AddToCartDetails() {
  return (
    <View style={{margin: 20}}>
      {ADD_TO_CART_FAKE_DATA.map((item, index) => {
        return (
            <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',borderTopWidth:1,borderBottomWidth:1,borderColor:colors.black2,padding:5,marginTop:20}}>
            <ResponsiveText color={colors.white}>
              {item.title}
            </ResponsiveText>
            <ResponsiveText color={colors.white}>{item.option}</ResponsiveText>
          </View>
          <RadioGroup
          size={16}
          style={{padding:0}}
                color={colors.yellow}
        onSelect = {null} 
        >
          {item.data.map((item1,index)=>{
              return(
            
        <RadioButton style={{padding:3}} value={'item1'} color={colors.yellow} >
         <View style={{flexDirection:'row',width:wp(80),justifyContent:'space-between'}}>
         <ResponsiveText margin={[0,0,0,10]} size={3} color={colors.white}>{item1.name}</ResponsiveText>
          <ResponsiveText color={colors.white} >{item1.price}</ResponsiveText>
             </View>
        </RadioButton>
              )
          })}

        </RadioGroup>
          </View>
        );
      })}

      
      {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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
        </View> */}
    </View>
  );
}
