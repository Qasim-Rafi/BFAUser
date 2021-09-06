import React,{useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import Icon from '../../../../components/Icon';
import {globalPath} from '../../../../constants/globalPath';
import CheckBox from '../../../../components/Static/CheckBox';
import RadioButton from '../../../../components/RadioButton';
import CustomRadioButton from '../../../../components/RadioButton';
import RnButton from '../../../../components/RnButton';
import Header from '../../../../components/Header';
import { hp, wp } from '../../../../helpers/Responsiveness';
const Randomiser = (navigation) => {
  const [value, setValue] = React.useState('1');

  const [radioButton1, setRadioButton1] = useState(true);
  const [radioButton2, setRadioButton2] = useState(false);
  const [radioButton3, setRadioButton3] = useState(false);

//   changeStates = (props) =>{
//         if(props.id === 1){
//             setRadioButton1(true);
//         }
//         else if(props.id ===2){
//             setRadioButton2(true);
//         }
//         else if(props.id === 3){
//             setRadioButton3(true);
//         }
  
  return (
    <View style={{backgroundColor: colors.black3, flex: 1, backgroundColor:colors.black3}}>
         <View style={{flex:0.25, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
             <Header navigation={navigation}/>
         </View>



         <View style={{flex:1.3, backgroundColor:'black', justifyContent:'center',}}>
<View style={{margin: 20,}}>
        <ResponsiveText color={colors.white} size={4}>Randomiser setting</ResponsiveText>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <CheckBox />
          <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Dishes
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <CheckBox />
          <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Restaurants
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <CheckBox />
          <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Distance
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <CheckBox />
          <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Area
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <CheckBox />
          <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Premise
          </ResponsiveText>
        </View>
      </View>
         </View>



         <View style={{flex:0.35, backgroundColor:colors.black3,}}>
              <View style={{flex:0.3}}>
      <ResponsiveText color={colors.white} margin={[5,0,0,20]} size={4}>
        Choose how many results
      </ResponsiveText>

      <View style={{display: 'flex', flexDirection: 'row', marginTop:20}}>
        <View style={{display: 'flex', flexDirection: 'row', marginStart:20}}>
          <CustomRadioButton status={radioButton1}
          id='3'/>
          <ResponsiveText color={colors.grey1} margin={[0, 0, 0, 15]}>
            1
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <CustomRadioButton status={radioButton2}
          id='2'/>
          <ResponsiveText color={colors.grey1} margin={[0, 0, 0, 15]}>
            2
          </ResponsiveText>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <CustomRadioButton status={radioButton3}
          id='3' />
          <ResponsiveText color={colors.grey1} margin={[0, 0, 0, 15]}>
            3
          </ResponsiveText>
        </View>
        </View>
      </View>
         </View>




         <View style={{flex:0.30,backgroundColor:colors.black2, justifyContent:'center', alignItems:'center'}}>
      <RnButton height={hp('')}>
          <ResponsiveText color={colors.white}>Randomise</ResponsiveText>
      </RnButton>
         </View>
         

         
         




      

      




     



   
    </View>
  );
};

export default Randomiser;

const styles = StyleSheet.create({});
