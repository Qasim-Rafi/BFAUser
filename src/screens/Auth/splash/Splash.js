import React,{useState, useEffect} from 'react';
import {View, StyleSheet, ImageBackground, StatusBar, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import AnimatedSplash from "react-native-animated-splash-screen";

import Screen from '../../../components/Screen';
import {colors} from '../../../constants/colorsPallet';
import {routeName} from '../../../constants/routeName';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';

const Splash = ({navigation}) => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 2000);
    
  // }, []);
setTimeout(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName.LOGIN}],
      }),
    );
  }, 1500)

  

  return (
    <ImageBackground  style={styles.container} source={globalPath.BG_IMAGE}>
      <StatusBar    translucent={true} backgroundColor={'transparent'} />
      <Icon width={wp(70)} height={hp(70)} source={globalPath.BALI_LOGO} />
      {/* <AnimatedSplash
        logoWidht={wp(70)}
        logoHeight={hp(70)}
        isLoaded={isLoaded}
        backgroundColor={"#ffff0000"}
        logoImage={globalPath.BALI_LOGO}
      >
        
      </AnimatedSplash> */}
     
    </ImageBackground>
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
