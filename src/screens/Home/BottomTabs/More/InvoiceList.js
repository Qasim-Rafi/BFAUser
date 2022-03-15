import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Button
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import routeName from '../../../../constants/routeName'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { colors } from '../../../../constants/colorsPallet';
import { hp } from '../../../../helpers/Responsiveness';
import { wp } from '../../../../helpers/Responsiveness';
import { globalPath } from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { INVOICE_DATA } from '../../../../constants/mock';




const InvoiceList = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [checked, setCheck] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: colors.black3 }} >
            <View style={{ flexDirection: 'row', padding: 7, backgroundColor: colors.black2 }}>
                <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
                <View style={{ alignSelf: 'center', marginLeft: '27%' }}>
                    <ResponsiveText size={4} color={colors.yellow} >Invoice</ResponsiveText>
                </View>
            </View>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ width: wp(100), marginTop: 0, alignItems: 'center', alignSelf: 'center' }} >
                        <Icon size={200} source={globalPath.INVOICE_ICON} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(8) }}>
                        <ResponsiveText size={4} color={colors.white} >OrderId: <ResponsiveText color={colors.grey1}>1233</ResponsiveText></ResponsiveText>
                        <ResponsiveText size={4} color={colors.white} >Date: <ResponsiveText color={colors.grey1}>1233</ResponsiveText></ResponsiveText>
                    </View>

                    <View style={styles.Container} >
                        <View style={{ backgroundColor: colors.black2, height: hp(10), borderRadius: 5, marginTop: 10, flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: colors.black1, }}>
                            <View style={{ marginTop: '2%', marginLeft: '2%', }}><Icon source={globalPath.MENU_ICON} borderRadius={5} size={65} /></View>
                            <View style={{ marginTop: '2%', marginLeft: '2%' }}>
                                <View style={{ flexDirection: 'row', }} >
                                    <ResponsiveText color={colors.white}>{"item.jobTitle"}</ResponsiveText>
                                    <ResponsiveText size={2.8} margin={[0, 0, 0, 5]} color={colors.grey}>.................................$50.50</ResponsiveText>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <ResponsiveText size={2.8} color={colors.yellow}>{"item.restuarantName"}</ResponsiveText>

                                </View>

                            </View>

                        </View>
                        <View style={{ alignItems: 'center', marginTop: '5%' }}>
                            <ResponsiveText color={colors.white}>{"Total Amount"}</ResponsiveText>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: '2%', borderBottomWidth: 1, borderBottomColor: colors.black1, }}>
                            <ResponsiveText size={10} color={colors.yellow}>{"$50.00"}</ResponsiveText>
                        </View>
                        <View>
                            <View
                                style={{
                                    marginTop: 10,
                                    paddingVertical: 5,
                                    alignSelf: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: colors.white, fontSize: 30 }} >Choose Your Card</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 0,
                                    backgroundColor: colors.black2,
                                    borderTopRightRadius: 30,
                                    paddingVertical: 5,
                                    borderTopLeftRadius: 30,
                                    // alignSelf:'center',
                                    paddingTop: 20,
                                    width: '100%'
                                }}
                            >
                                <View style={{ flex: 0.3 }}>
                                    <RadioGroup color={colors.yellow} onSelect={() => setCheck(true)} selectedIndex={0} >
                                        {INVOICE_DATA.map(item => {
                                            return (
                                                <RadioButton
                                                    style={{ alignItems: 'center', marginLeft: wp(2) }}
                                                >

                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            marginHorizontal: wp(2),
                                                            marginTop: 0,
                                                            paddingBottom: 5,
                                                            borderBottomColor: colors.black1,
                                                            
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
                                                            <Icon source={item.url} size={35} />
                                                            <ResponsiveText margin={[0, 10, 0, 15]} color={colors.white}>
                                                                {item.cardType}
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
                                                    <View style={{ borderBottomWidth: 1,borderBottomColor: colors.black1,}}>
                                                    <ResponsiveText color={colors.white} size={3}>
                                                        {item.cardNo}
                                                    </ResponsiveText>
                                                    </View>
                                                </RadioButton>
                                            );
                                        })}

                                    </RadioGroup>
                                </View>
                                <View style={{ flex: 0.7, marginTop: 50, marginLeft: 40 }} >

                                    <TouchableOpacity
                                        onPress={() => {
                                            // navigation.navigate(routeName.WALLET, number.toString().substring(0,9));
                                            checked ? setModal2Visible(true) : showMessage({ message: 'Please Select a payment method', type: 'warning' })
                                        }}
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: wp(75),
                                            // marginTop: 90,
                                            height: hp(5),
                                            // alignSelf: 'center',
                                            borderRadius: 7,
                                            backgroundColor: colors.yellow,
                                            position: 'absolute',
                                            bottom: 10, zIndex: 2
                                        }}>
                                        <ResponsiveText color={colors.black} size={3.5}>
                                            Pay Now
                                        </ResponsiveText>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default InvoiceList;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    Container: {
        backgroundColor: colors.black2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: wp(3),
        flex: 1
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },

    buttonTouchable: {
        padding: 16,
    },
});