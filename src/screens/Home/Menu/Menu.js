import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {globalPath} from '../../../constants/globalPath';
import {
  BranchMenuSectionsData,
  MenuSectionButtons,
} from '../../../constants/mock';
import {hp, wp} from '../../../helpers/Responsiveness';
import { useCallback } from 'react';
import { routeName } from '../../../constants/routeName';
const Menu = (props) => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = React.useState(BranchMenuSectionsData[0].id);
  const [data,setData]=React.useState(props.data)
  console.log(data,'jjjj')
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 90});
  const ScrollHandler = (item, index) => {
    setActiveTab(item.id);
    console.log('Items>>>>', item, index);
    scrollRef?.current.scrollToIndex({index, viewOffset: hp(22)});
  };
  const onViewableItemsChanged = useCallback(({viewableItems , changed})=>{
    setActiveTab(changed[0].item.id);
    console.log('Changess' , changed);
  },[]);

  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <ResponsiveText color={colors.yellow} margin={[15, 0]}>
          {item.menuCategoryName}
        </ResponsiveText>
        {item.dishlist.map(data => {
          return (
            <View
              style={{
                height: wp(20),
                backgroundColor: colors.lightBlack,
                borderRadius: 5,
                marginBottom: 4,
                padding: 5,
                flexDirection: 'row',
                overflow: 'hidden',
              }}>
              <Image style={{width: '20%', height: '100%'}} source={{uri:data.fullPath}} />
              
              <View style={{flex: 1, marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <ResponsiveText size={2.9} color={colors.white}>
                    {data.dishName}
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
                  {data.description}
                </ResponsiveText>
              </View>
              <View style={{width: '15%', overflow: 'hidden'}}>
                <ResponsiveText
                  margin={[4, 0, 0, 0]}
                  color={colors.yellow}
                  position="flex-end">
                  ${data.price}
                </ResponsiveText>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: 'grey',
          marginHorizontal:10,
          marginVertical:10,
          borderBottomWidth: 1,
        }}>
        {data.map((items, index) => {
          return (
            <React.Fragment key={items.id}>
              <TouchableOpacity
              onPress={()=>ScrollHandler(items,index)}
                style={{
                  //   width: wp(15),
                  borderBottomColor: colors.yellow,
                  borderBottomWidth: items.id === activeTab ? 2 : 0,
                  marginRight: 20,
                  paddingBottom: 7,
                  zIndex: 100,
                }}>
                <ResponsiveText size={2.5} color={colors.white}>
                  {items.menuCategoryName}
                </ResponsiveText>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
      <View style={{flex: 0.9, paddingTop: 10, padding: 10}}>
        <FlatList
          ref={scrollRef}
          contentContainerStyle={{paddingVertical: 10}}
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
           onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}
        />
      </View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
    marginTop:10,
  },
});
