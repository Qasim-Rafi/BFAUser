import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import { colors } from '../../../constants/colorsPallet'

import Header from '../../../components/Header'

import historyLogo from '../../../assets/icons/history-2.png'
import topUpLogo from '../../../assets/icons/top-up.png'
import transferLogo from '../../../assets/icons/transfer-2.png'

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

import infoLogo from '../../../assets/icons/info-g.png'
import { globalPath } from '../../../constants/globalPath'


const Wallet = (props) => {

    const navigation = useNavigation()
    const route = useRoute()

    const [number, setNumber] = useState(10.00)
    const [modalVisible, setModalVisible] = useState(false)

    navigation.setOptions({
        headerShown:true,
        headerStyle:{
            backgroundColor:colors.black3,
            alignItems:'center'
        },
        headerTintColor: '#fff'
    })

    return (
        <View style={styles.container}>
            {/* <Header iconPath={globalPath.BACK_ARROW} navigation={navigation} /> */}
            {/* <Text style={{color:'white',fontSize:70}} >10.00</Text> */}
            <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                // placeholder="useless placeholder"
                maxLength={5}
                defaultValue='10.00'
                keyboardType="numeric"
                onPressOut={()=>setNumber}
            />
            <View style={{flexDirection:'row',paddingBottom:20}} >
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                        <View style={styles.imageContainer} >
                            <Image source={historyLogo} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:'white'}}>History</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                        <View style={styles.imageContainer} >
                            <Image source={transferLogo} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:'white'}}>Transfer</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                        <View style={styles.imageContainer} >
                            <Image source={topUpLogo} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:'white'}}>Top-Up</Text>
                </View>

            </View>

            <View style={styles.infoS} >

                <Text style={{color:'white',fontSize:20}}>BND $1 = 1 Bitcoin </Text>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                    <Image source={infoLogo} style={{height:20,width:20,marginLeft:5}} />    
                </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row'}} >
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

            <View style={{flexDirection:'row',justifyContent:'center' }} >
                <Image source={_1BCent} style={{marginHorizontal:-20, height:100,width:100}} />
                <Image source={_5BCent} style={{marginHorizontal:-18,height:105,width:105}} />
                <Image source={_10BCent} style={{marginHorizontal:-15,height:110,width:110}} />
                <Image source={_20BCent} style={{marginHorizontal:-10,height:115,width:115}} />
                <Image source={_50BCent} style={{marginHorizontal:-8,height:120,width:120}} />
            </View>

            <Text style={{color:'white',fontSize:19}}>Your BCoin Balance is:</Text>
            <Text style={{color:'white',fontSize:70}} >${number}</Text>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                //   Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView} >

                        <View style={[styles.tableModal,{backgroundColor:colors.yellow1,borderTopRightRadius:20,borderTopLeftRadius:20}]} >
                            <Text style={{borderWidth:1,borderColor:'black',width:'50%',textAlign:'center',fontSize:20,borderTopLeftRadius:20}} >BND</Text>
                            <Text style={{borderWidth:1,borderColor:'black',width:'50%',textAlign:'center',fontSize:20,borderTopRightRadius:20}} >BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >0.001 BND</Text>
                            <Text style={styles.modalText} >0.001 BCents</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >0.005 BND</Text>
                            <Text style={styles.modalText} >0.005 BCents</Text>
                        </View>
                        
                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >0.10 BND</Text>
                            <Text style={styles.modalText} >0.10 BCents</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >0.20 BND</Text>
                            <Text style={styles.modalText} >0.20 BCents</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >0.50 BND</Text>
                            <Text style={styles.modalText} >0.50 BCents</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >1 BND</Text>
                            <Text style={styles.modalText} >1 BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >5 BND</Text>
                            <Text style={styles.modalText} >5 BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >10 BND</Text>
                            <Text style={styles.modalText} >10 BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >20 BND</Text>
                            <Text style={styles.modalText} >20 BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >50 BND</Text>
                            <Text style={styles.modalText} >50 BCoin</Text>
                        </View>

                        <View style={styles.tableModal} >
                            <Text style={styles.modalText} >100 BND</Text>
                            <Text style={styles.modalText} >100 BCoin</Text>
                        </View>


                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} >
                            <View style={{height:30,width:200,backgroundColor:colors.yellow1,alignItems:'center',justifyContent:'center',borderRadius:15,marginTop:5}} >
                                <Text>Close</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black3,
        alignItems:'center',
        // paddingTop:20,
    },
    image:{
        height:40,
        width:40,
        // paddingHorizontal:5,
        // borderRadius:5,
        // marginHorizontal:5
    },
    image2:{
        height:130,
        width:130,
        marginTop:5,
        borderRadius:5,
        marginHorizontal:-5,
        marginVertical:-5
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:85,
        width:85,
        marginHorizontal:5,
        // paddingHorizontal:5,
        borderRadius:8,
        backgroundColor:'#5d5d5d'
    },
    infoS:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20, 
        borderWidth:1, 
        borderColor:'white', 
        width:'100%',
        flexDirection:'row',
    },
    input: {
        // height: 40,
        fontSize:70,
        marginBottom: 12,
        // borderWidth: 1,
        // padding: 10,
        borderBottomWidth:2,
        borderBottomColor:'white'
      },
      centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // margin: 20,
        backgroundColor: "grey",
        borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        height:'40%',
        width:'60%'
      },
      tableModal:{
          flexDirection:'row',
          width:'100%',
          alignItems:'center',
          justifyContent:'center'
      },
      modalText:{
        borderBottomWidth:1,
        borderRightWidth:1,
        borderColor:'black',
        width:'50%',
        textAlign:'center',
        fontSize:15
    }
})