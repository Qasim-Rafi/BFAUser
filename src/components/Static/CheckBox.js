import React,{useState} from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import { colors } from '../../constants/colorsPallet'
import Icon from '../Icon'
import { globalPath } from '../../constants/globalPath'
export default function CheckBox() {
    const [checked, setChecked] = React.useState(true);
    return (
        <TouchableOpacity style={{height:20, width:20,borderRadius:3, 
            backgroundColor:checked ? colors.yellow: colors.black3,
            borderWidth:checked ? undefined: 2,
            borderColor:checked ? undefined : colors.yellow, 
            justifyContent:'center', alignItems:'center'}} onPress={()=>setChecked(!checked)}>
    
            {checked ? <Icon source={globalPath.CHECK_TICK} size={12} tintColor={colors.black}/> :<View/>}
        </TouchableOpacity>
    )
}
