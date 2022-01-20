import React,{useState} from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import { colors } from '../../constants/colorsPallet'
import Icon from '../Icon'
import { globalPath } from '../../constants/globalPath'
import ResponsiveText from '../RnText'
export default function CheckBox({text,checked,onPress}) {
   // const [checked, setChecked] = React.useState(false);
    return (
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{height:20, width:20,borderRadius:3, 
            backgroundColor:checked ? colors.yellow: colors.black3,
            borderWidth:checked ? undefined: 2,
            borderColor:checked ? undefined : colors.yellow, 
            justifyContent:'center', alignItems:'center'}} onPress={onPress}>
    
            {checked ? <Icon source={globalPath.CHECK_TICK} size={12} tintColor={colors.black}/> :<View/>}
        </TouchableOpacity>
        <View>

        </View>
        {
            text ? <ResponsiveText color={colors.white} margin={[0,0,0,10]}>{text}</ResponsiveText> : null
        }
        </View>
    )
}
