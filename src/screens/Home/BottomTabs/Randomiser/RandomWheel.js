

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
import { GetAreaAllListAction, GetDistanceListAction, GetNearestRestaurantAction, GetPremiseAllListAction } from '../../../../redux/actions/user.actions';
import { showMessage } from 'react-native-flash-message';


// const participants = [

//     'Imah`s',
//     'Bandar Bus',
//     'Hokkaido',
//     'Pit-shop',
//     'Jollibee',
//     'Anas Corner',
// ];

// const area = [
//     'Berakas',
//     'Burong Pingai Ayer',
//     'Gadong',
//     'Kianggeh',
//     'Kilanas',
//     'Kota Batu',
//     'Lumapas',
//     'Mentiri',
//     'Pangkalan Batu',
//     'Peramu',
//     'Saba',
//     'Sengkurong',
//     'Serasa',
//     'Sungai Kebun',
//     'Tamoi',
//     'Bukit Sawat',
//     'Kuala Balai',
//     'Kuala Belait',
//     'Labi',
//     'Liang',
//     'Melilas',
//     'Seria',
//     'Sukang',
//     'Keriam',
//     'Kiudang',
//     'Lamunin',
//     'Pekan Tutong',
//     'Rambai',
//     'Tanjong Maya',
//     'Telisai',
//     'Ukong',
//     'Amo',
//     'Bangar',
//     'Batu Apoi',
//     'Bokok',
//     'Labu'
// ]

const distance = [
    'Less than 3 Km',
    'Between 3 Km to 6 Km',
    'More than 6 Km'
]

// const premise = [
//     'Airport Mall',
//     'Aman Hills Shopping Complex',
//     'Annajat Complex',
//     'Citis Square',
//     'Freshco',
//     'Gadong Centrepoint',
//     'Gadong Properties',
//     'Halim Plaza, Tutong',
//     'Hua Ho Department Store, Manggis',
//     'Jerudong Park Food Court',
//     'KB Sentral',
//     'Little Soho',
//     'Mabohai Shopping Complex',
//     'Mid Valley',
//     'One Riverside',
//     'Onecity Shopping Centre',
//     'Pavo Point',
//     'Petani Mall',
//     'Plaza Athirah',
//     'Regent Square',
//     'Rimba Point',
//     'Seri Qlap Mall',
//     'Seria Plaza',
//     'Setia Kenangan 2 Complex',
//     'Teck Guan Plaza',
//     'The Mall Gadong',
//     'The Walk, Beribi Central',
//     'Times Square Shopping Complex',
//     'V-Plaza Hotel',
//     'Wisma Jaya',
//     'Yayasan Sultan Haji Hassanal Bolkiah'

// ]

class RandomWheelClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
            isModalVisible: false,
            lat: null,
            long: null,
            distance: 3,
            loading: false,
            areaList: this.props.areaListNames,
            premiseList: this.props.premiseListNames
        };
        this.child = null;
    }



    componentDidMount() {
        this.requestCurrentLocation();
        this.props.dispatch(GetAreaAllListAction())
        this.props.dispatch(GetPremiseAllListAction())
        this.props.dispatch(GetDistanceListAction())
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
                        this.props.dispatch(GetNearestRestaurantAction({ lat: position.coords.latitude, long: position.coords.longitude, distance: this.state.distance }))
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

    buttonPress = () => {
        this.setState({
            started: true,
        });

        this.setState({ winnerIndex: null });
        this.child._tryAgain();
        // this.child._onPress()
    };
    render() {
        console.log(this.state.areaList, 'areaList in Class');
        console.log(this.state.premiseList, 'premiseList in Class');
        const wheelOptions = {
            rewards: this.props.restaurantList.map(names => names.name),
            knobSize: 30,
            borderWidth: 5,
            borderColor: '#fff',
            innerRadius: 40,
            duration: 6000,
            iconRewards: this.props.restaurantList.map(names => names.fullPath),
            backgroundColor: 'transparent',

            textAngle: 'horizontal',
            knobSource: require('../../../../assets/icons/knob.png'),
            onRef: ref => (this.child = ref),
        };
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.black3,
                }}>
                <View
                    style={{
                        flex: 0.1,
                        backgroundColor: colors.black2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View
                    style={{
                        flex: 0.9,
                        backgroundColor: colors.black3,
                        justifyContent: 'space-between'
                    }}>
                    <View>
                        <ResponsiveText size={4} color={colors.yellow} margin={[20, 0, 0, 20]} >What to Eat?</ResponsiveText>
                        <TouchableOpacity onPress={this.toggleModal} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, }} >
                            <Icon source={globalPath.FILTER_ICON} size={20} tintColor={colors.grey} />
                            <ResponsiveText color={colors.grey} size={3.5} margin={0, 0, 0, 5} >Refine Search</ResponsiveText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <StatusBar barStyle={'light-content'} />
                        {!this.props.loading ?
                            this.props.restaurantList.map(names => names.name).length ?
                                <WheelOfFortune
                                    options={wheelOptions}

                                    getWinner={(value, index) => {
                                        this.setState({ winnerValue: value, winnerIndex: index });
                                        this.props.navigation.navigate(routeName.RestaurantDetail, this.props.restaurantList.find(element => element.name === value).restaurantBranchId)
                                        // alert('Dish ID: ',participants[this.state.winnerIndex])
                                        //    alert('Dish ID: '+participants[this.state.winnerIndex])
                                    }}
                                />
                                : showMessage({
                                    message: "Oooopsss...",
                                    description: "Seems like there are no restaurants in area you provided.",
                                    type: "info",
                                })
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
                            backgroundColor: colors.black3,
                            alignItems: 'center',
                            marginBottom: 30,
                        }}>
                        <TouchableOpacity
                            onPress={this.buttonPress}
                            style={{
                                backgroundColor: colors.yellow,
                                width: wp(85),
                                height: hp(5),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,
                            }}>
                            <ResponsiveText color={colors.black3}>Randomise</ResponsiveText>
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
                            backgroundColor: colors.black3,
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
                                    style={{ height: hp(3.7), width: 33, marginBottom: 6 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40 }} >

                            <View style={{ backgroundColor: colors.black3, }}>
                                <ResponsiveText color={colors.white} size={3.7} margin={[20, 0, 10, 20]}>
                                    Randomiser setting
                                </ResponsiveText>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                                <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
                                    // onSelect = {(index, value) => this.onSelect(index, value)}
                                    selectedIndex={1}
                                >
                                    <RadioButton value={'item1'} style={{ marginStart: 10 }}>
                                        <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Dishes</ResponsiveText>
                                    </RadioButton>

                                    <RadioButton value={'item2'} style={{ marginStart: 10 }}>
                                        <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>Restaurants</ResponsiveText>
                                    </RadioButton>
                                </RadioGroup>

                            </View>
                            <View style={{ marginStart: 10, marginTop: 15 }}>

                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Area
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        {this.props.areaListNames.length>0?
                                        <DropDown data={this.props.areaListNames} height={hp(4)} width={wp(57)} />
                                            :
                                        <DropDown data={[]} height={hp(4)} width={wp(57)} />

                                        }
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Distance
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        {this.props.distance.length>0 ?
                                            <DropDown
                                            data={this.props.distance}
                                            height={hp(4)}
                                            width={wp(57)}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index, 'DropDown Selections');
                                                index === 0 ? this.setState({ distance: 1 }) : index === 1 ? this.setState({ distance: 6 }) : index === 2 ? this.setState({ distance: 10 }) : null
                                            }} />
                                        :
                                        <DropDown
                                        data={[]}
                                        height={hp(4)}
                                        width={wp(57)}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index, 'DropDown Selections');
                                            index === 0 ? this.setState({ distance: 1 }) : index === 1 ? this.setState({ distance: 6 }) : index === 2 ? this.setState({ distance: 10 }) : null
                                        }} />
                                        }
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, alignItems: 'center' }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Premise
                                    </ResponsiveText>
                                    <View style={{ marginStart: 5 }} >
                                        <DropDown data={this.props.premiseListNames} height={hp(4)} width={wp(57)} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: colors.black3 }}>
                                <View>
                                    <ResponsiveText
                                        color={colors.white}
                                        margin={[20, 0, 0, 20]}
                                        size={3.7}>
                                        Choose how many results
                                    </ResponsiveText>

                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                                        <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
                                        // onSelect = {(index, value) => this.onSelect(index, value)}
                                        >
                                            <RadioButton value={'item1'} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>1</ResponsiveText>
                                            </RadioButton>

                                            <RadioButton value={'item2'} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>2</ResponsiveText>
                                            </RadioButton>

                                            <RadioButton value={'item3'} style={{ marginStart: 10 }}>
                                                <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>3</ResponsiveText>
                                            </RadioButton>
                                        </RadioGroup>


                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: colors.black3,
                                alignItems: 'center',
                                marginBottom: 30,
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    {
                                        this.setState({ isModalVisible: false });
                                        this.props.dispatch(GetNearestRestaurantAction({ lat: this.state.lat, long: this.state.long, distance: this.state.distance }));
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
                                <ResponsiveText color={colors.black3}>Save</ResponsiveText>
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

    // const restaurantListNames = restaurantList.map(names => names.name)
    // const restaurantListImages = restaurantList.map(image => image.fullPath)

    const areaList = useSelector(state => state.appReducers.AllAreas.data)
    const loadingAreaList = useSelector(state => state.appReducers.AllAreas.loading)

    const areaListNames = areaList.map(names => names.name)

    const premiseList = useSelector(state => state.appReducers.AllPremises.data)
    const premiseListNames = premiseList.map(names => names.name)
    
    const distanceList = useSelector(state => state.appReducers.DistanceList.data)
    const distanceListStrings = distanceList.map(string => string.stringValue)

    console.log(distanceListStrings,'distanceList in wheel');

    const [areasList, setAreasList] = useState(areaListNames)
    const [premisesList, setPremisesList] = useState(premiseListNames)

    // console.log(areaList, 'areaList in RandomWheel');
    // console.log(areaListNames, 'areaListNames in RandomWheel');

    // console.log(premiseList, 'premiseList in random Wheel');
    // console.log(premiseListNames, 'premiseListNames in random Wheel');

    useEffect(() => {
        console.log('UseEffect is working');
        setAreasList(areaListNames)
        setPremisesList(premiseListNames)

        return <RandomWheelClass {...props}
            dispatch={dispatch}
            // restaurantListNames={restaurantListNames}
            // restaurantListImages={restaurantListImages} 
            restaurantList={restaurantList}
            loading={loading}
            areaListNames={areaListNames}
            premiseListNames={premiseListNames}
            distance={distanceListStrings}
        />

    }, [restaurantList, areaList, premiseList])



    // console.log(restaurantListNames, 'restaurantListNames');
    // console.log(restaurantListImages, 'restaurantListImages');

    // console.log(restaurantList, 'NearestRestaurants in RandomWheel');

    return <RandomWheelClass {...props}
        dispatch={dispatch}
        // restaurantListNames={restaurantListNames}
        // restaurantListImages={restaurantListImages} 
        restaurantList={restaurantList}
        loading={loading}
        areaListNames={areasList}
        premiseListNames={premisesList}
        distance={distanceListStrings}
    />

        ;

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