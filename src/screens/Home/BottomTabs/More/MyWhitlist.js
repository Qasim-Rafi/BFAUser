import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../../../components/Icon';
import {hp, wp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import FavouriteDishes from './FavouriteDishes';
import {favouriteTabs, profileTabs} from '../../../../constants/mock';
import Header from '../../../../components/Header';
import {globalPath} from '../../../../constants/globalPath';
import FavouriteRestaurants from './FavouriteRestaurants';
import { useSelector } from 'react-redux';

export default function MyWhitelist({navigation}) {
  const [activeTab, setActiveTab] = React.useState(favouriteTabs[0].id);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    
      <View style={[styles.container,{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 7,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.yellow1,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon source={globalPath.BACK_BLACK_ARROW} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1, flexDirection: 'row', marginTop: -10}}>
          {favouriteTabs.map((items, index) => {
            console.log('favouriteTabs',items)
            return (
              <React.Fragment key={items.id}>
                <TouchableOpacity
                  id={index}
                  onPress={() => setActiveTab(items.id)}
                  style={{
                    width: wp(50),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    backgroundColor:
                      items.id === activeTab ? colors.yellow1 : isThemeDark ? colors.black2 : colors.grey,
                  }}
                  padding={[3, 15]}>
                  <ResponsiveText
                    size={3.5}
                    fontFamily={items.id === activeTab ? 'Boldedium' : undefined}
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
          </View>      
          <View style={{flex:1, backgroundColor:colors.black2, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity >
            <ResponsiveText size={4}>Optional</ResponsiveText>
          </TouchableOpacity>
        </View> */}
        </View>

        {/* <Profile /> */}
         <ScrollView style={{flex:0.9,margin:20}}>
        {activeTab === 1 && <FavouriteDishes navigation={navigation}/>}
        {activeTab === 2 && <FavouriteRestaurants navigation={navigation}/>}
         </ScrollView>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
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
