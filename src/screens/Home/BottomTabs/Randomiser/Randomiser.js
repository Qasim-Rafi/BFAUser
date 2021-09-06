import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'

const Randomiser = () => {
    return (
        <View style={{backgroundColor:colors.black3,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:140,height:160}} source={require('../../../../assets/fake_Images/images.png')}/>
        </View>
    )
}

export default Randomiser

const styles = StyleSheet.create({})
