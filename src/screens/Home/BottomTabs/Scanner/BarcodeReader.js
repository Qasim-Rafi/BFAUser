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


import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {routeName} from '../../../../constants/routeName'
import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from '../../../../constants/colorsPallet';
import {hp} from '../../../../helpers/Responsiveness';
import {wp} from '../../../../helpers/Responsiveness';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import { useSelector } from 'react-redux';



const BarcodeReader = ({navigation})=> {
    const [scan, setScan] = useState(true)
    const [result, setResult] = useState()
    const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

   const onSuccess = (e) => {
        setResult(e.data)
        setScan(false)
        navigation.navigate(routeName.INVOICE_LIST,e.data)
        
      }
      
      const onReset = () => {
        setResult()
        setScan(true)
  }
    
     


      return (
        <View style={{flex:1, backgroundColor:isThemeDark? colors.black3: colors.bgWhite}} >
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center',paddingBottom:30, backgroundColor:isThemeDark? colors.black3: colors.bgWhite}}>
                <ResponsiveText size={7} color={colors.yellow} >{scan ? "Scan Barcode" : "Barcode Data"  }</ResponsiveText>
          </View>
          <SafeAreaView>
            
              
              <View >
                { result &&
                  <View style={{alignItems:'center', margin:30}}>
                    <ResponsiveText color={isThemeDark? colors.white: colors.black1} textAlign={'center'} size={3.5} >{'Reset for scan again'}</ResponsiveText>
                    <TouchableOpacity
                      onPress={() => {
                          onReset()
                      }}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp(60),
                        marginBottom:40,
                        marginTop:20,
                        height: hp(4),
                        alignSelf: 'center',
                        borderRadius: 7,
                        backgroundColor: colors.yellow,
                      }}>
                      <ResponsiveText color={colors.black} size={3.5}>
                        Reset
                      </ResponsiveText>
                    </TouchableOpacity>
                  </View>
                }
            
                { scan &&
                  <View>
                    <QRCodeScanner
                      reactivate={true}
                      showMarker={true}
                      
                    //   ref={(node) => { this.scanner = node }}
                      onRead={onSuccess}
                      
                    />
                  </View>
                }
              </View>
            
          </SafeAreaView>
          </View>
      );
}

export default BarcodeReader;

