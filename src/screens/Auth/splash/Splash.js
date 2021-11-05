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
import { useDispatch } from 'react-redux';
import { getBfaPartners } from '../../../redux/actions/user.actions';

const Splash = ({ navigation }) => {

  //Validation Login
  const [Token, setToken] = React.useState(null);
  const [logo, setLogo] = React.useState(true);
  const [text, setText] = React.useState(false);
  const dispatch= useDispatch();

  const fetchAndSetUser = async () => {
    const token = await AsyncStorage.getItem('@token');
    const id = await AsyncStorage.getItem('@userId');
    console.log('user Id: ', id);
    console.log(token, 'token');
    setToken(token);
    if (token === null) {
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
      navigation.dispatch(
            StackActions.replace('Home')
          )
      // console.log('condition True');
      // dispatch(getBfaPartners({navigation:navigation}))

      // setTimeout(() => {

      //   setLogo(false)
      //   setTimeout(() => {
        
      //   navigation.dispatch(
      //     StackActions.replace('Home')
      //   )
      //   }, 2000)
      // }, 2000)
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
          <View>
          <View style={{paddingLeft:20}}>
          <ResponsiveText color={colors.grey} size={3} >In </ResponsiveText>
          <ResponsiveText margin={[-5,0,0,10]} color={colors.yellow} fontFamily={'Bold'} size={3.2} >Collaboration</ResponsiveText>
          <View style={{alignSelf:'flex-end', marginRight:20, marginTop:-5}} >
          <ResponsiveText color={colors.grey} size={3} >with</ResponsiveText>
          </View>
          </View>
        <Icon source={globalPath.BFA_LOGO} size={150} />
        </View>
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
