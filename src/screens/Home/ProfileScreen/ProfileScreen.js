import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {Spacing} from '../../../constants/spacingScale';
import Line from '../../../components/Line';
import {routeName} from '../../../constants/routeName';
import {colors} from '../../../constants/colorsPallet';
import Profile from './Profile';
import Optional from './Optional';
import {useSelector, useDispatch} from 'react-redux';
import {profileTabs} from '../../../constants/mock';
import {getProfileData} from '../../../redux/actions/user.actions';
import CustomInput from '../../../components/customInput';
import {RadioButton, RadioGroup} from 'react-native-flexi-radio-button';
import DropDown from '../../../components/CustomizeDropdown';
import Dropdown from '../../../components/DropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import urls from '../../../redux/lib/urls';
import Api from '../../../redux/lib/api';
import {BarIndicator} from 'react-native-indicators';
import moment from 'moment';

export default function ProfileScreen({navigation}) {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  console.log('Profile: ', profileData);
  const loading = useSelector(state => state.appReducers.profileData.loading);
  console.log('loading', loading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [userName, setUsername] = useState();
  const [fullName, setFullname] = useState();
  const [isloading, setLoading] = useState(false);
  const [JobInterest, setJobInterest] = useState(false);

  const [gender, setgender] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');

  const [education, setEducation] = useState('');
  const [MaritialStatus, setMaritialStatus] = useState();
  const [EmpSec, setEmpSec] = useState();
  const [SelectedIndustry, setSelectedIndustry] = useState();
  const [children, setChildren] = useState('');
  const [Address, setAddress] = useState('');

  const [IndustryData, setIndustryData] = useState([]);
  const [EmploymentSector, setEmploymentSector] = useState([]);
  const [MarriageStatusData, setMarriageStatusData] = useState([]);

  const Gender = [
    {
      id: 0,
      lable: 'Gender',
      icon: require('../../../assets/icons/signupgender.png'),
    },
    {id: 1, lable: 'Male', icon: require('../../../assets/icons/male.png')},
    {id: 2, lable: 'Female', icon: require('../../../assets/icons/female.png')},
    // {id: 2, lable: 'Prefer not to say', icon: require('../../../assets/icons/female.png')},
  ];
  // const Gender=['Male','Female']
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(null);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const dateFormat = incomingdate => {
    var date = new Date(incomingdate);
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
    // dispatch(getProfileData());
    GetLookUpIndustry();
    GetLookUpEmploymentSector();
    GetLookUpMarriageStatus();
    defaultData();
    console.log('loading', loading);
  }, []);
  const [activeTab, setActiveTab] = React.useState(profileTabs[0].id);

  const defaultData = () => {
    setgender(profileData.gender);
    setFullname(profileData.fullName);
    setEmail(profileData.email);
    setUsername(profileData.username);
    setcontactNo(profileData.contactNumber);
    setDate(profileData.dateofBirth == null||profileData.dateofBirth =="0001-01-01 00:00:00.0000000"?null:profileData.dateofBirth);
    setgender(profileData.gender);
    setChildren(
      profileData.numberOfChildren == null ? '' : profileData.numberOfChildren,
    );
    setJobInterest(profileData.jobIntrest);
    setEducation(
      profileData.educationalBackground == null
        ? ''
        : profileData.educationalBackground,
    );
    setMaritialStatus(profileData.marriageStatusId);
    setEmpSec(profileData.employmentSectorId);
    setSelectedIndustry(profileData.industryId);
    setAddress(profileData.address=='null'||profileData.address==null?'':profileData.address);
    setPhoneNo(profileData.cellPhone=='null'||profileData.cellPhone==null?'':profileData.cellPhone);
  };

  const GetLookUpIndustry = async item => {
    try {
      const res = await Api.get(urls.GET_LOOKUP_INDUSTRY);
      // console.log('GetLookUpIndustry res', res);
      if (res && res.success == true) {
        setIndustryData(res.data);
      } else {
      }
    } catch (error) {}
  };
  const GetLookUpEmploymentSector = async item => {
    try {
      const res = await Api.get(urls.GET_LOOKUP_EMP_SEC);
      // console.log('GetLookUpEmploymentSector res', res);
      if (res && res.success == true) {
        setEmploymentSector(res.data);
      } else {
      }
    } catch (error) {}
  };
  const GetLookUpMarriageStatus = async item => {
    try {
      const res = await Api.get(urls.GET_LOOKUP_MARITAL_STATUS);
      console.log('GetLookUpMarriageStatus', res);
      if (res && res.success == true) {
        setMarriageStatusData(res.data);
      } else {
      }
    } catch (error) {}
  };

  const submitData = async id => {
    // var obj = {
    //   username: userName,
    //   email: email,
    //   fullName: fullName,
    //   gender: 'Male',
    //   dateofBirth: '2004/1/14',
    //   contactNumber: '0340040404040',
    //   updatebyId: profileData.id,
    //   updatedDateTime: new Date(),
    // };
    // var photo = {
    //   uri: img.path,
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // };
    // console.log('okooookko');
    var formData = new FormData();
    formData.append('Username', userName);
    formData.append('Email', email);
    formData.append('FullName', fullName);
    formData.append('CellPhone', PhoneNo);
    formData.append('Address', Address);
    formData.append('Address2', Address);
    formData.append('EducationalBackground', education);
    formData.append('Gender', gender=='Gender'?'':gender);
    if (date != null) {
      formData.append('DateofBirth', dateFormat(date));
    }
    formData.append('ContactNumber', contactNo);
    formData.append('MarriageStatusId', MaritialStatus);
    formData.append('NumberOfChildren', children);
    formData.append('IndustryId', SelectedIndustry);
    formData.append('EmploymentSectorId', EmpSec);
    formData.append(
      'File',
      img == null
        ? null
        : {
            uri: img.path,
            type: 'image/jpeg',
            name: 'photo.jpg',
          },
    );
    formData.append('JobIntrest', JobInterest);
    formData.append('updatebyId', profileData.id);

    // console.log('obj', formData);
    try {
      setLoading(true);
      const res = await Api.put(
        urls.EDIT_PROFILE + profileData.id,
        formData,
        true,
      );
      // console.log('ree', res);
      if (res && res.success == true) {
        dispatch(getProfileData());
        setLoading(false);
        navigation.goBack();
        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: 'Order Canceled',
        //   type: 'success',
        //   icon: {icon: 'auto', position: 'left'},
        //   //backgroundColor:colors.black1
        // });
      } else {
        setLoading(false);
      }
    } catch (error) {}
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.cropRect);
      setImg(image);
      // setModalVisible(!isModalVisible);
    });
  };
  const openPhoneCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImg(image);
      // setModalVisible(!isModalVisible);
    });
  };
  const takePhoto = () => {
    Alert.alert('Select Avatar', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Choose from Gallery ',
        onPress: () => takePhotoFromCamera(),
      },
      {
        text: 'Take Photo',
        onPress: () => openPhoneCamera(),
      },
    ]);
  };
  function formatDate(dateString, currentDateFormat, FormattedDateFormat) {
    return moment(dateString, currentDateFormat).format(FormattedDateFormat);
  }

  const handleChange = (event, date) => {
    const format = 'YYYY-MM-DD';
    const displayFormat = 'DD MMM YYYY';

    const displayDate = formatDate(date, format, displayFormat); // display Date
    // setDate(displayDate)
    return displayDate;
  };
  const Optional = () => {
    return (
      <KeyboardAvoidingView 
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
      style={styles.formArea}>
        <ScrollView style={{flexGrow: 1}}>
          <View style={{marginTop: 20, marginBottom: -30, marginLeft: 20}}>
            <ResponsiveText
              color={colors.grey1}
              size={3}
              margin={[0, 0, 0, 10]}>
              Are you interested in receiving potential job offers?
            </ResponsiveText>
            <RadioGroup
              selectedIndex={profileData.jobIntrest == true ? 0 : 1}
              color={colors.yellow}
              onSelect={(index, value) => setJobInterest(value)}
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

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(8),
              }}>
              <DropDown
                defaultValueByIndex={
                  profileData.gender==null||profileData.gender==''||profileData.gender=='null'
                    ? 0
                    : Gender.findIndex(p => p.lable == gender)
                }
                data={Gender}
                // defaultButtonText={gender}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setgender(selectedItem.lable);
                }}
                height={hp(6)}
                width={wp(39)}
              />
              <TouchableOpacity onPress={showDAtepicker}>
                <Input
                  width={wp(39)}
                  onChnageText={text => setLastName(text)}
                  keyboardType={'numeric'}
                  editable={false}
                  margin={[15, 0, 15, 0]}
                  padding={[0, 0, 0, 15]}
                  iconMargin={[0, 10, 0, 0]}
                  leftIcon={globalPath.Calender_ICON}
                  placeholder={
                    date == null
                      ? 'Date of birth'
                      : handleChange(
                          '',
                          date == null ? profileData.dateofBirth : date,
                        )
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          {show && (
            //         <DateTimePicker
            //           // testID="dateTimePicker"
            //           value={new Date()}
            //           mode={'date'}
            //           // is24Hour={true}
            //           display="default"
            //           // format="YYYY-MM-DD HH:mm"
            //           onChange={onChange}
            //           format={"YYYY-MM-DD"}
            // displayFormat={"DD MMM YYYY"}
            //         />
            <DateTimePicker
              timeZoneOffsetInMinutes={0}
              value={new Date()}
              mode="date"
              is24Hour
              display="default"
              onChange={onChange}
              format={'YYYY-MM-DD'}
              displayFormat={'DD MMM YYYY'}
              maximumDate={new Date(2009, 1, 1)}
            />
          )}
          <CustomInput
            placeHolderText={'Graduate'}
            fieldName={'Educational Background'}
            value={education}
            onChangeText={text => setEducation(text)}
          />
          <View style={{marginTop: 15}}>
            <ResponsiveText
              size={3}
              color={colors.grey1}
              margin={[0, 0, 5, 30]}>
              Marital Status
            </ResponsiveText>
            <Dropdown
              data={MarriageStatusData.map(v => {
                return v.name;
              })}
              defaultButtonText={
                MarriageStatusData.find(v => v.id == MaritialStatus)?.name
                  ? MarriageStatusData.find(v => v.id == MaritialStatus)?.name
                  : 'Select Marital Status'
              }
              onSelect={async (selectedItem, index) => {
                var id = MarriageStatusData.find(
                  v => v.name == selectedItem,
                )?.id;
                console.log(id, 'MarriageStatusData');
                setMaritialStatus(id);
              }}
            />
          </View>
          <CustomInput
            placeHolderText={'0'}
            fieldName={'No of Children'}
            value={children}
            onChangeText={text => setChildren(text)}
          />
          <View style={{marginTop: 15}}>
            <ResponsiveText
              size={3}
              color={colors.grey1}
              margin={[0, 0, 5, 30]}>
              Employment Sector
            </ResponsiveText>
            <Dropdown
              data={EmploymentSector.map(v => {
                return v.name;
              })}
              defaultButtonText={
                EmploymentSector.find(v => v.id == EmpSec)?.name
                  ? EmploymentSector.find(v => v.id == EmpSec)?.name
                  : 'Select Employment Sector'
              }
              onSelect={async (selectedItem, index) => {
                var id = EmploymentSector.find(v => v.name == selectedItem)?.id;
                console.log(id, 'EmploymentSector');
                setEmpSec(id);
              }}
            />
          </View>
          <View style={{marginTop: 15}}>
            <ResponsiveText
              size={3}
              color={colors.grey1}
              margin={[0, 0, 5, 30]}>
              Industry
            </ResponsiveText>
            <Dropdown
              data={IndustryData.map(v => {
                return v.name;
              })}
              defaultButtonText={
                IndustryData.find(v => v.id == SelectedIndustry)?.name
                  ? IndustryData.find(v => v.id == SelectedIndustry)?.name
                  : 'Select Industry'
              }
              onSelect={async (selectedItem, index) => {
                var id = IndustryData.find(v => v.name == selectedItem)?.id;
                console.log(id, 'IndustryData');
                setSelectedIndustry(id);
              }}
            />
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
              onPress={submitData}
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
        </KeyboardAvoidingView>
    );
  };
  const userInfo = () => {
    return (
      <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 0.7,
          // borderTopRightRadius: wp(8),
          // borderTopLeftRadius: wp(8),
          backgroundColor: colors.black3,
          paddingTop: 10,
        }}>
        <ScrollView>
          <View style={{flex: 0.68}}>
            <CustomInput
              placeHolderText={'Full Name'}
              fieldName={'Full Name'}
              value={fullName}
              onChangeText={text => setFullname(text)}
            />
            <CustomInput
              placeHolderText={'User Name'}
              fieldName={'User Name'}
              value={userName}
              onChangeText={text => setUsername(text)}
              editable={false}
            />
            <CustomInput
              placeHolderText={'Email'}
              fieldName={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
              editable={false}
            />
            <CustomInput
              placeHolderText={'Cell Number'}
              fieldName={'Cell Number'}
              value={contactNo}
              onChangeText={text => setcontactNo(text)}
              editable={false}
            />
            <CustomInput
              placeHolderText={'Phone Number'}
              fieldName={'Phone Number'}
              value={PhoneNo}
              keyboardType={'numeric'}
              onChangeText={text => setPhoneNo(text)}
            />
            <CustomInput
              placeHolderText={'Address'}
              fieldName={'Address'}
              value={Address}
              onChangeText={text => setAddress(text)}
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
      </KeyboardAvoidingView>
    );
  };
  return (
    <KeyboardAvoidingView
      // behavior={ 'height'}
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
                height:40,
                padding: 9,
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon source={globalPath.BACK_BLACK_ARROW} />
            </TouchableOpacity>
            {/* <ResponsiveText size={4}>Profile</ResponsiveText> */}
            <TouchableOpacity
              // onPress={() => edit()}
              style={{
                // backgroundColor: colors.black,
                height: hp(5),
                padding: 10,
                borderRadius: 20,
              }}>
              {/* <Icon source={globalPath.EDIT_PROFILE} /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.45,
            }}>
            {/* <Image
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
            /> */}
            <View style={styles.header}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    marginBottom: 10,
                  }}
                  source={
                    img == null
                      ? profileData.fullPath
                        ? {uri: profileData.fullPath}
                        : globalPath.USER_PROFILE
                      : {uri: img.path}
                  }
                  // {profileData.fullpath ? { uri: profileData.fullpath } : globalPath.USER_PROFILE}
                />
                <View
                  style={{
                    height: hp(3.6),
                    width: wp(7.4),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={takePhoto}>
                    <Image
                      style={{
                        height: hp(2.4),
                        width: wp(7),
                        marginRight: hp(4),
                        borderRadius: 30,
                      }}
                      source={globalPath.CAMERA_ICON}
                    />
                  </TouchableOpacity>
                  <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={() => toggleModal(false)}
                    swipeDirection={['left', 'right', 'down', 'up']}
                    animationIn="slideInUp">
                    <View
                      style={{
                        height: hp(40),
                        width: wp(90),
                        backgroundColor: colors.white,
                        borderRadius: hp(4),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <RnButton
                        gradColor={[colors.green1, colors.yellow]}
                        title={'Take Photo'}
                        onPress={openPhoneCamera}
                      />
                      <RnButton
                        margin={[50, 0, 0, 0]}
                        gradColor={[colors.green1, colors.yellow]}
                        title={'Take Photo from gallery'}
                        onPress={takePhotoFromCamera}
                      />
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
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
          {isloading === true ? (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(65, 65, 65, 0.4)',
                flex: 1,
              }}>
              <BarIndicator color={colors.yellow} size={45} />
            </View>
          ) : undefined}
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
    backgroundColor: colors.black3,
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
    backgroundColor: colors.black3,
    paddingTop: 10,
  },
});
