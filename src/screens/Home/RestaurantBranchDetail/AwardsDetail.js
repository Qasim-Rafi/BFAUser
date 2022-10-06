import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {AwardsMenuSectionsData} from '../../../constants/mock';
import {wp, hp} from '../../../helpers/Responsiveness';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {useDispatch, useSelector} from 'react-redux';
import {awardsRestaurant} from '../../../redux/actions/user.actions';
import Icon from '../../../components/Icon';
import { routeName } from '../../../constants/routeName';

export default function AwardsDetail(props) {
  const counter = useSelector(state => state.appReducers.restaurantDetail.data);
  console.log('Awards_statee', props.data);
  const [data, setData] = React.useState(props.data);


  return (
    <View style={{flex: 1, marginTop: 20}}>
      <ScrollView>
      {data.map((data, index) => (
        data?.dishlist.filter((v)=>v.awardName!="In Review").map((item, index) => {
        return (
          <TouchableOpacity
          onPress={() =>
            props.navigation.push(routeName.DISH_DETAIL, { dish: item,})}
            style={{
              height: wp(20),
              backgroundColor: colors.black2,
              borderRadius: 5,
              marginBottom: 4,
              padding: 5,
              flexDirection: 'row',
              overflow: 'hidden',
            }}>
            <Icon source={{uri:item.imageDataB}} borderRadius={5} size={70} />

            <View style={{flex: 1, marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={2.9} color={colors.white}>
                  {item.titleD}
                </ResponsiveText>
                <ResponsiveText
                  color={'grey'}
                  numberOfLines={1}
                  margin={[0, 0, 6, 0]}
                  // maxWidth={'60%'}
                >
                  ...................................................................................................
                </ResponsiveText>
              </View>
              <ResponsiveText color={'grey'} numberOfLines={2} size={2.7}>
                {item.awardName}
              </ResponsiveText>
            </View>
            <View style={{width: '15%', overflow: 'hidden'}}>
              <ResponsiveText
                margin={[4, 8, 0, 0]}
                color={colors.yellow}
                position="flex-end">
                {item.price}$
              </ResponsiveText>
            </View>
          </TouchableOpacity>
        );
              })
      ))}
      </ScrollView>
    </View>
  );
}
