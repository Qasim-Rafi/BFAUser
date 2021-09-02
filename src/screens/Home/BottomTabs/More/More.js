import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const More = () => {
    return (
        <View style={{backgroundColor:'#202020',flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image style={{width:140,height:160}} source={require('../../../../assets/fake_Images/images.png')}/>
    </View>
    )
}

export default More

const styles = StyleSheet.create({})
