import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {colors} from '../../../constants/colorsPallet';
import {useSelector, useDispatch} from 'react-redux';
import {profileTabs} from '../../../constants/mock';
import {getProfileData} from '../../../redux/actions/user.actions';
import CustomInput from '../../../components/customInput';
import {RadioButton, RadioGroup} from 'react-native-flexi-radio-button';
import DropDown from '../../../components/CustomizeDropdown';
import Dropdown from '../../../components/DropDown';
import DateTimePicker from '@react-native-community/datetimepicker';

import urls from '../../../redux/lib/urls';
import Api from '../../../redux/lib/api';

export default function ProfileScreen({navigation}) {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  console.log('Profile: ', profileData);
  const loading = useSelector(state => state.appReducers.profileData.loading);
  console.log('loading', loading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [userName, setUsername] = useState();
  const [fullName, setFullname] = useState();
  const [ContactNo, setContactNo] = useState();

  const [editable, setEditable] = useState(false);
  const [JobIntrest, setJobIntrest] = useState(false);

  const [gender, setgender] = useState('');
  const [EducationalBack, setEducationalBack] = useState();
  const [child, setChild] = useState('');

  const Gender = [
    {lable: 'Male  ', icon: require('../../../assets/icons/male.png')},
    {lable: 'Female  ', icon: require('../../../assets/icons/female.png')},
  ];
  // const Gender=['Male','Female']
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const dateFormat = date => {
    if (date != null) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  };

  const showDAtepicker = () => {
    setShow(true);
  };
  const industry = ['Education', 'Social Media', 'Employer', 'Business'];
  const employmentSec = ['Private', 'Government', 'Semi-Government'];
  React.useEffect(() => {
    dispatch(getProfileData());
    console.log('loading', loading);
  }, []);
  const [activeTab, setActiveTab] = React.useState(profileTabs[0].id);
  const edit = () => {
    setFullname(profileData.fullName);
    setEmail(profileData.email);
    setUsername(profileData.username);
    setEditable(true);
  };
  const submitData = async id => {
    var obj = {
      username: userName,
      email: email,
      fullName: fullName,
      gender: 'Male',
      dateofBirth: dateFormat(date),
      contactNumber: '0340040404040',
      updatebyId: profileData.id,
      updatedDateTime: new Date(),
    };
    console.log('obj', obj);
    try {
      const res = await Api.put(urls.EDIT_PROFILE + profileData.id, obj);
      console.log('ree', res);
      if (res && res.success == true) {
        dispatch(getProfileData());

        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: 'Order Canceled',
        //   type: 'success',
        //   icon: {icon: 'auto', position: 'left'},
        //   //backgroundColor:colors.black1
        // });
      } else {
      }
    } catch (error) {}
  };
  const onSelect = (chindex, value) => {
    // setSelectItem({selectedItem: item});
    console.log('butttonn', value);
    setJobIntrest(value);
    // return check;
  };
  const Optional = () => {
    return (
      <View style={styles.formArea}>
        <ScrollView style={{flexGrow: 1}}>
          <View style={{marginTop: 20, marginBottom: -30, marginLeft: 20}}>
            <ResponsiveText
              color={colors.grey1}
              size={3}
              margin={[0, 0, 0, 10]}>
              Are you interested in receiving potential job offers?
            </ResponsiveText>
            <RadioGroup
              color={colors.yellow}
              selectedIndex={1}
              onSelect={(index, value) => onSelect(index, value)}
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: -5,
                marginBottom: 30,
              }}>
              <RadioButton value={true} style={{marginStart: 0}}>
                <ResponsiveText color={colors.grey1} margin={[0, 7, 0, 7]}>
                  Yes
                </ResponsiveText>
              </RadioButton>

              <RadioButton value={false} style={{marginStart: 10}}>
                <ResponsiveText color={colors.grey1} margin={[0, 7, 0, 7]}>
                  No
                </ResponsiveText>
              </RadioButton>
            </RadioGroup>
          </View>
          {/* <CustomInput placeHolderText={'20/8/1980'} fieldName={'Birthday'} /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: hp(2),
            }}>
            <DropDown
              data={Gender}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setgender(selectedItem.lable);
              }}
              height={hp(6)}
              width={wp(39)}
            />
            <View>
              <View style={{borderWidth: 0, zIndex: 0, borderRadius: 20}}>
                <Text
                  style={{
                    fontSize: 10,
                    position: 'absolute',
                    zIndex: 1,
                    top: -15,
                    marginStart: 9,
                    color: colors.grey,
                  }}>
                  Date of birth
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: colors.black1,
                    padding: 18,
                    borderRadius: 8,
                  }}
                  onPress={showDAtepicker}>
                  <Text
                    style={{
                      color: colors.white,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 12,
                    }}>
                    {date == null ? 'Month / Day / Year' : dateFormat(date)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {show && (
            <DateTimePicker
              // testID="dateTimePicker"
              value={new Date()}
              mode={'date'}
              // is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <CustomInput
            placeHolderText={'Graduate'}
            value={EducationalBack}
            onChangeText={text => setEducationalBack(text)}
            fieldName={'Educational Background'}
          />
          <CustomInput
            placeHolderText={'Married'}
            fieldName={'Marital Status'}
          />
          <CustomInput
            placeHolderText={'3'}
            value={child}
            onChangeText={text => setChild(text)}
            fieldName={'No of Children'}
          />

          <View style={{marginTop: 15}}>
            <ResponsiveText
              size={3}
              color={colors.grey1}
              margin={[0, 0, 5, 30]}>
              Empoyment Sector
            </ResponsiveText>
            <Dropdown data={employmentSec} />
          </View>
          <View style={{marginTop: 15}}>
            <ResponsiveText
              size={3}
              color={colors.grey1}
              margin={[0, 0, 5, 30]}>
              Industry
            </ResponsiveText>
            <Dropdown data={industry} />
          </View>

          {/* <CustomInput
          placeHolderText={'Private'}
          dropdownList={true}
          fieldName={'Employment sector'}
        /> */}
          {/* <CustomInput placeHolderText={'Education'} fieldName={'Industry'} /> */}
          <View
            style={{
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 50,
              width: wp(90),
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                backgroundColor: colors.yellow,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                height: hp(5),
                width: wp(80),
              }}>
              <ResponsiveText color={colors.black}>Save</ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  const userInfo = () => {
    return (
      <View
        style={{
          flex: 0.7,
          // borderTopRightRadius: wp(8),
          // borderTopLeftRadius: wp(8),
          backgroundColor: '#202020',
          paddingTop: 10,
        }}>
        <ScrollView>
          <View style={{flex: 0.68}}>
            <CustomInput
              placeHolderText={profileData.fullName}
              fieldName={'Full Name'}
              value={fullName}
              onChangeText={text => setFullname(text)}
            />
            <CustomInput
              placeHolderText={profileData.username}
              fieldName={'User Name'}
              value={userName}
              onChangeText={text => setUsername(text)}
            />
            <CustomInput
              placeHolderText={profileData.email}
              fieldName={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <CustomInput
              placeHolderText={'000-000-0000'}
              value={ContactNo}
              onChangeText={text => setContactNo(text)}
              fieldName={'Phone'}
            />
          </View>
          <View style={{flex: 0.32, marginTop: 40, marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => submitData()}
              style={{
                alignSelf: 'center',
                backgroundColor: colors.yellow,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                height: hp(5),
                width: wp(80),
              }}>
              <ResponsiveText color={colors.black}>Save</ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.screeninfo}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 0.4,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.black,
                height: hp(5),
                padding: 9,
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon source={globalPath.BACK_BLACK_ARROW} />
            </TouchableOpacity>
            <ResponsiveText size={4}>Profile</ResponsiveText>
            <TouchableOpacity
              onPress={() => edit()}
              style={{
                backgroundColor: colors.black,
                height: hp(5),
                padding: 10,
                borderRadius: 20,
              }}>
              <Icon source={globalPath.RIGHT_ARROW} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.45,
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 10,
              }}
              source={
                profileData.fullpath
                  ? {uri: profileData.fullpath}
                  : globalPath.USER_PROFILE
              }
            />
            <ResponsiveText size={4}>{profileData.fullName}</ResponsiveText>
            <ResponsiveText color={colors.lightBlack} size={3}>
              {profileData.email}
            </ResponsiveText>
          </View>
        </View>
        <View style={{flex: 0.09, flexDirection: 'row', marginTop: -10}}>
          {profileTabs.map((items, index) => {
            return (
              <React.Fragment key={items.id}>
                <TouchableOpacity
                  id={index}
                  onPress={() => setActiveTab(items.id)}
                  style={{
                    width: wp(50),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    backgroundColor:
                      items.id === activeTab ? colors.yellow1 : colors.black2,
                  }}
                  padding={[3, 15]}>
                  <ResponsiveText
                    size={3.5}
                    // fontFamily={items.id === activeTab ? 'Boldedium' : undefined}
                    color={
                      items.id === activeTab ? colors.black : colors.white
                    }>
                    {items.name}
                  </ResponsiveText>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}

          {/* <View style={{flex:1, backgroundColor:colors.yellow1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
            <ResponsiveText size={4}>Profile</ResponsiveText>
          </TouchableOpacity>
          </View>      */}
          {/* <View style={{flex:1, backgroundColor:colors.black2, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity >
            <ResponsiveText size={4}>Optional</ResponsiveText>
          </TouchableOpacity>
        </View> */}
        </View>

        {/* <Profile /> */}
        {/* <ScrollView style={{flex:0.9,margin:20}}> */}

        {activeTab === 1 && userInfo()}
        {activeTab === 2 && Optional()}

        {/* </ScrollView> */}
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
  },
  screeninfo: {
    flex: 0.35,
    paddingBottom: wp(10),
    padding: wp(5),
  },
  formArea: {
    flex: 0.65,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    padding: wp(10),
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 10,
    marginBottom: wp(8),
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formArea: {
    flex: 0.7,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    paddingTop: 10,
  },
});
