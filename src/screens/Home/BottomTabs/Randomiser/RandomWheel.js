

//Node Imports
import React from 'react';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import {
    Image, StyleSheet, TouchableOpacity, View, Text,
    StatusBar,
    Button,
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


const participants = [
    
    'I-Lotus',
    'Dynasty',
    'PappaRich',
    'A9 Cafe',
    'Burger King',
    'blueEden',
    
    
   
];

export default class RandomWheel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
            isModalVisible: false,
        };
        this.child = null;
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
        const wheelOptions = {
            rewards: participants,
            knobSize: 30,
            borderWidth: 5,
            borderColor: '#fff',
            innerRadius: 30,
            duration: 6000,
            iconRewards: [
                require('../../../../assets/fake_Images/wheel1.png'),
                require('../../../../assets/fake_Images/wheel2.png'),
                require('../../../../assets/fake_Images/wheel3.png'),
                require('../../../../assets/fake_Images/wheel4.png'),
                require('../../../../assets/fake_Images/wheel5.png'),
                require('../../../../assets/fake_Images/wheel6.png'),
            ],
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

                        <WheelOfFortune
                            options={wheelOptions}

                            getWinner={(value, index) => {
                                this.setState({ winnerValue: value, winnerIndex: index });
                                this.props.navigation.navigate(routeName.RestaurantDetail)
                                // alert('Dish ID: ',participants[this.state.winnerIndex])
                            //    alert('Dish ID: '+participants[this.state.winnerIndex])
                            }}
                        /> 





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
                >
                    {/* ------------ ModalView -------------- */}

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.black3,
                            justifyContent: 'space-between'
                        }}>
                        <View style={{ marginTop: 40 }} >

                            <View style={{ backgroundColor: colors.black3, }}>
                                <ResponsiveText color={colors.white} size={3.7} margin={[20, 0, 10, 20]}>
                                    Randomiser setting
                                </ResponsiveText>
                            </View>
                            <View style={{ marginStart: 10, }}>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Dishes
                                    </ResponsiveText>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Restaurants
                                    </ResponsiveText>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Distance
                                    </ResponsiveText>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Area
                                    </ResponsiveText>
                                </View>
                                <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
                                    <CheckBox />
                                    <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
                                        Premise
                                    </ResponsiveText>
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
                                onPress={this.toggleModal}
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