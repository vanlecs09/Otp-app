import React from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';
import ButtonHighLight from '../components/ButtonHighLight';
import * as Utils from '../Utils';
import { connect } from 'react-redux';

class GiftExchangeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopUp: false };
        this.titleName = "Đổi quà";

        console.log(Dimensions.get('window'));
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

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }

    _canada(province) {

        this.setState({
            ...this.state,
            canada: province
        });
    }


    render() {
        const { showAlert } = this.state;
        var myData = [1, 2, 3, 4, 5, 6]
        const { cardIndex } = this.props;
        if (cardIndex == 1) {

        } else if (cardIndex == 2) {

        } else if (cardIndex == 3) {

        } else {

        }
        console.log(Utils.screenScale);
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

                            <CardTypeSelectionView></CardTypeSelectionView>
                            <Text style={{ alignSelf: 'center', marginTop: 60 }}>Chon Menh Gia</Text>
                            <View style={{ justifyContent: 'center', marginTop: 10 }}>
                                <FlatList data={myData}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3}
                                    key={1}
                                    scrollEnabled={false}
                                    renderItem={(movieItem) =>
                                        <View style={{ flexDirection: 'column', flex: 1, margin: 5 }}>
                                            <Image source={require('../assets/btn_vietel.png')}
                                                style={{ height: 140 / Utils.screenScale, width: 192 / Utils.screenScale, justifyContent: 'center', alignItems: 'center' }}></Image>
                                        </View>
                                    }
                                >

                                </FlatList>
                            </View>

                            <ButtonHighLight style={{ marginBottom: 0 }}
                                sizeStyle={{ height: 61, width: '50%' }}
                                text="ĐỔI QUÀ"
                                onPress={() => {
                                    this.showAlert();
                                }}
                                imageSource={require('../assets/img_btn_1.png')}
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
        height: '100%',
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


});

const mapStateToProps = state => {
    return {
        cardIndex: state.deposit.cardIndex
    }
}


export default connect(mapStateToProps)(GiftExchangeScreen);