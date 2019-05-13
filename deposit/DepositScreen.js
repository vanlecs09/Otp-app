import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';
import DropDown from '../dropdownMenu';
import EditBox from '../components/EditBox';
import * as Utils from '../Utils';

const {
    Select,
    Option,
    OptionList,
    updatePosition
} = DropDown;

const DROPDOWN_MENU_COLOR = 'rgb(43, 49, 53)'

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
                            <Text style={{ height : Utils.moderateScale(20), marginTop: 5, fontFamily: 'Montserrat_large', alignSelf: 'center', fontSize: Utils.moderateScale(18), backgroundColor: 'blue' }}>
                                CHỌN MỆNH GIÁ{"\n"}
                            </Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 0, zIndex: 1 }}>
                                <Select
                                    width={250}
                                    ref="SELECT1"
                                    height={60}
                                    optionListRef={this._getOptionList.bind(this)}
                                    defaultValue="Chọn mệnh giá ..."
                                    onSelect={this._canada.bind(this)}
                                    styleOption={{ alignSelf: 'flex-start', backgroundColor: DROPDOWN_MENU_COLOR, marginLeft: 15, marginTop: 20, height: 20 }}
                                    styleText={{ color: 'white' }}
                                    style={{ alignItems: 'center' }}

                                    optionListProps={{ leftOffset: 40, topOffset: 20, extraWidth: -50 }}
                                >

                                    <Option styleText={{ color: 'white' }}>Alberta</Option>
                                    <Option styleText={{ color: 'white' }}>British Columbia</Option>
                                    <Option styleText={{ color: 'white' }}>Manitoba</Option>
                                    <Option styleText={{ color: 'white' }}>New Brunswick</Option>
                                </Select>
                                <OptionList ref="OPTIONLIST" backgroundColor={DROPDOWN_MENU_COLOR} />
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
                            <Button
                                title="login screen"
                                onPress={() => {
                                    this.showAlert();
                                }}
                                style={{ zIndex: 0 }}
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
        // alignItems: 'center',
        // backgroundColor: 'black'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


});