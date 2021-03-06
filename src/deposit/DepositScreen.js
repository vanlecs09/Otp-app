import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';
import DropDown from '../dropdownMenu';
import EditBox from '../components/EditBox';
import ButtonHighLight from '../components/ButtonHighLight';
import * as Utils from '../Utils';
import { connect } from 'react-redux';
import * as AppActions from '../actions';

const {
    Select,
    Option,
    OptionList,
    updatePosition
} = DropDown;

const DROPDOWN_MENU_COLOR = 'rgb(43, 49, 53)'

class DepositScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopUp: false };
        this.titleName = "Nạp thẻ";

    }

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', this.load)
    }

    load = () => {
        this.props.resetDeposit();
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
        // const { showAlert } = this.state;
        const { cardIndex, status, isLoading, showAlert } = this.props;
        var alertMessage = "";
        if(status == AppActions.DEPOSIT_STATE_NONE) {

        } else if (status == AppActions.DEPOSIT_REQUEST_SUCCESS) {
            var alertMessage = "chuc mung bạn abc";
        } else if (status == AppActions.REQUEST_ERROR) {
            alertMessage ="ban đã request fail";
        }

        console.log(showAlert  +  "   "  + alertMessage);
        return (
            <ImageBackground source={require('../../assets/img_bg.png')} style={styles.background}>
                <AnimatedLoader
                    visible={isLoading}
                    overlayColor="rgba(0,0,0,0.5)"
                    animationStyle={styles.lottie}
                    speed={1}
                />
                <View style={styles.container}>
                    <HeaderView titleName={this.titleName}></HeaderView>
                    <View style={styles.container2}>
                        <ImageBackground source={require('../../assets/img_bg2.png')} style={{ width: '100%', height: '100%' }} resizeMode='cover'>

                            <CardTypeSelectionView></CardTypeSelectionView>
                            <Text style={{ height: Utils.moderateScale(20), marginTop: 5, fontFamily: 'Montserrat_large', alignSelf: 'center', fontSize: Utils.moderateScale(18) }}>
                                CHỌN MỆNH GIÁ{"\n"}
                            </Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 0, zIndex: 2 }}>
                                <View style={{ width: Utils.moderateScale(250), height: Utils.moderateScale(60), zIndex: 2 }}>
                                    <Select
                                        width={Utils.moderateScale(250)}
                                        ref="SELECT1"
                                        height={Utils.moderateScale(60)}
                                        optionListRef={this._getOptionList.bind(this)}
                                        defaultValue="Chọn mệnh giá ..."
                                        onSelect={this._canada.bind(this)}
                                        styleOption={{ alignSelf: 'flex-start', backgroundColor: DROPDOWN_MENU_COLOR, marginLeft: 15, marginTop: 20, height: 20 }}
                                        styleText={{ color: 'white' }}
                                        style={{ alignItems: 'center' }}

                                        optionListProps={{ leftOffset: 15, topOffset: 20, extraWidth: -50 }}
                                    >
                                        <Option styleText={{ color: 'white' }}>100</Option>
                                        <Option styleText={{ color: 'white' }}>200</Option>
                                        <Option styleText={{ color: 'white' }}>300</Option>
                                        <Option styleText={{ color: 'white' }}>400</Option>

                                        <Option styleText={{ color: 'white' }}>500</Option>
                                        <Option styleText={{ color: 'white' }}>600</Option>
                                        <Option styleText={{ color: 'white' }}>700</Option>
                                    </Select>
                                    <OptionList ref="OPTIONLIST" backgroundColor={DROPDOWN_MENU_COLOR} />
                                </View>
                            </View>
                            <Text style={{ zIndex: 0, alignSelf: 'center' }}> ooo ,,, ooo {"\n"} 999999 </Text>
                            <Text style={{ zIndex: 0, alignSelf: 'center' }}> Nạp thẻ </Text>
                            <EditBox placeholder="Nhập số điện thoại của bạn"
                                style={{ height: Utils.moderateScale(56), width: Utils.moderateScale(292), marginTop: 10 }}
                                textStyle={{ flex: 1, marginLeft: 60, fontFamily: 'Montserrat_small', fontSize: Utils.moderateScale(15) }}>
                            </EditBox>
                            <EditBox placeholder="Nhập số điện thoại của bạn"
                                style={{ height: Utils.moderateScale(56), width: Utils.moderateScale(292), marginTop: 10 }}
                                textStyle={{ flex: 1, marginLeft: 60, fontFamily: 'Montserrat_small', fontSize: Utils.moderateScale(15) }}
                            ></EditBox>
                            <ButtonHighLight
                                customStyle={{ height: Utils.moderateScale(61), width: Utils.moderateScale(200), alignSelf: 'center', marginTop: 10 }}
                                textStyle={{ fontSize: Utils.moderateScale(20), color: 'white', textAlign: 'center', marginBottom: 5 }}
                                text="Login screen"
                                onPress={() => {
                                    // this.showAlert();
                                    this.props.requestDepositCard(0,0);
                                }}
                                imageSource={require('../../assets/img_btn_1.png')}
                            />

                            <AwesomeAlert
                                show={showAlert}
                                showProgress={false}
                                title="Thông báo"
                                titleStyle={{ color: 'rgb(247,165,117)' }}
                                message={alertMessage}
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

const mapStateToProps = state => {
    return {
          cardIndex: state.deposit.cardIndex,
          isLoading: state.deposit.isLoading,
          status: state.deposit.status,
          showAlert: state.deposit.showAlert
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetDeposit: () => {
            dispatch(AppActions.resetDeposit());
        },
        requestDepositCard: (cardType, cardValue) => {
            dispatch(AppActions.requestDepositCard(cardType, cardValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositScreen);



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
        // alignItems: 'center',
        // backgroundColor: 'black'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottie: {
        width: 100,
        height: 100,
      },

});