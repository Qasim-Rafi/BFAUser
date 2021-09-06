import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { colors } from '../constants/colorsPallet'
import { globalPath } from '../constants/globalPath'
import { check } from 'yargs'
import Randomiser from '../screens/Home/BottomTabs/Randomiser/Randomiser'

export default function CustomRadioButton(props) {
    const [checked, setCheck] = useState(props.status);
    // if(props.id === '1' || props.id === '2' || props.id ==='3'){
    //     console.log(props.id)
    // }
    
//     if(props.status===false){
// setCheck(false);
//     } else
//     {
//         setCheck(true);
//     }
    return (
        <TouchableOpacity style={{
            backgroundColor:checked ? colors.black3: undefined, 
            borderRadius:50, 
            borderColor:colors.yellow, 
            borderWidth:2 , height:20, width:20,alignItems:'center', justifyContent:'center'}}
            onPress={()=>{setCheck(!checked);
                
            }} >

                {checked ? <Icon source={globalPath.RADIO_DOT} size={6} tintColor={colors.yellow}/> :<View/>}
            </TouchableOpacity>
    )
}
