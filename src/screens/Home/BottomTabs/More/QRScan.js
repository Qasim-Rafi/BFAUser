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



const QRScan = ({navigation})=> {
    const [scan, setScan] = useState(true)
    const [result, setResult] = useState()

   const onSuccess = (e) => {
        setResult(e.data)
        setScan(false)
        
      }
    
     


      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              
              <View style={styles.body}>
                { result &&
                  <View style={styles.sectionContainer}>
                    <Text style={styles.centerText}>{result}</Text>
                  </View>
                }
            
                { scan &&
                  <View style={styles.sectionContainer}>
                    <QRCodeScanner
                      reactivate={true}
                      showMarker={true}
                      
                    //   ref={(node) => { this.scanner = node }}
                      onRead={onSuccess}
                      topContent={
                        <Text style={styles.centerText}>
                          Scan your QRCode!
                        </Text>
                      }
                      bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                          <Text style={styles.buttonText}>Cancel Scan</Text>
                        </TouchableOpacity>
                      }
                    />
                  </View>
                }
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
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