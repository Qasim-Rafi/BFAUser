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
import {VictoryPie, VictoryChart, VictoryBoxPlot, VictoryLabel} from 'victory-native';
export default function CalorieCount(props) {
  return (
    <View style={{backgroundColor:colors.black2}}>
      <View style={{margin: 20}}>
        <ResponsiveText size={4} color={colors.white}>
          Calorie Count
        </ResponsiveText>

        <View
          style={{
            backgroundColor: colors.skyblue2,
            height: 5,
            width: '100%',
            borderRadius: 20,
            paddingBottom: 3,
            marginVertical: 5,
            marginRight:10,
          }}></View>
      </View>
      <View style={{height: wp(65), flexDirection: 'row'}}>
        <VictoryPie
          labels={() =>null}
          colorScale={[colors.skyblue2, colors.yellow, colors.green1, colors.blue1, colors.white]}
          width={wp(50)}
          height={wp(50)}
          standalone={true}
          innerRadius={wp(10)}
          
         
          data={[
            {x: 1, y: 20},
            {x: 2, y: 15},
            {x: 3, y: 10},
            {x: 4, y: 15},
            {x: 5, y: 50},
          ]}
            
           />
           
            

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
                    backgroundColor: colors.white,
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
      <Text style={{
position: 'absolute',
top:'50%',
color: '#FFE600',
left:'20%'
}}> 85% </Text>
      {/* <CaloriesList data={DATA} /> */}
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
