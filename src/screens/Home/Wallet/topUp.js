import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '../../../components/Icon'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { globalPath } from '../../../constants/globalPath'
import { CARD_DATA } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
import { hp, wp } from '../../../helpers/Responsiveness'
import Modal from 'react-native-modal';
import CheckBox from '../../../components/Static/CheckBox'
import bArrow from '../../../assets/icons/back-arrow.png'

import bCoin from '../../../assets/icons/bcoin_logo.png'
import leftArrow from '../../../assets/icons/arrow-left.png'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import _1BCoin from '../../../assets/BCoins/1_BCOIN.png'
import _5BCoin from '../../../assets/BCoins/5_BCOINS.png'
import _10BCoin from '../../../assets/BCoins/10_BCOINS.png'
import _20BCoin from '../../../assets/BCoins/20_BCOINS.png'
import _50BCoin from '../../../assets/BCoins/50_BCOINS.png'
import _100BCoin from '../../../assets/BCoins/100_HUNDRED_BCOINS.png'

import _1BCent from '../../../assets/BCents/1_BCENT.png'
import _5BCent from '../../../assets/BCents/5_BCENTS.png'
import _10BCent from '../../../assets/BCents/10_BCENTS.png'
import _20BCent from '../../../assets/BCents/20_BCENTS.png'
import _50BCent from '../../../assets/BCents/50_BCENTS.png'

const TopUp = (props) => {
    const navigation = useNavigation()
    const route = useRoute()

    const [isModalVisible, setModalVisible] = useState(false);
    const [checked, setCheck] = useState(true);

    const topUpAmountComing = route.params
    const topUpAmount = parseFloat(topUpAmountComing).toFixed(2)

    const [number, setNumber] = useState(0)


    // navigation.setOptions({
    //     headerShown:true,
    //     headerStyle:{
    //         backgroundColor:colors.black3,
    //         alignItems:'center'
    //     },
    //     headerTitleAlign: 'center',
    //     headerTintColor: '#fff'
    // })
    return (
        <View style={styles.container} >

                <View style={{  flexDirection: 'row',marginLeft:10,backgroundColor:colors.black3,paddingVertical:5,alignSelf:'flex-start'}}>
                <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:13,paddingHorizontal:10,borderRadius:25,}} onPress={() => { navigation.goBack() }}><Image source={bArrow} style={styles.bCLogo} /></TouchableOpacity>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'white',marginLeft:'25%',padding:5}}>Top Up</Text> 
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:20}} >Top-up Bcoin Balance</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={bCoin} style={{ height: 60, width: 50 }} />
                        <TextInput
                            // editable={ number===0 ? false : true }
                            onPressIn={ ()=> setModalVisible(true)}
                            style={styles.input}
                            onChangeText={setNumber}
                            value={parseFloat(number).toFixed(2)}
                            maxLength={10}
                            defaultValue={'' + parseFloat(number) + ''}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity>
                            <Image source={leftArrow} style={{ height: 20, width: 20, margin:5 }} />
                        </TouchableOpacity>
                    </View> 
                    {/* <Text style={{color:'white',fontSize:70,marginTop:50}} >{topUpAmount}</Text> */}
                    <Text style={{color:'white',fontSize:15}} >5% Fee</Text>
                </View>
                <View
                    style={{
                        marginTop: 50,
                        paddingVertical: 5,
                        alignSelf:'center',
                        alignItems:'center'
                    }}
                >
                    <Text style={{color:colors.white,fontSize:30}} >Choose Your Card</Text>
                </View>
                    <View
                        style={{
                            flex: 1,
                            marginTop: 10,
                            backgroundColor: colors.black2,
                            borderTopRightRadius: 30,
                            paddingVertical: 5,
                            borderTopLeftRadius: 30,
                            // alignSelf:'center',
                            paddingTop:20,
                            width:'100%'
                        }}
                    >
                        <RadioGroup color={colors.yellow}  >
                            {CARD_DATA.map(item => {
                                return (
                                    <View
                                    style={{
                                        flexDirection: 'row',
                                        marginHorizontal: 40,
                                        marginTop: 10,
                                        paddingBottom: 10,
                                        borderBottomColor: colors.black1,
                                        borderBottomWidth: 1,
                                        alignItems: 'center',
                                    }}>
                                    {/* <TouchableOpacity
                                        onPress={() => navigation.navigate(routeName.VIEW_CARD)}> */}
                                        <View
                                        style={{
                                            width: wp(50),
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            paddingHorizontal: 5,
                                        }}>
                                        <Icon source={item.url} size={40} />
                                        <ResponsiveText margin={[0, 10, 0, 15]} color={colors.white}>
                                            {item.cardType}
                                        </ResponsiveText>
                                        <ResponsiveText color={colors.white}>
                                            {item.cardNo}
                                        </ResponsiveText>
                                        </View>
                                    {/* </TouchableOpacity> */}
                                    <View
                                        style={{
                                        width: wp(30),
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        paddingHorizontal: 5,
                                        }}>

                                    </View>
                                    </View>
                                );
                            })}

                        </RadioGroup>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(routeName.WALLET, topUpAmount);
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
                        }}>
                        <ResponsiveText color={colors.black} size={3.5}>
                            Click to Pay
                        </ResponsiveText>
                    </TouchableOpacity>
                    </View>

                    <Modal isVisible={isModalVisible} animationIn={'slideInUp'} animationOut={'slideOutDown'} backdropOpacity={0} onBackdropPress={()=>setModalVisible(false)} >
                        <View style={styles.centeredModalView} >
                            <View style={styles.modalView} >
                            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 1)} >
                    <Image source={_1BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 5)} >
                    <Image source={_5BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 10)} >
                    <Image source={_10BCoin} style={styles.image2} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 20)} >
                    <Image source={_20BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 50)} >
                    <Image source={_50BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 100)} >
                    <Image source={_100BCoin} style={styles.image2} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 20 }} >
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.01)} >
                    <Image source={_1BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.05)} >
                    <Image source={_5BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.1)} >
                    <Image source={_10BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.2)} >
                    <Image source={_20BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.5)} >
                    <Image source={_50BCent} style={styles.bCents} />
                </TouchableOpacity>
            </View>
                            </View>
                        </View>
                    </Modal>

                

        </View>
    )
}

export default TopUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black3,
        alignItems:'center',
        paddingTop:20,
    },
    bCLogo: {
        // marginHorizontal: 3,
        height: hp(2.2),
        width: wp(6)
    },
    input: {
        // height: 40,
        color: colors.white,
        fontSize: 70,
        marginBottom: 18,
        // borderWidth: 1,
        // padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.grey1,
        paddingBottom: 5,
    },
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        // margin: 20,
        backgroundColor: colors.grey3,
        borderRadius: 10,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        // height: '40%',
        // width: '60%',
        borderWidth: 1,
        borderColor: colors.black1,
        alignSelf: 'center'
    },
    bCents: {
        marginHorizontal: 3,
        height: hp(8.4),
        width: wp(17),
    },
    image2: {
        height: hp(15),
        width: wp(30.7),
        marginTop: 5,
        borderRadius: 5,
        marginHorizontal: -5,
        marginVertical: -15
    },
})
