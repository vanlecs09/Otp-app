import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import AwesomeAlert from '../popup';
import HeaderView from '../headerview/HeaderView';
import CardTypeSelectionView from '../cardTypeSeletion/CardTypeSelectionView';
import DropDown from '../dropdownMenu';
const {
    Select,
    Option,
    OptionList,
    updatePosition
} = DropDown;

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

                    <ImageBackground source={require('../assets/img_bg2.png')} style={styles.container}>
                        <CardTypeSelectionView></CardTypeSelectionView>
                        <View style={{ flex: 1, justifyContent: 'flex-start'}}>
                            <Select
                                width={250}
                                ref="SELECT1"
                                optionListRef={this._getOptionList.bind(this)}
                                defaultValue="Chọn mệnh giá ..."
                                onSelect={this._canada.bind(this)}
                                styleOption={{alignSelf:'flex-start', marginTop: 4, backgroundColor : 'rgb(43, 49, 53)', marginLeft: 15}} 
                                styleText={{color:'white'}}
                                optionListProps= {{leftOffset:15}}
                                >
                      
                                <Option styleText={{color:'white'}}>Alberta</Option>
                                <Option styleText={{color:'white'}}>British Columbia</Option>
                                <Option styleText={{color:'white'}}>Manitoba</Option>
                                <Option styleText={{color:'white'}}>New Brunswick</Option>
                            </Select>
                            <OptionList ref="OPTIONLIST" />
                        </View>

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