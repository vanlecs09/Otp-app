
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import HeaderView from '../headerview/HeaderView';
import ButtonImage from '../components/ButtonImage';
import ButtonHighLight from '../components/ButtonHighLight';
import AwesomeAlert from '../popup';
import * as Utils from '../Utils';


class HistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.titleName = "LICH SU";
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    showDespoitHistory = () => {
        this.setState({
            showHistory: true,
        })
    };
    
    showExchangeHistory = () => {
        this.setState({
            showHistory: false,
        })
    }


    showExchangeHistoryView = () => {
        return ( 
            <View>
                <Text>this is exchange history view</Text>
            </View>
        )
    }

    showDepositHistoryView = () => {
        return (
            <View>
                <Text>this is depost histosry view</Text>
            </View>
        )
    }

    render() {
        const myData = [1, 2, 3, 4, 5];
        const { showAlert, showHistory } = this.state;
        const historyview = showHistory == true ?  this.showDepositHistoryView() : this.showExchangeHistoryView();
        return (
            <ImageBackground source={require('../assets/img_bg.png')} style={styles.background}>
                <AnimatedLoader
                    visible={this.props.isLoading}
                    overlayColor="rgba(0,0,0,0.5)"
                    animationStyle={styles.lottie}
                    speed={1}
                />
                <View style={styles.container}>
                    <HeaderView titleName={this.titleName}></HeaderView>
                    <View style={styles.container2}>
                        <ImageBackground source={require('../assets/img_bg2.png')} style={{ width: '100%', height: '100%' }} resizeMode='cover'>

                            <View style={{ justifyContent: 'center', marginTop: 70, backgroundColor: 'red', flexDirection :'row' }}>
                                <ButtonImage
                                    customStyle={{ height: 140 / Utils.screenScale, width: 192 / Utils.screenScale, marginLeft: 5 }}
                                    text="ĐĂNG NHẬP"
                                    onPress={() => { this.showDespoitHistory() }}
                                    imageSource={require('../assets/btn_vietel.png')}
                                    imageSelectSource={require('../assets/btn_vietel_select.png')}
                                    isButtonPressed={0 == 1}
                                />

                                <ButtonImage
                                    customStyle={{ height: 140 / Utils.screenScale, width: 192 / Utils.screenScale, marginLeft: 5 }}
                                    text="ĐĂNG NHẬP"
                                    onPress={() => { this.showExchangeHistory() }}
                                    imageSource={require('../assets/btn_vietel.png')}
                                    imageSelectSource={require('../assets/btn_vietel_select.png')}
                                    isButtonPressed={0 == 1}
                                />
                            </View>
                            {historyview}

                        </ImageBackground>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // backgroundColor: 'black'
    },

    container2: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default HistoryScreen;