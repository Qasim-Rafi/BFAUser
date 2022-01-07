import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity, FlatList, Image, useColorScheme } from 'react-native';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import ResponsiveText from '../../../components/RnText';
import { globalPath } from '../../../constants/globalPath';
import { exploreCategoryByName } from '../../../constants/mock';
import { hp, wp } from '../../../helpers/Responsiveness';
import { colors } from '../../../constants/colorsPallet';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
export default function Categories({ navigation, route }) {
  const { data } = route.params;
  console.log("dataaaaa: ", data)
  const [activeAlphabet, setActiveAlphabet] = useState(null);
  const scrollRef = useRef(null)
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  const ScrollHandler = (item, index) => {
    setActiveAlphabet(item.title)
    console.log("Items>>>>", item, index)
    scrollRef?.current.scrollToIndex({ index, viewOffset: hp(22) })

  };
  const onViewRef = useCallback(({ viewableItems, changed }) => {
    setActiveAlphabet(changed[0].item.title);
    console.log("Visible items are", viewableItems[0]);
    console.log("Changed in this ", changed[0].item.title);
  }, []);
  const renderItem = ({ item }) => {

    return (
      <View style={styles.item}>
        <Text style={styles.header}>{item.name[0]}</Text>
        <View style={{ borderRadius: 10, backgroundColor: colors.black2, paddingVertical: 10 }}>
          {data.map((item, index) => {
            return (
              <View style={{ paddingLeft: 25, justifyContent: 'center', paddingVertical: 2 }}>
                <Text style={styles.title}>{item.name}</Text>
              </View>)
          })}
        </View>

      </View>
    )
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: colors.grey3 }]}>

        <View style={{ backgroundColor: colors.grey4, borderRadius: 2 }}>
          <TouchableOpacity style={{ borderRadius: 10 }} onPress={() => { navigation.goBack() }}>
            <View style={{ height: hp(5), width: wp(10), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Icon source={globalPath.BACK_ARROW} size={20} /></View></TouchableOpacity>
        </View>
        <Text style={{ color: colors.white, width: wp(75), textAlign: 'center' }} >View Cuisines and Categories</Text>
        <Icon source={globalPath.SEARCH_LOGO} size={20} />


      </View>
      <View style={{ position: 'absolute', height: hp(86), marginRight: 10, width: wp(5), backgroundColor: '#383838', zIndex: 1000, right: 0, marginTop: hp(10), alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
        {data.map((item, index) => {

          return (
            <TouchableOpacity style={{ marginBottom: 2, backgroundColor: activeAlphabet === item.firstLetter ? colors.white : undefined, height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 1000 }} onPress={() => ScrollHandler(item, index)}>
              <ResponsiveText color={colors.yellow}>{item.name[0]}</ResponsiveText>
            </TouchableOpacity>
          )
        })}
      </View>

      <View style={{ flex: 0.9, paddingTop: 10, padding: 10 }}>
        <FlatList
          ref={scrollRef}
          contentContainerStyle={{ paddingVertical: 10 }}
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          onViewableItemsChanged={onViewRef}
          viewabilityConfig={viewConfigRef.current}
        />
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.black,
  },

  item: {
    // height:250,
    // backgroundColor:'red'
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: colors.white
  },
  title: {
    paddingTop: 5,
    color: colors.white,
    fontSize: 14
  },
  header: {
    color: colors.yellow,
    flex: 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,

  },
});