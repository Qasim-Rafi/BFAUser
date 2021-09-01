import React from 'react'
import { View, Text,Image, ScrollView ,StyleSheet, TouchableOpacity} from 'react-native'
import { hp, wp } from '../../../helpers/Responsiveness'
export default function HeaderButtons({}) {
    return (
       
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={[styles.buttonView,{backgroundColor:'#EDC54E'}]}>
            <TouchableOpacity>
                <Image/>
                <Text >Info</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.buttonView,{backgroundColor:'#cccccc'}]}>
            <TouchableOpacity>
                <Image/>
                <Text>Promo</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.buttonView,{backgroundColor:'#cccccc'}]}>
            <TouchableOpacity>
                <Image/>
                <Text>Menu</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.buttonView,{backgroundColor:'#cccccc'}]}>
            <TouchableOpacity>
                <Image/>
                <Text>Branches</Text>
            </TouchableOpacity>
            </View>

        
        </View>
    )
}
const styles= StyleSheet.create({
    headerImage:{
        height:200
    },
    buttonView:{width:wp(21),height:hp(9),borderRadius:4,justifyContent:'center',alignItems:'center'},
})