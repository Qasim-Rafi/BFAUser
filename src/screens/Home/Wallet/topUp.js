import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
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
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [checked, setCheck] = useState(true);

    const topUpAmountComing = route.params
    const topUpAmount = parseFloat(topUpAmountComing).toFixed(2)

    const [number, setNumber] = useState(0)
    const [numeric, setNumeric] = useState(true)

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
                        <TouchableOpacity onPress={()=>setModalVisible(true)} >
                            <TextInput
                                editable={false}
                                onPressIn={ ()=> setModalVisible(true)}
                                style={styles.input}
                                onChangeText={setNumber}
                                value={parseFloat(number).toFixed(2)}
                                maxLength={8}
                                defaultValue={'' + parseFloat(number) + ''}
                                // keyboardType="numeric"
                                showSoftInputOnFocus={false}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setNumber(0)} >
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
                            // navigation.navigate(routeName.WALLET, number.toString().substring(0,9));
                            setModal2Visible(true)
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
                        {/* ------------ ModalView_1 -------------- */}
                        <View style={styles.centeredModalView} >
                            <View style={{flexDirection:'row'}} >
                                <TouchableOpacity style={[styles.keyBoardSelector,{borderTopLeftRadius:10,borderRightWidth:1}]} onPress={()=>{setNumeric(true);setNumber(0)}} >
                                    <Text style={{fontSize:wp(7.2),color:colors.white}} >Numeric</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.keyBoardSelector,{borderTopRightRadius:10}]} onPress={()=>{setNumeric(false);setNumber(0);}} >
                                    <Text style={{fontSize:wp(7.2),color:colors.white}} >Bcoin</Text>
                                </TouchableOpacity>
                            </View>

                            {!numeric ? 
                            <View style={styles.modalView} >
                                <View style={{ flexDirection: 'row' }} >
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 1)} >
                                        <Image source={_1BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 5)} >
                                        <Image source={_5BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 10)} >
                                        <Image source={_10BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row' }} >
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 20)} >
                                        <Image source={_20BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 50)} >
                                        <Image source={_50BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 100)} >
                                        <Image source={_100BCoin} style={styles.image2} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 10,alignContent:'center' }} >
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 0.01)} >
                                        <Image source={_1BCent} style={styles.bCents} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 0.05)} >
                                        <Image source={_5BCent} style={styles.bCents} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 0.1)} >
                                        <Image source={_10BCent} style={styles.bCents} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'center', width: '100%', marginTop: 10, marginBottom: 20 }} >
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 0.2)} >
                                        <Image source={_20BCent} style={styles.bCents} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(parseFloat(number) + 0.5)} >
                                        <Image source={_50BCent} style={styles.bCents} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(false)} >
                                        <View style={[styles.bCents,{backgroundColor:colors.yellow1, borderRadius:hp(2.2), alignItems:'center', justifyContent:'center'}]} >
                                            <Text>Done</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                                 : <View style={styles.modalView} >
                                 <View style={{ flexDirection: 'row' }} >
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '1')} >
                                         <Text style={styles.keypadText} >1</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '2')} >
                                        <Text style={styles.keypadText} >2</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '3')} >
                                        <Text style={styles.keypadText} >3</Text>
                                     </TouchableOpacity>
                                 </View>
 
                                 <View style={{ flexDirection: 'row' }} >
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '4')} >
                                        <Text style={styles.keypadText} >4</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '5')} >
                                        <Text style={styles.keypadText} >5</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '6')} >
                                        <Text style={styles.keypadText} >6</Text>
                                     </TouchableOpacity>
                                 </View>
 
                                 <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 10,alignContent:'center' }} >
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '7')} >
                                        <Text style={styles.keypadText} >7</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '8')} >
                                        <Text style={styles.keypadText} >8</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '9')} >
                                        <Text style={styles.keypadText} >9</Text>
                                     </TouchableOpacity>
                                 </View>
                                 <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'center', width: '100%', marginTop: 10, marginBottom: 20 }} >
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '.')} >
                                        <Text style={styles.keypadText} >.</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setNumber(number + '0')} >
                                     <Text style={styles.keypadText} >0</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(false)} >
                                         <View style={[styles.bCents,{backgroundColor:colors.yellow1, borderRadius:hp(2.2), alignItems:'center', justifyContent:'center'}]} >
                                             <Text>Done</Text>
                                         </View>
                                     </TouchableOpacity>
                                 </View>
                             </View>  }
                        </View>
                        {/* ------------ ModalView_1 End -------------- */}
                    </Modal>

                    <Modal
                        isVisible={isModal2Visible}
                        statusBarTranslucent={true}
                        backdropOpacity={0.9}
                        style={{justifyContent: 'flex-end'}}
                        // onModalHide={() => navigation.push('Home')}
                        >
                        {/* ------------ ModalView_2 -------------- */}
                        <View
                            style={{
                            flex: 0.3,
                            backgroundColor: colors.black2,
                            borderRadius: 7,
                            marginBottom: 20,
                            }}>
                            <View
                            style={{
                                flex: 0.2,
                                backgroundColor: colors.black1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTopRightRadius: 7,
                                borderTopLeftRadius: 7,
                            }}>
                            <ResponsiveText color={colors.white} size={3.5}>
                                Confirmation
                            </ResponsiveText>
                            </View>
                            {/* <View
                            style={{
                                flex: 0.18,
                                backgroundColor: colors.black2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginHorizontal: 15,
                            }}>
                            <ResponsiveText color={colors.grey1} size={2.6}>
                                You have successfully paid:
                            </ResponsiveText>
                            </View> */}
                            <View
                            style={{
                                flex: 0.13,
                                backgroundColor: colors.black2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: colors.black1,
                                marginHorizontal: 15,
                            }}>
                            <View style={{flex: 0.55, alignItems: 'center'}}>
                                <ResponsiveText
                                color={colors.yellow}
                                size={3}
                                margin={[0, 10, 0, 0]}>
                                Amount
                                </ResponsiveText>
                            </View>
                            <View style={{flex: 0.45,alignItems:'center'}}>
                                <ResponsiveText color={colors.yellow} size={3}>
                                ${parseFloat(number)}
                                </ResponsiveText>
                            </View>
                            </View>
                            <View
                            style={{
                                flex: 0.13,
                                backgroundColor: colors.black2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: colors.black1,
                                marginHorizontal: 15,
                            }}>
                            <View style={{flex: 0.55, alignItems: 'center'}}>
                                <ResponsiveText
                                color={colors.yellow}
                                size={3}
                                margin={[0, 10, 0, 0]}>
                                Fee
                                </ResponsiveText>
                            </View>
                            <View style={{flex: 0.45,alignItems:'center'}}>
                                <ResponsiveText color={colors.yellow} size={3}>
                                5%
                                </ResponsiveText>
                            </View>
                            </View>
                            <View
                            style={{
                                flex: 0.13,
                                backgroundColor: colors.black2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: colors.black1,
                                marginHorizontal: 15,
                            }}>
                            <View style={{flex: 0.55, alignItems: 'center'}}>
                                <ResponsiveText
                                color={colors.yellow}
                                size={3}
                                margin={[0, 10, 0, 0]}>
                                Total Amount
                                </ResponsiveText>
                            </View>
                            <View style={{flex: 0.45,alignItems:'center'}}>
                                <ResponsiveText color={colors.yellow} size={3}>
                                ${parseFloat(number)  + number* 0.05}
                                </ResponsiveText>
                            </View>
                            </View>
                            
                            <View
                            style={{
                                flex: 0.29,
                                backgroundColor: colors.black2,
                                alignItems: 'center',
                                borderBottomLeftRadius: 7,
                                borderBottomRightRadius: 7,
                            }}>
                            <TouchableOpacity
                                style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: colors.yellow,
                                width: wp(83),
                                height: hp(5),
                                marginTop: 10
                                }}
                                onPress={()=>navigation.navigate(routeName.WALLET, number.toString().substring(0,9))}>
                                <ResponsiveText size={3} color={colors.yellow}>
                                Confirm Top-up
                                </ResponsiveText>
                            </TouchableOpacity>
                            </View>
                            <View
                            style={{
                                flex: 0.29,
                                backgroundColor: colors.black2,
                                alignItems: 'center',
                                borderBottomLeftRadius: 7,
                                borderBottomRightRadius: 7,
                            }}>
                            <TouchableOpacity
                                style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: colors.yellow,
                                width: wp(83),
                                height: hp(5),
                                marginTop:5
                                }}
                                onPress={()=>setModal2Visible(false)}>
                                <ResponsiveText size={3} color={colors.yellow}>
                                Cancel
                                </ResponsiveText>
                            </TouchableOpacity>
                            </View>
                        </View>
                        {/* ------------ ModalView_2 End -------------- */}
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
        fontSize: wp(16),
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
        position:'absolute',
        bottom:hp(5),
        left:wp(12),
        right:wp(12)

    },
    modalView: {
        // margin: 20,
        backgroundColor: colors.grey4,
        borderRadius: 10,
        // padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        // height: '40%',
        width: '120%',
        borderWidth: 1,
        borderColor: colors.black1,
        
        // alignSelf: 'center'
    },
    bCents: {
        // marginHorizontal: 20,
        height: hp(8.4),
        width: wp(17),
        alignSelf:'center'
    },
    image2: {
        height: hp(15),
        width: wp(30.7),
        marginTop: 5,
        borderRadius: 5,
        marginHorizontal: -5,
        marginVertical: -15,
        alignSelf:'center'
    },
    imageContainer:{
        height: hp(12),
        width: wp(25),
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    keyBoardSelector:{
        backgroundColor:colors.lightBlack,
        // height:,
        width:'50%',
        alignItems:'center',
        marginBottom:-2
    },
    keypadText:{
        color: colors.white,
        fontSize:wp(12),
    }
})
