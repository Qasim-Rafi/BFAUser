import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import {colors} from '../../../constants/colorsPallet';
const text = 'Description';
import ResponsiveText from '../../../components/RnText';
import CaloriesList from '../../../components/CalorieList';
import {DATA, FakeCaloriesData} from '../../../constants/mock';
import {wp, hp} from '../../../helpers/Responsiveness';
import {VictoryPie, VictoryChart, VictoryBoxPlot} from 'victory-native';
export default function CalorieCount(props) {
  return (
    <View style={{backgroundColor: '#404040'}}>
      <View style={{margin: 20}}>
        <ResponsiveText size={4} color={colors.white}>
          Calorie Count
        </ResponsiveText>

        <View
          style={{
            backgroundColor: '#40CEFB',
            height: 5,
            width: '100%',
            borderRadius: 20,
            paddingBottom: 3,
            margin: 5,
          }}></View>
      </View>
      <View style={{height: wp(65), flexDirection: 'row'}}>
        <VictoryPie
          labels={() => null}
          colorScale={['#40CEFB', '#EDC54E', '#3CAE3C', '#214FAB', 'white']}
          width={wp(50)}
          height={wp(50)}
          innerRadius={wp(10)}
          data={[
            {x: 1, y: 20},
            {x: 2, y: 15},
            {x: 3, y: 10},
            {x: 4, y: 15},
            {x: 5, y: 50},
          ]}></VictoryPie>

        <View
          style={{
            width: wp(50),
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          {FakeCaloriesData.map((item, index) => {
            return (
              <View
                style={{
                  backgroundColor: item.colors,
                  height: 100,
                  width: 80,
                  borderRadius: 20,
                  paddingBottom: 3,
                  margin: 5,
                }}>
                <View
                  style={{
                    flex: 0.6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ResponsiveText>{item.variant}</ResponsiveText>
                  <ResponsiveText>{item.weightgeInGrams}</ResponsiveText>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    marginHorizontal: 3,
                  }}>
                  <ResponsiveText>{item.percentage}</ResponsiveText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <CaloriesList data={DATA} />
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
