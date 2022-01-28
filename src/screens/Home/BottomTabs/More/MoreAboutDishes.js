import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import Icon from '../../../../components/Icon';
import Header from '../../../../components/Header';
import {globalPath} from '../../../../constants/globalPath';
import ResponsiveText from '../../../../components/RnText';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {getmoreaboutDish} from '../../../../redux/actions/user.actions';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ImageHeader from '../Home/ImageHeader';
export default function MoreAboutDishes({navigation, route}) {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.appReducers.moreaboutDishDetail.data);

  React.useEffect(() => {
    dispatch(getmoreaboutDish(route.params.id));
  }, []);
  console.log(Data, 'moreaboutttttttttt');

  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>

      <ScrollView>
      <ImageHeader navigation={navigation} img={route.params.imageDataB} />
        {Data.length > 0 ? (
          Data.map(item => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: colors.black2,
                    padding: 5,
                    marginTop: 10,
                    marginLeft: 10,
                  }}>
                  <ResponsiveText color={colors.white}>
                    {item.calorieTitle}
                  </ResponsiveText>
                </View>
                {item.restaurantDishCalorie.map(v => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: wp(90),
                        justifyContent: 'space-between',
                        marginTop: 10,
                        marginHorizontal: wp(4),
                      }}>
                      <ResponsiveText
                        margin={[0, 0, 0, 0]}
                        size={3}
                        color={colors.grey}>
                        {v.name}
                      </ResponsiveText>
                      <ResponsiveText color={colors.grey} margin={[0, 0, 0, 0]}>
                        {v.weightage}
                      </ResponsiveText>
                    </View>
                  );
                })}
                {/* <ResponsiveText color={colors.white}>{'Required'}</ResponsiveText> */}
              </View>
            );
          })
        ) : (
          <Text style={{color: colors.white,textAlign:'center'}}>Record not found</Text>
        )}
      </ScrollView>
    </View>
  );
}
