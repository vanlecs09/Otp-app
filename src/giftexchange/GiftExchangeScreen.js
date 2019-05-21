import React from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';
import ButtonHighLight from '../components/ButtonHighLight';
import ButtonImage from '../components/ButtonImage';
import * as Utils from '../Utils';
import { connect } from 'react-redux';
import * as AppActions from '../actions';

const arrVietelImage = [
    require('../../assets/btn_vietel.png'),
    require('../../assets/btn_vietel.png'),
    require('../../assets/btn_vietel.png'),
    require('../../assets/btn_vietel.png'),
    require('../../assets/btn_vietel.png'),
    require('../../assets/btn_vietel.png'),
]

const arrVietelImageSelect = [
    require('../../assets/btn_vietel_select.png'),
    require('../../assets/btn_vietel_select.png'),
    require('../../assets/btn_vietel_select.png'),
    require('../../assets/btn_vietel_select.png'),
    require('../../assets/btn_vietel_select.png'),
    require('../../assets/btn_vietel_select.png'),
]


const arrMobiImage = [
    require('../../assets/btn_mobi.png'),
    require('../../assets/btn_mobi.png'),
    require('../../assets/btn_mobi.png'),
    require('../../assets/btn_mobi.png'),
    require('../../assets/btn_mobi.png'),
    require('../../assets/btn_mobi.png'),
]

const arrMobiImageSelect = [
    require('../../assets/btn_mobi_select.png'),
    require('../../assets/btn_mobi_select.png'),
    require('../../assets/btn_mobi_select.png'),
    require('../../assets/btn_mobi_select.png'),
    require('../../assets/btn_mobi_select.png'),
    require('../../assets/btn_mobi_select.png'),
]

const arrNivaImage = [
    require('../../assets/btn_vina.png'),
    require('../../assets/btn_vina.png'),
    require('../../assets/btn_vina.png'),
    require('../../assets/btn_vina.png'),
    require('../../assets/btn_vina.png'),
    require('../../assets/btn_vina.png'),
]

const arrNivaImageSelect = [
    require('../../assets/btn_vina_select.png'),
    require('../../assets/btn_vina_select.png'),
    require('../../assets/btn_vina_select.png'),
    require('../../assets/btn_vina_select.png'),
    require('../../assets/btn_vina_select.png'),
    require('../../assets/btn_vina_select.png'),
]

const arrImageall = {
    image: require('../../assets/btn_vietel.png'),
}

class GiftExchangeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopUp: false };
        this.titleName = "Đổi quà";
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
        const { cardIndex, cardValueIndex } = this.props;
        var arrImage = [];
        var arrImageSelect = [];
        if (cardIndex == 1) {
            arrImage = arrVietelImage;
            arrImageSelect = arrVietelImageSelect;
        } else if (cardIndex == 2) {
            arrImage = arrMobiImage;
            arrImageSelect = arrMobiImageSelect;
        } else if (cardIndex == 3) {
            arrImage = arrNivaImage;
            arrImageSelect = arrNivaImageSelect;
        } else {
            arrImage = arrVietelImage;
            arrImageSelect = arrVietelImageSelect;
        }
        return (
            <ImageBackground source={require('../../assets/img_bg.png')} style={styles.background}>
                <AnimatedLoader
                    visible={this.props.isLoading}
                    overlayColor="rgba(0,0,0,0.5)"
                    animationStyle={styles.lottie}
                    speed={1}
                />
                <View style={styles.container}>
                    <HeaderView titleName={this.titleName}></HeaderView>
                    <View style={styles.container2}>
                        <ImageBackground source={require('../../assets/img_bg2.png')} style={{ width: '100%', height: '100%' }} resizeMode='cover'>

                            <CardTypeSelectionView></CardTypeSelectionView>
                            <Text style={{ alignSelf: 'center', marginTop: 60 }}>Chon Menh Gia</Text>
                            <View style={{ justifyContent: 'center', marginTop: 10 }}>
                                <FlatList data={myData}
                                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3}
                                    key={1}
                                    scrollEnabled={false}
                                    renderItem={(movieItem) => {
                                        const { item, index } = movieItem;
                                        return (
                                            // <View style = {{height: Utils.moderateScale(70), width: Utils.moderateScale(96),margin : 5, width: Utils.moderateScale(96), backgroundColor : "blue"}}>

                                            // </View>
                                            <ButtonImage
                                                customStyle={{ alignSelf: 'center',height: Utils.moderateScale(70), margin : 5,width: Utils.moderateScale(96), width: Utils.moderateScale(96) }}
                                                // text="QUAY LẠI"
                                                onPress={() => this.props.selectCardValue(index)}
                                                imageSource={arrImage[index]}
                                                imageSelectSource={arrImageSelect[index]}
                                                isButtonPressed={cardValueIndex == index}
                                            />
                                        )
                                    }}>

                                </FlatList>
                            </View>

                            <ButtonHighLight style={{ marginBottom: 0 }}
                                customStyle={{ height: Utils.moderateScale(61), width: Utils.moderateScale(200), alignSelf: 'center' }}
                                textStyle={{ fontSize: Utils.moderateScale(20), color: 'white', textAlign: 'center', marginBottom : 5 }}
                                text="ĐỔI QUÀ"
                                onPress={() => {
                                    this.showAlert();
                                }}
                                imageSource={require('../../assets/img_btn_1.png')}
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


                                confirmButtonImgSrc={require('../../assets/btn_confirm.png')}
                                cancelButtonImgSrc={require('../../assets/btn_cancel.png')}
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
        cardIndex: state.deposit.cardIndex,
        cardValueIndex: state.deposit.cardValueIndex,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectCardValue: (cardValueIndex) => {
            dispatch(AppActions.selectCardValue(cardValueIndex));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftExchangeScreen);