import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../../../../components/Header';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {MY_REVIEWS_DATA} from '../../../../constants/mock';
import {useSelector, useDispatch} from 'react-redux';
import {getAllReviews} from '../../../../redux/actions/user.actions';
import moment from 'moment';
export default function MyReviews({navigation}) {
  const Reviews = useSelector(state => state.appReducers.getAllReviews.data);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  console.log('revewssssss', Reviews);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
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
      <View style={{flex: 0.9}}>
        <ScrollView>
          <ResponsiveText
            margin={[30, 20, 20, 20]}
            size={4}
            color={isThemeDark? colors.yellow : colors.black}>
            My Reviews
          </ResponsiveText>

          <View style={{marginBottom: 50}}>
            {Reviews.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 20,
                    marginLeft: 40,
                    backgroundColor: colors.black2,
                    padding: 10,
                    borderRadius: 7,
                    marginBottom: 10,
                  }}>
                  <Icon
                    borderColor={colors.grey}
                    borderWidth={10}
                    margin={[1, 0, 0, -33]}
                    source={{uri: item.fullPath}}
                    borderRadius={40}
                    size={50}
                  />

                  <View style={{justifyContent: 'center', paddingRight: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: wp(70),
                        marginLeft: 15,
                      }}>
                      <ResponsiveText color={colors.white} size={3.5}>
                        {item.restaurantBranchName}
                      </ResponsiveText>
                      <ResponsiveText color={colors.grey} size={2.5}>
                        {moment(new Date()).format(' MMMM Do YYYY')}
                      </ResponsiveText>
                    </View>
                    <View style={{alignItems: 'flex-start', marginLeft: 15}}>
                      <AirbnbRating
                        showRating={false}
                        isDisabled={true}
                        count={5}
                        defaultRating={item.starCount}
                        size={11}
                      />
                    </View>
                    <View
                      style={{
                        marginRight: 10,
                        marginLeft: 15,
                        overflow: 'hidden',
                      }}>
                      <ResponsiveText
                        color={colors.grey}
                        size={3}
                        margin={[5, 10, 0, 0]}>
                        {item.reviews}
                      </ResponsiveText>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
