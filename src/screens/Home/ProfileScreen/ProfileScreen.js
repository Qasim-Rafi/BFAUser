import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import {ScrollView, } from 'react-native-gesture-handler';

import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {Spacing} from '../../../constants/spacingScale';
import Line from '../../../components/Line';
import {routeName} from '../../../constants/routeName';
import {colors} from '../../../constants/colorsPallet';
import Profile from './Profile';
import Optional from './Optional';
import { profileTabs } from '../../../constants/mock';

export default function ProfileScreen({navigation}) {

 const [activeTab, setActiveTab] = React.useState(profileTabs[0].id);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.screeninfo}>
            <View style={{flexDirection:'row',justifyContent:"space-between",flex:.40}}> 
                <TouchableOpacity style={{backgroundColor:colors.black3,height:hp(5),padding:9,borderRadius:20}}onPress={()=>{navigation.goBack()}}><Icon source={globalPath.BACK_BLACK_ARROW}/></TouchableOpacity>
                <ResponsiveText size={4}>Profile</ResponsiveText>
                <TouchableOpacity style={{backgroundColor:colors.white,height:hp(5),padding:9,borderRadius:20}}><Icon source={globalPath.EDIT_PROFILE}/></TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',flex:.45}}>
                <Image style={{width:100,height:100,borderRadius:50,marginBottom:10}} source={globalPath.PROFILE_LOGO}/>
                <ResponsiveText size={4}>Pg Hassan PHD</ResponsiveText>
                {/* <ResponsiveText color={colors.lightBlack} size={3}>umargani@gmail.com</ResponsiveText> */}
            </View>
        </View>
        <View style={{flex:0.09, flexDirection:'row', marginTop:-10}}>

             {profileTabs.map((items, index) => {
              return (
                <React.Fragment key={items.id}>
                  <TouchableOpacity
                    id={index}
                    onPress={() => setActiveTab(items.id)}
                    style={{
                        width:wp(50),
                         alignItems: 'center',
                          justifyContent: 'center',
                         marginTop: 10,
                      backgroundColor:
                        items.id === activeTab ? colors.yellow1 :  colors.black2,
                    }}
                    padding={[3, 15]}>
                    <ResponsiveText
                      size={3.5}
                      // fontFamily={items.id === activeTab ? 'Boldedium' : undefined}
                      color={
                        items.id === activeTab ? colors.black : colors.white
                      }>
                      {items.name}
                    </ResponsiveText>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}

          
          {/* <View style={{flex:1, backgroundColor:colors.yellow1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
            <ResponsiveText size={4}>Profile</ResponsiveText>
          </TouchableOpacity>
          </View>      */}
        {/* <View style={{flex:1, backgroundColor:colors.black2, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity >
            <ResponsiveText size={4}>Optional</ResponsiveText>
          </TouchableOpacity>
        </View> */}
        </View>
        
        {/* <Profile /> */}
 {/* <ScrollView style={{flex:0.9,margin:20}}> */}
 
        {activeTab === 1 && <Profile />}
             {activeTab === 2 &&  <Optional />}
            
{/* </ScrollView> */}



      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
  },
  screeninfo: {
    flex: 0.35,
    paddingBottom: wp(10),
    padding: wp(5),
  },
  formArea: {
    flex: 0.65,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    padding: wp(10),
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 10,
    marginBottom: wp(8),
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
