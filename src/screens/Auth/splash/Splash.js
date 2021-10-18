import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import Screen from '../../../components/Screen';
import { colors } from '../../../constants/colorsPallet';
import { routeName } from '../../../constants/routeName';
import { globalPath } from '../../../constants/globalPath';
import { hp, wp } from '../../../helpers/Responsiveness';
import ResponsiveText from '../../../components/RnText';

import Icon from '../../../components/Icon';

const Splash = ({ navigation }) => {

  //Validation Login
  const [Token, setToken] = React.useState(null);
  const [logo, setLogo] = React.useState(true);
  const [text, setText] = React.useState(false);

  const fetchAndSetUser = async () => {
    const token = await AsyncStorage.getItem('@token');
    console.log(token, 'token');
    setToken(token);
    if (Token === null) {
      setTimeout(() => {

        setLogo(false)
        setTimeout(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: routeName.LOGIN }],
            }),
          );
        }, 2000)
      }, 2000)
    }
    else {
      // console.log('condition True');
      navigation.dispatch(
        StackActions.replace('Home')
      )

    }
  }


  React.useEffect(() => {
    fetchAndSetUser();
  }, [])


  return (

    <View style={{ backgroundColor: colors.black, flex: 1, justifyContent: 'center', alignItems: 'center' }} >

      {
        logo ?
          <Icon source={globalPath.BALI_ICON} size={150} />
          :
          <Icon source={globalPath.BFA_LOGO} size={150} />
      }

    </View>




    //     <ImageBackground  style={styles.container} source={globalPath.BG_IMAGE}>
    //       <StatusBar    translucent={true} backgroundColor={'transparent'} />
    // <View style={{justifyContent:'center',alignItems:'center',flex:0.75}}>
    // { logo ?
    //   <Icon width={wp(20)} height={hp(30)} source={globalPath.BFA_LOGO} margin={[100,0,0,0]} />
    //   : <View style={{height:hp(30), width:wp(20), marginTop:100}} ></View>
    // }

    // {text ? 
    // <View>
    // <Icon width={wp(70)} height={hp(15)} source={globalPath.BALI_LOGO} />
    // </View>
    // : <View style={{width:wp(70), height:hp(15)}} ></View>
    // }

    // </View>
    // <View style={{justifyContent:'flex-end', flex:0.25}}>
    //   <View style={{paddingHorizontal:30,marginBottom:20, paddingVertical:10, backgroundColor:colors.black1}} >
    //   <ResponsiveText size={3.5} color={colors.white} >Powered by: <ResponsiveText size={3.5} color={colors.yellow} >www.Fabintel.com</ResponsiveText></ResponsiveText>
    //   </View>
    //   </View>


    //      {/* <AnimatedSplash
    //         logoWidht={wp(70)}
    //         logoHeight={hp(70)}
    //         isLoaded={isLoaded}
    //         backgroundColor={"#ffff0000"}
    //         logoImage={globalPath.BALI_LOGO}
    //       >

    //       </AnimatedSplash> */}

    //     </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
});
export default Splash;
