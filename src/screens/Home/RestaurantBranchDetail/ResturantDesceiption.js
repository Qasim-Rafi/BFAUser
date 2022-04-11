import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import {colors} from '../../../constants/colorsPallet';
const text = 'Description';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {wp} from '../../../helpers/Responsiveness';
import StaticMap from '../../../components/StaticMap';
import {routeName} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteRestaurant,
  RemoveFavoriteRestaurant,
} from '../../../redux/actions/user.actions';

export default function Restaurant_Description(props) {
  const navigation = useNavigation();
  const [data, setData] = React.useState(props.data);
  const [liked, setLiked] = React.useState(props.data.userLiked);

  const dispatch = useDispatch();
  const favDataa = useSelector(
    state => state.appReducers.favoriteRestaurant.data,
  );
  console.log(data, 'resaurantttt');
  console.log(favDataa.some(o => o.id === data.id), 'favDataa');


  return (
    <View>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.priceDesc}>
            <ResponsiveText size={4} color={colors.white}>
              {data.branchAlias}
            </ResponsiveText>
            <ResponsiveText size={3.7} color={colors.grey}>
              {data.areaName}
            </ResponsiveText>
            <ResponsiveText size={4} color={colors.yellow}></ResponsiveText>
          </View>
          {/* <Icon
            size={wp(18)}
            margin={[0, 20, 0, 0]}
            source={props.logo ? {uri: props.logo} : globalPath.RESTAURANT_LOGO}
          /> */}
        </View>

        <View>
          <Image style={{width: 30, height: 25}} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            if(liked)
            {
              dispatch(RemoveFavoriteRestaurant(data))
              setLiked(!liked)
            }
            else{
              dispatch(addFavoriteRestaurant(data))
              setLiked(!liked)

            }

              
          }}>
          <View style={{alignItems: 'center'}}>
          <Icon
            source={
              liked
                ? globalPath.F_HEART
                :
                 globalPath.HEART
            }
          />
            <ResponsiveText top={5} color={colors.yellow}>
              Favourite
            </ResponsiveText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName.MAP_VIEW)}>
          <View style={{alignItems: 'center'}}>
            <Icon source={globalPath.LOCATION} />
            <ResponsiveText top={5} color={colors.yellow}>
              Go To{' '}
            </ResponsiveText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName.CONTACT_US)}>
          <View style={{alignItems: 'center'}}>
            <Icon source={globalPath.CONTACT} />
            <ResponsiveText top={5} color={colors.yellow}>
              Contact
            </ResponsiveText>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Icon source={globalPath.OPERATIONAL_HOURS} />
          <ResponsiveText top={5} color={colors.yellow}>
            Hours
          </ResponsiveText>
        </View>
      </View>
      <View style={{paddingTop: 10, paddingLeft: 20}}>
        <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>
          Business Address
        </ResponsiveText>
        <ResponsiveText
          top={5}
          fontFamily="Regular"
          size={3.5}
          color={colors.grey}>
          {data.branchAddress}
        </ResponsiveText>
      </View>
      <View style={{paddingTop: 10, paddingLeft: 20}}>
        <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>
          District
        </ResponsiveText>
        <ResponsiveText
          top={5}
          fontFamily="Regular"
          size={3.5}
          color={colors.grey}>
          {data.districtName}
        </ResponsiveText>
      </View>
      <View style={{paddingTop: 10, paddingLeft: 20}}>
        <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>
          Premise
        </ResponsiveText>
        <ResponsiveText
          top={5}
          fontFamily="Regular"
          size={3.5}
          color={colors.grey}>
          {data.premiseName}
        </ResponsiveText>
      </View>
      <View style={{paddingTop: 10, paddingLeft: 20}}>
        <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>
          Location On Map
        </ResponsiveText>
        {/* <StaticMap data={data}/> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
  priceDesc: {
    padding: 20,
  },
});
