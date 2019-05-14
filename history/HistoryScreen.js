
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import HeaderView from '../headerview/HeaderView';
import ButtonImage from '../components/ButtonImage';
import { connect } from 'react-redux';
import * as AppActions from '../actions';
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

    // showDespoitHistory = () => {
    //     this.setState({
    //         showHistory: true,
    //     })
    // };

    // showExchangeHistory = () => {
    //     this.setState({
    //         showHistory: false,
    //     })
    // }


    showExchangeHistoryView = () => {
        return (
            <View>
                <Text>this is exchange history view</Text>
            </View>
        )
    }

    showDepositHistoryView = () => {
        const myData = [1, 2, 3, 4, 5, 7, 8, 9, 10, 1, 1, 1, 1, 1];
        return (
            <View style={{ flex: 1, backgroundColor: 'red', }}>
                <ImageBackground source={require('./res/img_history_bg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ width: Utils.moderateScale(300), height: Utils.moderateScale(50), alignSelf: 'center' }}>
                        <ImageBackground source={require('./res/img_history_title.png')} style={{ width: Utils.moderateScale(300), height: Utils.moderateScale(50), flexDirection: 'row' }} resizeMode='contain'>
                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ width: Utils.moderateScale(300), height: Utils.moderateScale(400), alignSelf: 'center', backgroundColor: 'yellow' }}>
                        {/* <Text> 12312312 </Text> */}
                        <FlatList
                            data={myData}
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={(movieItem) => {
                                const { item, index } = movieItem;
                                return (
                                    // <Text>1111111</Text>
                                    <View style={{ width: Utils.moderateScale(300), height: Utils.moderateScale(25), alignSelf: 'center', backgroundColor : 'blue' }}>
                                        <ImageBackground source={require('./res/img_history_item.png')} style={{ width: Utils.moderateScale(300), height: Utils.moderateScale(25), flexDirection: 'row' }} resizeMode='contain'>
                                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                                            <Text style={{ width: Utils.moderateScale(60), alignSelf: 'center', textAlign: 'center' }}>1222</Text>
                                        </ImageBackground>
                                    </View>
                                )
                            }}>
                        </FlatList>


                    </View>
                </ImageBackground>
                <Text>this is depost histosry view</Text>
            </View>
        )
    }

    render() {
        const myData = [1, 2, 3, 4, 5];
        const { showAlert, showHistory } = this.state;
        const { historyState } = this.props;
        const historyview = historyState == AppActions.SELECT_DEPOSIT_HISTORY ? this.showDepositHistoryView() : this.showExchangeHistoryView();
        console.log(historyState);
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

                            <View style={{ justifyContent: 'center', marginTop: 70, flexDirection: 'row' }}>
                                <ButtonImage
                                    customStyle={styles.tabButton}
                                    textStyle={styles.buttonFont}
                                    text="NAP"
                                    onPress={() => { this.props.selectDepositHistory() }}
                                    imageSource={require('./res/btn_normal.png')}
                                    imageSelectSource={require('./res/btn_chose.png')}
                                    isButtonPressed={historyState == AppActions.SELECT_DEPOSIT_HISTORY}
                                />

                                <ButtonImage
                                    customStyle={styles.tabButton}
                                    textStyle={styles.buttonFont}
                                    text="DOI"
                                    onPress={() => { this.props.selectGiftExchangeHistory() }}
                                    imageSource={require('./res/btn_normal_2.png')}
                                    imageSelectSource={require('./res/btn_chose_2.png')}
                                    isButtonPressed={historyState == AppActions.SELECT_GIFT_EXCHANGE_HISTORY}
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
        // backgroundColor: 'black'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabButton: {
        height: Utils.moderateScale(70), width: Utils.moderateScale(150)
    },

    buttonFont: {
        fontSize: Utils.moderateScale(20), color: 'white', textAlign: 'center',
    },

});

const mapStateToProps = state => {
    return {
        historyState: state.history.historyState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectDepositHistory: () => {
            dispatch(AppActions.selectDepositHistory());
        },
        selectGiftExchangeHistory: () => {
            dispatch(AppActions.selectGiftExchangeHistory());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);

// export default HistoryScreen;