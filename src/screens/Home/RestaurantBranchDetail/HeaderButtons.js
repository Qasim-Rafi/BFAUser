import React from 'react'
import { View, Text,Image, ScrollView ,StyleSheet, TouchableOpacity} from 'react-native'
export default function HeaderButtons({}) {
    return (
       
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.buttonView}>
            <TouchableOpacity>
                <Image/>
                <Text >Info</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity>
                <Image/>
                <Text>Promo</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity>
                <Image/>
                <Text>Menu</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
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
    buttonView:{width:70,height:60,backgroundColor:'#EDC54E',borderRadius:4,justifyContent:'center',alignItems:'center'},
})