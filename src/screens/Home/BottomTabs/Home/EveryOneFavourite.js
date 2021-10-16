import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {routeName} from '../../../../constants/routeName';
import {
  advertisementBannerFakeDATA,
  everyoneFavoriteFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import {hp, wp} from '../../../../helpers/Responsiveness';
const EveryOneFavourite = (props) => {
   const [arrayData, setArrayData] = useState(ourRecommendationFakeDATA);
    
   
    

  return (
    <>

      <View style={styles.everyOneFavoriteHeaderSection}>
        <ResponsiveText size={4} margin={[0,0,0,0]} color={colors.white}>
          People's Choice 
        </ResponsiveText>
        <View style={{marginRight:-10}} >
        <SeeAllButton navigation={props.navigation} />
        </View>
      </View>
      <View style={styles.everyOneFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {everyoneFavoriteFakeDATA.map((url, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(routeName.RestaurantDetail)
                }>
                <View
                  style={{
                    width: wp(26),
                    height: hp(18),
                    marginHorizontal: 5,
                    borderRadius: 3,
                    overflow: 'hidden',
                    flexDirection: 'row',
                  }}>
                  <ImageBackground
                    imageStyle={{opacity: 0.5}}
                    style={{
                      flex: 1,
                      padding: 5,
                      overflow: 'hidden',
                      justifyContent: 'flex-end',
                    }}
                    source={url.url}>
                    <ResponsiveText
                      fontFamily="Regular"
                      size={3}
                      color={colors.white}>
                      Kaizen sushi
                    </ResponsiveText>
                    <ResponsiveText
                      fontFamily="Light"
                      size={2.5}
                      margin={[-5,0,-5,0]}
                      color={colors.white}>
                      Special sushi
                    </ResponsiveText>
                    
                    <Rating
                      tintColor={'rgba(0, 0, 0, 0.8)'}
                      size={2}
                      
                      imageSize={10}
                      // tintColor={'transparent'}
                      style={{paddingVertical: 10, alignSelf:'flex-start'}}
                    />
                    
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default EveryOneFavourite;

const styles = StyleSheet.create({
  everyOneFavoriteHeaderSection: {
    paddingHorizontal:0,
    paddingTop:10,
    paddingBottom:5,
    marginBottom:5,
    marginRight:15,
    marginLeft:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.black1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor:colors.black2,
    borderColor: colors.black1,
  },
  everyOneFavoriteItemsSection: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    justifyContent: 'center',
    marginLeft:10,
    overflow: 'hidden',
  },
});
