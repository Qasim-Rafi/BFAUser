

//Node Imports
import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import {
    Image, StyleSheet, TouchableOpacity, View, Text,
    StatusBar,
    Button,
    PermissionsAndroid,
} from 'react-native';


//Local Imports
import { colors } from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';
import CheckBox from '../../../../components/Static/CheckBox';

import CustomRadioButton from '../../../../components/RadioButton';
import RnButton from '../../../../components/RnButton';
import Header from '../../../../components/Header';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { routeName } from '../../../../constants/routeName';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Modal from "react-native-modal";
import DropDown from '../../../../components/DropDown';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch, useSelector } from 'react-redux';
import { GetAreaAllListAction, GetDistanceListAction, GetNearestRestaurantAction, GetPremiseAllListAction, GetUserRandomiserSetting } from '../../../../redux/actions/user.actions';
import { showMessage } from 'react-native-flash-message';
import urls from '../../../../redux/lib/urls';
import Api from '../../../../redux/lib/api';
import AsyncStorage from '@react-native-community/async-storage';



class RandomWheelClass extends React.Component {
    constructor(props) {
        super(props);




        this.state = {
            userId: null,
            winnerValue: null,
            winnerIndex: null,
            started: false,
            isModalVisible: false,
            lat: null,
            long: null,
            distance: 3,
            loading: false,
            restaurantSelected: true,
            selectedAreaId: 1,
            selectedDistanceId: 6,
            selectedPremiseId: 1,
            noOfResults: 1,
            areaSelected: false,
            distanceSelected: false,
            premiseSelected: false,
            dishesSelected: false,
            getRandomiserSuccess: false,
            isThemeDark:true
        };
        this.child = null;
    }



    componentDidMount() {
        this.requestCurrentLocation();
        this.props.dispatch(GetAreaAllListAction())
        this.props.dispatch(GetPremiseAllListAction())
        this.props.dispatch(GetDistanceListAction())
        this.getUserId()
        this.setState({
            selectedAreaId: this.props.userRandomiserSetting.areaId ? this.props.userRandomiserSetting.areaId : 1,
            selectedDistanceId: this.props.userRandomiserSetting.distance ? this.props.userRandomiserSetting.distance : 6,
            selectedPremiseId: this.props.userRandomiserSetting.premiseId ? this.props.userRandomiserSetting.premiseId : 1,
            noOfResults: this.props.userRandomiserSetting.noOfResult ? this.props.userRandomiserSetting.noOfResult : 1,
            areaSelected: this.props.userRandomiserSetting.areaId ? true : false,
            distanceSelected: this.props.userRandomiserSetting.distance ? true : false,
            premiseSelected: this.props.userRandomiserSetting.premiseId ? true : false,
            restaurantSelected: typeof(this.props.userRandomiserSetting.isRestaurant) === "boolean"  ? this.props.userRandomiserSetting.isRestaurant : true,
            getRandomiserSuccess: this.props.userRandomiserSettingSuccess,
            isThemeDark: this.props.isThemeDark
        })
    }
    getUserId = async () => {
        var userIdGet = await AsyncStorage.getItem('@userId');
        this.setState({ userId: userIdGet })
    }
    requestCurrentLocation = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Bali',
                    'message': 'Bali would like to access your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location")
                Geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position);
                        this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
                        this.props.dispatch(GetNearestRestaurantAction({ lat: position.coords.latitude, long: position.coords.longitude, distance: this.state.selectedDistanceId }))
                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
                // alert("You can use the location");
            } else {
                console.log("location permission denied")
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err)
        }
    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
        });
    };
    selectCheck = (v) => {
        console.log('okoko', v);
        if (v == 'area') {
            this.setState({ areaSelected: !this.state.areaSelected })
        } else if (v == 'distance') {
            this.setState({ distanceSelected: !this.state.distanceSelected })

        } else if (v == 'premise') {
            this.setState({ premiseSelected: !this.state.premiseSelected })
        }
    };
    buttonPress = () => {
        this.setState({
            started: true,
        });

        this.setState({ winnerIndex: null });
        if(this.props.restaurantList.map(names => names.name).length){

            this.child._tryAgain();
        }
        // this.child._onPress()
    };
    addUserRandomiserSettings = async (index, item) => {
        var obj = {
            "userId": this.state.userId,
            "createdDateTime": new Date(),
            "isRestaurant": this.state.restaurantSelected,
            "areaId": this.state.selectedAreaId,
            "distance": this.state.selectedDistanceId,
            "premiseId": this.state.selectedPremiseId,
            "noOfResult": this.state.noOfResults
        }
        console.log('addUserRandomiserSettings obj', obj);
        try {
            const res = await Api.post(urls.ADD_USER_RANDOMISER, obj);
            console.log('res', res);
            if (res && res.success == true) {
                this.props.dispatch(GetUserRandomiserSetting());
            } else {
            }
        } catch (error) { console.log(error);}
    };
    updateUserRandomiserSettings = async (index, item) => {
        var obj = {
            "isRestaurant": this.state.restaurantSelected,
            "areaId": this.state.selectedAreaId,
            "distance": this.state.selectedDistanceId,
            "premiseId": this.state.selectedPremiseId,
            "noOfResult": this.state.noOfResults,
            "updatedById": this.state.userId,
            "updateDateTime": new Date(),
        }
        console.log('updateUserRandomiserSettings obj', obj);
        try {
            const res = await Api.put(urls.UPDATE_USER_RANDOMISER+this.state.userId, obj);
            console.log('res', res);
            if (res && res.success == true) {
                this.props.dispatch(GetUserRandomiserSetting());
            } else {
            }
        } catch (error) { console.log(error);}
    };
    render() {
        // console.log(this.state.areaList, 'areaList in Class');
        // console.log(this.state.premiseList, 'premiseList in Class');
        // console.log(this.state.noOfResults);
        // console.log(this.state.selectedDistanceId,'selectedDistanceId');
        // console.log(new Date().toLocaleString().replace(',',''))
        // console.log(this.state.userId,'UserId');
        // console.log(this.props.userRandomiserSetting, 'userRandomiserSettinn');
        console.log(this.state.areaSelected, 'areaSelected', this.state.selectedAreaId, 
        this.state.selectedDistanceId, this.state.selectedPremiseId,
        this.state.distanceSelected,this.state.premiseSelected,this.state.restaurantSelected,this.props.userRandomiserSetting.isRestaurant,
        this.state.getRandomiserSuccess,'getRandomiserSuccess',
        );

        const wheelOptions = {
            rewards: this.state.restaurantSelected ? this.props.restaurantList.map(names => names.name) : this.props.favoriteDishesData.map(names => names.dishName) ,
            knobSize: 30,
            borderWidth: 5,
            borderColor: '#fff',
            innerRadius: 30,
            duration: 6000,
            iconRewards: this.state.restaurantSelected ? this.props.restaurantList.map(names => names.fullPath) : this.props.favoriteDishesData.map(names => names.imageDataB) ,
            backgroundColor: 'transparent',

            textAngle: 'horizontal',
            knobSource: require('../../../../assets/icons/knob.png'),
            onRef: ref => (this.child = ref),
        };
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite,
                }}>
                <View
                    style={{
                        backgroundColor: colors.black1,
                        flex: 0.08,
                        padding:6,
                        // alignItems: 'center',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        backgroundColor: this.state.isThemeDark ? colors.black3: colors.white,
                    }}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View
                    style={{
                        flex: 0.9,
                        backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite,
                        justifyContent: 'space-between'
                    }}>
                    <View>
                        <ResponsiveText size={4} color={colors.yellow} margin={[20, 0, 0, 20]} >What to Eat?</ResponsiveText>
                        <TouchableOpacity onPress={this.toggleModal} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, }} >
                            <Icon source={globalPath.FILTER_ICON} size={20} tintColor={colors.grey} />
                            <ResponsiveText color={colors.grey} size={3.5} margin={[0, 0, 0, 5]} >Refine Search</ResponsiveText>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.container,{backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite}]}>
                        <StatusBar barStyle={'light-content'} />
                        {!this.props.loading ?
                            this.props.restaurantList.map(names => names.name).length ?
                                <WheelOfFortune
                                    options={wheelOptions}

                                    getWinner={(value, index) => {
                                        this.setState({ winnerValue: value, winnerIndex: index });
                                        if(this.state.restaurantSelected){
                                            this.props.navigation.navigate(routeName.RestaurantDetail, this.props.restaurantList.find(element => element.name === value).restaurantBranchId)
                                        }else{
                                            this.props.navigation.navigate(routeName.DISH_DETAIL,{ dish: this.props.favoriteDishesData.find(element => element.dishName === value)})
                                        }

                                        // alert('Dish ID: ',participants[this.state.winnerIndex])
                                        //    alert('Dish ID: '+participants[this.state.winnerIndex])
                                    }}
                                />
                                : 
                                // showMessage({
                                //     message: "Oooopsss...",
                                //     description: "Seems like there are no restaurants in area you provided.",
                                //     type: "info",
                                // })
                                null
                            : null}




                        {/* {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              You win {participants[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}  */}
                    </View>
                    <View
                        style={{
                            backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite,
                            alignItems: 'center',
                            marginBottom: 30,
                        }}>
                        <TouchableOpacity
                            onPress={this.buttonPress}
                            disabled={this.props.loading}
                            style={{
                                backgroundColor: colors.yellow,
                                width: wp(85),
                                height: hp(5),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,

                            }}>
                            <ResponsiveText color={this.state.isThemeDark ? colors.black3: colors.grey1}>Randomise</ResponsiveText>
                        </TouchableOpacity>
                    </View>

                </View>
                <Modal isVisible={this.state.isModalVisible} backdropOpacity={0.90} style={{ justifyContent: 'flex-end' }}
                    animationIn={'slideInDown'}
                    animationOut={'slideOutUp'}
                    // onModalHide={()=>navigation.navigate(routeName.LANDING_SCREEN)}
                    statusBarTranslucent={true}
                    coverScreen={true}
                    onModalHide={() => {
                        setTimeout(() => {
                            this.forceUpdate()
                        }, 3000);
                    }}
                >
                    {/* ------------ ModalView -------------- */}

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite,
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}>
                        <View style={{ position: 'absolute', marginTop: 10, marginHorizontal: 5, flexDirection: 'row', end: 5, top: 0 }}>


                            <TouchableOpacity onPress={() => this.setState({
                                isModalVisible: false
                            })}
                                style={{ height: hp(4), width: hp(4), justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Image
                                    source={require('../../../../assets/fake_Images/cross.png')}
                                    style={{ height: hp(3.7), width: 33, marginBottom: 6, backgroundColor:'black',borderRadius:50 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40 }} >

                            <View style={{ backgroundColor:this.state.isThemeDark ? colors.black3: colors.bgWhite, }}>
                                <ResponsiveText color={this.state.isThemeDark ? colors.white: colors.black} size={3.7} margin={[20, 0, 10, 20]}>
                                    Randomiser setting
                                </ResponsiveText>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                                <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
                                    onSelect={(index, value) => {
                                        index === 0 ? this.setState({ dishesSelected: true, restaurantSelected: false }) : index === 1 ? this.setState({ dishesSelected: false, restaurantSelected: true }) : null
                                        console.log(this.state.dishesSelected, this.state.restaurantSelected);
                                    }}
                                    selectedIndex={this.state.restaurantSelected?1:0}
                                >
                                    <RadioButton value={'Dishes'} style={{ marginStart: 10 }}>
                                        <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Dishes</ResponsiveText>
                                    </RadioButton>

                                    <RadioButton value={'Restaurants'} style={{ marginStart: 10 }}>
                                        <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Restaurants</ResponsiveText>
                                    </RadioButton>
                                </RadioGroup>

                            </View>
                            <View style={{ marginStart: 10, marginTop: 15 }}>

                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox additem={this.selectCheck} value={'area'} checkedd={this.state.areaSelected} />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Area
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        {this.props.areaList.length > 0 ?
                                            <DropDown
                                                disabled={!this.state.areaSelected}
                                                data={this.props.areaList.map(names => names.name)}
                                                height={hp(4)} width={wp(57)}
                                                defaultValue={this.props.areaList.length>0? this.props.areaList.find(e => e.id == this.state.selectedAreaId).name:'null'}
                                                onSelect={(selectedItem, index) => {
                                                    console.log('selectedAreaId', this.props.areaList.find(e => e.name == selectedItem).id);
                                                    this.setState({
                                                        selectedAreaId: this.props.areaList.find(e => e.name == selectedItem).id
                                                    })
                                                }}
                                            />
                                            :
                                            <DropDown data={[]} height={hp(4)} width={wp(57)} />

                                        }
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox additem={this.selectCheck} value={'distance'} checkedd={this.state.distanceSelected} />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Distance
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        <DropDown
                                            disabled={!this.state.distanceSelected}
                                            data={this.props.distanceList.map(string => string.stringValue)}
                                            height={hp(4)}
                                            width={wp(57)}
                                            defaultValue={this.props.distanceList.find(e => e.intValue == this.state.selectedDistanceId)?.stringValue}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index, 'DropDown Selections');
                                                console.log(this.props.distanceList.find(element => element.stringValue == selectedItem).intValue);
                                                this.setState({ selectedDistanceId: this.props.distanceList.find(element => element.stringValue == selectedItem).intValue })
                                                // index === 0 ? this.setState({ distance: 1 }) : index === 1 ? this.setState({ distance: 6 }) : index === 2 ? this.setState({ distance: 10 }) : null
                                            }} />
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox additem={this.selectCheck} value={'premise'} checkedd={this.state.premiseSelected} />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Premise
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        <DropDown
                                            disabled={!this.state.premiseSelected} 
                                            data={this.props.premiseList.map(names => names.name)}
                                            defaultValue={this.props.premiseList.find(e => e.id == this.state.selectedPremiseId)?.name}
                                            height={hp(4)} 
                                            width={wp(57)} 
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite }}>
                                <View>
                                    <ResponsiveText
                                        color={this.state.isThemeDark ? colors.white: colors.black}
                                        margin={[20, 0, 0, 20]}
                                        size={3.7}>
                                        Choose how many results
                                    </ResponsiveText>

                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                                        <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
                                            onSelect={(index, value) => {
                                                this.setState({ noOfResults: value })
                                                console.log(index, value, this.state.noOfResults);
                                            }}
                                            selectedIndex={this.state.noOfResults-1}
                                        >
                                            <RadioButton value={1} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>1</ResponsiveText>
                                            </RadioButton>

                                            <RadioButton value={2} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>2</ResponsiveText>
                                            </RadioButton>

                                            <RadioButton value={3} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>3</ResponsiveText>
                                            </RadioButton>
                                        </RadioGroup>


                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: this.state.isThemeDark ? colors.black3: colors.bgWhite,
                                alignItems: 'center',
                                marginBottom: 30,
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    {
                                        this.setState({ isModalVisible: false });
                                        this.props.dispatch(GetNearestRestaurantAction({ lat: this.state.lat, long: this.state.long, distance: this.state.selectedDistanceId }));
                                        if(this.state.getRandomiserSuccess){
                                            this.updateUserRandomiserSettings()
                                        }else{
                                            this.addUserRandomiserSettings();   
                                        }
                                    }
                                }}
                                style={{
                                    backgroundColor: colors.yellow,
                                    width: wp(85),
                                    height: hp(5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 7,
                                }}>
                                <ResponsiveText color={colors.grey1}>Save</ResponsiveText>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* ------------ ModalView End -------------- */}
                </Modal>
            </View>
        );
    }
}
export default RandomWheel = (props) => {

    const dispatch = useDispatch();
    const restaurantList = useSelector(state => state.appReducers.NearestRestaurants.data)
    const loading = useSelector(state => state.appReducers.NearestRestaurants.loading)
    const areaList = useSelector(state => state.appReducers.AllAreas.data)
    const premiseList = useSelector(state => state.appReducers.AllPremises.data)
    const distanceList = useSelector(state => state.appReducers.DistanceList.data)
    const userRandomiserSetting = useSelector(state => state.appReducers.getUserRandomiserSetting.data)
    const userRandomiserSettingSuccess = useSelector(state => state.appReducers.getUserRandomiserSetting.success)
    const favoriteDishesData = useSelector(state => state.appReducers.favorite.data)
    const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

    console.log(favoriteDishesData,'favoriteDishesData');

    console.log('Effect of useEffect');
    console.log(userRandomiserSettingSuccess,'userRandomiserSettingSuccess');

    return <RandomWheelClass {...props}
        dispatch={dispatch}
        restaurantList={restaurantList}
        loading={loading}
        areaList={areaList}
        premiseList={premiseList}
        distanceList={distanceList}
        userRandomiserSetting={userRandomiserSetting}
        userRandomiserSettingSuccess={userRandomiserSettingSuccess}
        favoriteDishesData={favoriteDishesData}
        isThemeDark={isThemeDark}
    />

};
const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        alignItems: 'center',
        marginTop: -40,
        backgroundColor: colors.black3
    },
    startButtonView: {
        position: 'absolute',
    },
    startButton: {
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 50,
        padding: 5,
    },
    startButtonText: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
    },
    winnerView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tryAgainButton: {
        padding: 10,
    },
    winnerText: {
        fontSize: 30,
    },
    tryAgainButton: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    tryAgainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});