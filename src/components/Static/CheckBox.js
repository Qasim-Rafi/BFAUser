import React,{useState} from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import { colors } from '../../constants/colorsPallet'
import Icon from '../Icon'
import { globalPath } from '../../constants/globalPath'
import ResponsiveText from '../RnText'
import { useSelector } from 'react-redux'
export default function CheckBox({text,onPress,value,additem, checkedd,index}) {
   const [checked, setChecked] = React.useState( checkedd? checkedd : false);
   const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
    return (
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={()=>{setChecked(!checked);if(additem){additem(value,index);if(onPress){onPress}}}}
        >
        <View style={{height:20, width:20,borderRadius:3, 
            backgroundColor:checked ? colors.yellow: isThemeDark ?  colors.black3: colors.bgWhite,
            borderWidth:checked ? undefined: 2,
            borderColor:checked ? undefined : colors.yellow, 
            justifyContent:'center', alignItems:'center'}} >
    
            {checked ? <Icon source={globalPath.CHECK_TICK} size={12} tintColor={colors.black}/> :<View/>}
        </View>
        <View>

        </View>
        {
            text ? <ResponsiveText color={colors.white} margin={[0,0,0,10]}>{text}</ResponsiveText> : null
        }
        </TouchableOpacity>
    )
}
