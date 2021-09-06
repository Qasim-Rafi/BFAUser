import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import { colors } from '../constants/colorsPallet';
export const FacilityList = props => {
  const {data, title} = props;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}>
      {data.map((item, index) => {
        return (
          <View
            style={{
              borderRadius: 18,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.yellow,
              marginHorizontal: 10,
              padding: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14}}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonShape: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    marginHorizontal: 10,
    padding: 10,
    marginTop: 10,
  },
});
