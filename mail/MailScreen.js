
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import HeaderView from '../headerview/HeaderView';
import ButtonHighLight from '../components/ButtonHighLight';
import AwesomeAlert from '../popup';
import * as Utils from '../Utils';


class MailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.titleName = "HOP THU";
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

    render() {
        const myData = [1, 2, 3, 4, 5, 7, 8, 9, 10, 1, 1, 1, 1, 1];
        const { showAlert } = this.state;
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
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                            </View>
                            <View style={{ justifyContent: 'flex-start', marginTop: 0, flex:14 }}>
                                <FlatList data={myData}
                                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={(movieItem) => {
                                        const { item, index } = movieItem;
                                        return (

                                            <ButtonHighLight 
                                                customStyle={{ height: Utils.moderateScale(50), width: Utils.moderateScale(300), margin: 5,alignSelf: 'center', resizeMode: 'contain' }}
                                                textStyle={{ fontSize: 20, color: 'black', textAlign: 'center', }}
                                                text="MAI DOC DI NE"
                                                onPress={() => {
                                                    this.showAlert();
                                                }}
                                                imageSource={require('./res/btn_mail.png')}
                                            />
                                        )
                                    }}>

                                </FlatList>

                                <AwesomeAlert
                                    show={showAlert}
                                    showProgress={false}
                                    title="Thông báo"
                                    titleStyle={{ color: 'rgb(247,165,117)' }}
                                    message="Bạn muốn dùng 140.000 xu để đổi thể Viettel 10k ? "
                                    closeOnTouchOutside={true}
                                    closeOnHardwareBackPress={false}
                                    showCancelButton={true}
                                    showConfirmButton={true}
                                    confirmButtonImgSrc={require('../assets/btn_confirm.png')}
                                    cancelButtonImgSrc={require('../assets/btn_cancel.png')}
                                    onCancelPressed={() => {
                                        this.hideAlert();
                                    }}
                                    onConfirmPressed={() => {
                                        this.hideAlert();
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                            </View>
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
    },

    container2: {
        flex: 1,
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: 'black'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default MailScreen;