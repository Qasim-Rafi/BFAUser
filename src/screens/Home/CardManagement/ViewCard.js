import React from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import Header from '../../../components/Header'
import { colors } from '../../../constants/colorsPallet'
import { globalPath } from '../../../constants/globalPath'
import { hp,wp } from '../../../helpers/Responsiveness'
import ResponsiveText from '../../../components/RnText'
import Icon from '../../../components/Icon'
import CustomInput from '../../../components/customInput'
import { routeName } from '../../../constants/routeName'

export default function ViewCard({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:colors.black3}}>
            <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
      </View>
            
                <ResponsiveText margin={[20,20,10,20]} color={colors.yellow} size={4} >View Card</ResponsiveText>

                <View style={{flex:0.90,marginTop:10, backgroundColor:colors.black2, borderTopRightRadius:30,paddingVertical:5, borderTopLeftRadius:30}}>
                
                <CustomInput fieldName={"First Name"} textMargin={[0,0,0,20]} placeHolderText={""} />
                <CustomInput fieldName={"Last Name"} textMargin={[0,0,0,20]} placeHolderText={""} />  
                <CustomInput fieldName={"Card Number"} textMargin={[0,0,0,20]} placeHolderText={""} />
                <CustomInput fieldName={"Expiration Date (MM/YY)"} textMargin={[0,0,0,20]} placeHolderText={""} />
                <CustomInput fieldName={"Security Code (CVV)"} textMargin={[0,0,0,20]} placeHolderText={""} />
                <ResponsiveText size={3} margin={[10,30,0,30]} color={colors.grey1}>Your payment will be proceeded internationally. Additional bank fees may apply.</ResponsiveText>
                <TouchableOpacity
          onPress={() => {
            navigation.navigate(routeName.TRANSACTION_CONFIRMATION);
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(75),
            marginTop: 25,
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 7,
            backgroundColor: colors.yellow,
          }}>
          <ResponsiveText color={colors.black} size={3.5}>
            Confirm Card
          </ResponsiveText>
        </TouchableOpacity>
            </View>
        </View>
    )
}
