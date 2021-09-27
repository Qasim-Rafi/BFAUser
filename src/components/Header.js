import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import RText from './Basics/RText';
import {hp, wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import {globalPath} from '../constants/globalPath';
import ResponsiveText from './RnText';
import {routeName} from '../constants/routeName';
import {colors} from '../constants/colorsPallet';

const Header = ({
  navigation,
  showRightMenu = true,
  inputWidth = wp(58),
  


  
  ...props
}) => {

  const [searchBar, toggleSearchBar] = React.useState('false');
  return (
    <View style={[styles.header,{paddingVertical:1, justifyContent: props.iconPath ? undefined : 'center'}]}>
      <TouchableOpacity
      onPress={()=>{props.iconPath ? navigation.goBack() : null}}
        style={{
          height: hp(6.4),
          width: wp(10.4),
          backgroundColor:props.iconPath ? colors.black1: undefined,
          justifyContent: 'center',
          alignItems: 'center',
    
          borderRadius: 10,
          marginEnd: 5,
        }}>
        <Icon
          margin={[0, 0, 0, 0]}
          size={props.iconPath ? 25 : 36}
          source={props.iconPath ? props.iconPath : globalPath.BALI_ICON}
        />
      </TouchableOpacity>
      {props.iconPath ? <View />
      : 
      <View style={{backgroundColor:searchBar==='true'? colors.black1 : colors.black2, alignItems:'center',justifyContent:'center', flexDirection:'row', borderRadius:10, marginHorizontal:2, paddingHorizontal:5}}>
      <TouchableOpacity onPress={()=>{searchBar==='true'? navigation.navigate(routeName.FeaturedSearch) : toggleSearchBar('true')}} style={{marginStart:5}}>
        <View><Icon source={globalPath.SEARCH_LOGO} size={25} /></View>
      </TouchableOpacity>
      <TouchableOpacity >
        {/* // onPress={() => searchBar==='true'? navigation.navigate(routeName.FeaturedSearch) : undefined}> */}
        <Input
          editable={searchBar==='true'? true : false}
          fontSize={11}
          onSubmitEditing={()=>{}}
          placeholder={searchBar==='true'? "Search Dishes, Restaurants or Promo" : ""}
          padding={[0, 0, 0, 5]}
          containerStyle={{backgroundColor:searchBar==='false'? colors.black2 : undefined}}
          height={hp(6)}
          width={inputWidth}
        />
      </TouchableOpacity>
      </View>}
      {showRightMenu && (
        
        props.iconPath ? <View/> 
          :
          <TouchableOpacity
          onPress={() => navigation.navigate(routeName.PROFILE_SCREEN)}>
          <Icon
            margin={[0, 0, 0, 5]}
            borderRadius={10}
            size={(wp(10), hp(6))}
            source={globalPath.PROFILE_LOGO}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  header: {
    backgroundColor: colors.black2,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    
  },
  mainView: {
    width: '100%',
    height: wp(14),
    flexDirection: 'row',
    // marginTop: wp(10),
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {color: colors.black, fontFamily: Fonts.Bold, fontSize: wp(1.2)},
};

export default Header;
