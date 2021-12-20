import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { colors } from '../../../constants/colorsPallet'

import _1BCoin from '../../../assets/BCoins/1_BCOIN.png'
import _5BCoin from '../../../assets/BCoins/5_BCOINS.png'
import _10BCoin from '../../../assets/BCoins/10_BCOINS.png'
import _20BCoin from '../../../assets/BCoins/20_BCOINS.png'
import _50BCoin from '../../../assets/BCoins/50_BCOINS.png'
import _100BCoin from '../../../assets/BCoins/100_HUNDRED_BCOINS.png'

const Wallet = (props) => {

    const navigation = useNavigation()
    const route = useRoute()

    return (
        <View style={styles.container}>
            <Text style={{color:'white',fontSize:70}} >10.00</Text>
            <View style={{flexDirection:'row',paddingBottom:20}} >
                <View style={{alignItems:'center'}}>
                    <Image source={_1BCoin} style={styles.image}/>
                    <Text style={{color:'white'}}>History</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_1BCoin} style={styles.image}/>
                    <Text style={{color:'white'}} >Transfer</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_1BCoin} style={styles.image}/>
                    <Text style={{color:'white'}} >Top-Up</Text>
                </View>

            </View>

            <View style={{alignItems:'center', paddingVertical:20, borderWidth:1, borderColor:'white', width:'100%'}} >

                <Text style={{color:'white'}}>BND $1 = 1 Bitcoin </Text>

            </View>
            
            <View style={{flexDirection:'row',paddingTop:20}} >
                <View style={{alignItems:'center'}}>
                    <Image source={_1BCoin} style={styles.image2}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_5BCoin} style={styles.image2}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_10BCoin} style={styles.image2}/>
                </View>
            </View> 
            <View style={{flexDirection:'row'}} >
                <View style={{alignItems:'center'}}>
                    <Image source={_20BCoin} style={styles.image2}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_50BCoin} style={styles.image2}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={_100BCoin} style={styles.image2}/>
                </View>
            </View> 
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black3,
        alignItems:'center',
    },
    image:{
        height:100,
        width:100,
        paddingHorizontal:5,
        borderRadius:5,
        marginHorizontal:5
    },
    image2:{
        height:130,
        width:130,
        paddingHorizontal:5,
        borderRadius:5,
        marginHorizontal:5
    },
})
