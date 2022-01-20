import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../../components/Icon'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { globalPath } from '../../../constants/globalPath'
import { CARD_DATA } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
import { hp, wp } from '../../../helpers/Responsiveness'
import bArrow from '../../../assets/icons/back-arrow.png'
import Modal from 'react-native-modal';

import phoneIcon from '../../../assets/icons/phone-black.png'

import BcoinKeypad from './BcoinKeypad'


const Transfer = (props) => {
    const navigation = useNavigation()
    const route = useRoute()

    // const [isModalVisible, setModalVisible] = useState(false);

    const transferAmountComing = route.params
    const transferAmount = parseFloat(transferAmountComing).toFixed(2)

    // navigation.setOptions({
    //     headerShown: true,
    //     headerStyle: {
    //         backgroundColor: colors.black3,
    //         alignItems: 'center',
    //     },
    //     headerTitleAlign: 'center',
    //     headerTintColor: '#fff'
    // })
    return (
        <View style={styles.container} >
            <View style={{  flexDirection: 'row',marginLeft:10,backgroundColor:colors.black3,paddingVertical:5,alignSelf:'flex-start'}}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:13,paddingHorizontal:10,borderRadius:25,}} onPress={() => { navigation.goBack() }}><Image source={bArrow} style={styles.bCLogo} /></TouchableOpacity>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white',marginLeft:'25%',padding:5}}>Transfer</Text> 
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }} >Top-up Bcoin Balance</Text>
                <Text style={{ color: 'white', fontSize: 70, marginTop: 50 }} >{transferAmount}</Text>
                <Text style={{ color: 'white', fontSize: 15 }} >5% Fee</Text>
            </View>


            <View
                style={{
                    flex: 1,
                    marginTop: 60,
                    backgroundColor: colors.black2,
                    borderTopRightRadius: 30,
                    paddingVertical: 5,
                    borderTopLeftRadius: 30,
                    alignSelf: 'center',
                    paddingTop: 10,
                    width: '100%'
                }}
            >
                <View
                    style={{
                        marginHorizontal: 40,
                        marginTop: 10,
                        paddingBottom: 10,
                        borderBottomColor: colors.black1,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => { }}>
                        <View
                            style={{
                                width: wp(80),
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingHorizontal: 5,
                            }}>
                            <View
                                style={{
                                    backgroundColor: colors.white,
                                    borderRadius: 5,
                                    height: 40,
                                    width: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Icon source={phoneIcon} size={20} />
                            </View>

                            <View style={{ flexDirection: 'column' }} >
                                <ResponsiveText margin={[0, 10, 0, 15]} color={colors.white}>
                                    Phone Number
                                </ResponsiveText>
                                <ResponsiveText margin={[0, 10, 0, 15]} color={colors.white}>
                                    *0000 **********
                                </ResponsiveText>
                            </View>


                        </View>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(routeName.WALLET, transferAmount);
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp(75),
                        marginTop: 40,
                        height: hp(5),
                        alignSelf: 'center',
                        borderRadius: 7,
                        backgroundColor: colors.yellow,
                        // marginTop: 350
                    }}>
                    <ResponsiveText color={colors.black} size={3.5}>
                        Click to Pay
                    </ResponsiveText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Transfer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black3,
        alignItems: 'center',
        paddingTop: 20,
    },
    bCLogo: {
        // marginHorizontal: 3,
        height: hp(2.2),
        width: wp(6)
    },
})
