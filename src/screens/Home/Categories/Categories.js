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
  // const [index, setindex] = useState(4);
  // var index=4;

  const newArray = [];
  data.forEach(obj => {
    if (!newArray.some(o => o.name[0] === obj.name[0])) {
      newArray.push({ ...obj })
    }

  });

  const [activeAlphabet, setActiveAlphabet] = useState(null);
  const scrollRef = useRef(null)
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  const ScrollHandler = (item, index) => {
    setActiveAlphabet(item.title)
    console.log("Items>>>>", item, index)
    scrollRef?.current.scrollToIndex({ index, viewOffset: hp(22) })

  }; 606
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
          {data.filter(i => i.name[0] == item.name[0]).map((v, index) => {
            // if (i.name[0] == item.name[0]) {
            return (
              <View style={{ paddingLeft: 25, justifyContent: 'center', paddingVertical: 2 }}>
                <TouchableOpacity  onPress={() =>
                      props.navigation.navigate(routeName.DISH_DETAIL, { dish: url })
                    }>
                <Text style={styles.title}>{v.name}</Text>
                </TouchableOpacity>
              </View>)
          }
            // }
          )}
        </View>

      </View>
    )
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: colors.grey3 }]}>
        <View style={{ borderRadius: 2 }}>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ margin: 5, backgroundColor: colors.yellow, paddingVertical: 10, alignSelf: 'flex-start', paddingHorizontal: 10, borderRadius: 25 }}>
            <Icon source={globalPath.BACK_ARROW} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.white, width: wp(75), textAlign: 'center' }} >View Cuisines and Categories</Text>
        <Icon source={globalPath.SEARCH_LOGO} size={20} />


      </View>
      <View style={{ position: 'absolute', height: '85%', marginRight: 10, width: wp(5), backgroundColor: '#383838', zIndex: 5000, right: 0, marginTop: hp(10), alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
        {newArray.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {

          return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity style={{ marginBottom: 2, backgroundColor: colors.white, height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 1000 }} onPress={() => ScrollHandler(item, index)}>
                <ResponsiveText color={colors.black1}>{item.name[0]}</ResponsiveText>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>

      <View style={{ flex: 0.9, paddingTop: 10, padding: 10 }}>
        <FlatList
          ref={scrollRef}
          contentContainerStyle={{ paddingVertical: 10 }}
          data={newArray.sort((a, b) => a.name.localeCompare(b.name))}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        // onViewableItemsChanged={onViewRef}
        // viewabilityConfig={viewConfigRef.current}
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