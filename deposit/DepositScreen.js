import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import ButtonImage from '../components/ButtonImage';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';

export default class DepositScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopUp: false };
        this.titleName = "Nạp thẻ";
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

                    <ImageBackground source={require('../assets/img_bg2.png')} style={styles.container}>
                        <CardTypeSelectionView></CardTypeSelectionView>
                        <Button
                            title="login screen"
                            onPress={() => {
                                this.showAlert();
                            }}
                        />
                        <AwesomeAlert
                            show={showAlert}
                            showProgress={false}
                            title="Thông báo"
                            titleStyle={{ color: 'rgb(247,165,117)' }}
                            message="Bạn muốn dùng 140.000 xu để đổi thể Viettel 10k ?"
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

                    </ImageBackground>
                </View>
            </ImageBackground>
        )
    }
}




var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '80%',
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


});