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
import routeName from '../../../../constants/routeName'
import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from '../../../../constants/colorsPallet';
import {hp} from '../../../../helpers/Responsiveness';
import {wp} from '../../../../helpers/Responsiveness';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';



const QRScan = ({navigation})=> {
    const [scan, setScan] = useState(true)
    const [result, setResult] = useState()
    console.log('eedewferf');
    

   const onSuccess = (e) => {
        setResult(e)
        console.log(e);
        setScan(false)
        getOrderData(e.data);
        
      }
    const getOrderData=(id)=>{

    }
     


      return (
        <View style={{flex:1, backgroundColor:colors.black3}} >
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center',paddingBottom:30, backgroundColor:colors.black3}}>
                <ResponsiveText size={7} color={colors.yellow} >{scan ? "Scan Qr Code" : "QR Code Data"  }</ResponsiveText>
          </View>
          <SafeAreaView>
            
              
              <View >
                { result &&
                  <View style={{alignItems:'flex-start', margin:30}}>
                    <ResponsiveText color={colors.white} size={3.5} >{result}</ResponsiveText>
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

export default QRScan;

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
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
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
  });