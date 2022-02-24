import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colorsPallet';
import { globalPath } from '../constants/globalPath';
import Icon from './Icon';
import ResponsiveText from './RnText';
import { routeName } from '../constants/routeName';
import { useDispatch } from 'react-redux';
import { hp, wp } from '../helpers/Responsiveness';

const SeeAllButton = props => {
  //  console.log("dataaaaaaa: ", props.Action)
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        //dispatch(props.action(1, 13))
        props.navigation
          ? props.navigation.navigate(routeName.ALL_DISHES_LIST, {
            data: props.data,
            title: props.title,
          })
          : undefined

      }
      }
      style={styles.button}>
      <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>
        Show All
      </ResponsiveText>
      <Icon
        size={(wp(1.6), hp(1.6))}
        source={props.src ? props.src : globalPath.RIGHT_ARROW}
      />
    </TouchableOpacity>
  );
};

export default SeeAllButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
