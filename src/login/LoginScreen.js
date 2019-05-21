import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import HeaderView from '../headerview/HeaderView';
import ButtonHighLight from '../components/ButtonHighLight';
import AnimatedLoader from 'react-native-animated-loader';
import { connect } from 'react-redux';
import EditBox from '../components/EditBox';
import * as Utils from '../Utils';
import * as AppActions from '../actions';
import AwesomeAlert from '../popup';
import NavigationService from '../services/NavigationService';

var { vw, vh, vmin, vmax } = require('react-native-viewport-units');


var UserModel = {
  phoneNumber: '',
  pinCode: ''
}

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.titleName = "OTP";
    this.phoneNumber = '';
    this.pinCode = '';
    this.state = {
      showAlert: false,
      inputText: '',
    }
  }

  hideAlert = () => {
    this.setState({
        ...this.state,
        showAlert: false
    });
  };
   showAlert = () => {
     this.setState({
       ...this.state,
      showAlert: true
     })
   }

   clearText = () => {
     this.setState({
       ...this.state,
       inputText: '',
     })
   }


  render() {
    var alertMessage = "";
    var placeHolder = "";
    var hidePopupCallBack = () => {
      this.props.hideAlert();
      this.clearText();
    }
    const {loginStatus, errorMessage, showAlert } = this.props;
    if (loginStatus == AppActions.LOGIN_SUCCESS) {
      alertMessage = "Ban da dang nhap thanh cong, ma code da duoc gui den dien thoai";
      placeHolder = "Nhập số Ma pin cua ban";
    } else if(loginStatus == AppActions.LOGIN_ERROR) {
      alertMessage = errorMessage;
      placeHolder = "Nhập số điện thoại của bạn";
    } else if (loginStatus == AppActions.LOGIN_BACK){ 
      placeHolder = "Nhập số điện thoại của bạn";
    } else if (loginStatus == AppActions.ENTER_PIN_SUCESS) {
      placeHolder = "Nhập số điện thoại của bạn";
      alertMessage = "Ban da dang nhap thanh cong";
      NavigationService.navigate('DepositScreen');
      // hidePopupCallBack = () => {
      //   console.log("hide pop up call back");
      //   NavigationService.navigate('DepositScreen');
      // }
    } else if (loginStatus == AppActions.ENTER_PIN_ERROR) {
      placeHolder = "Nhập số điện thoại của bạn";
    }
    const renderButtonBack = () => {
      return ( <ButtonHighLight style={{ marginBottom: 0 }}
        customStyle={styles.buttonHighLight}
        textStyle={styles.buttonFont}
        text="QUAY LAI"
        onPress={() => {
          this.props.back();
        }}
        imageSource={require('../../assets/img_btn_2.png')}
      />)
    }


    const buttonBackView = loginStatus == AppActions.LOGIN_SUCCESS || loginStatus == AppActions.ENTER_PIN_ERROR || loginStatus == AppActions.ENTER_PIN_SUCESS ? renderButtonBack() : null;

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
              <View style={{ flex: 2, flexDirection: 'column' }}>
              </View>
              <View style={{ flex: 15, flexDirection: 'column' }}>
                <Text style={{ marginTop: 5, fontFamily: 'Montserrat_large', alignSelf: 'center', fontSize: Utils.moderateScale(18) }}>
                  CÁC BƯỚC ĐĂNG NHẬP APP OTP{"\n"}
                </Text>
                <Text style={styles.text}>
                  1. Dăng nhập bằng số điện thoại đã đăng ký{"\n"}
                  2. Một mã OTP sẽ được gửi đến số điện thoại đó{"\n"}
                  3. Dùng mã OTP đó để truy nhập vào App{"\n"}
                </Text >
                <EditBox placeholder={placeHolder}
                  style={{ height: Utils.moderateScale(56), width: Utils.moderateScale(292), marginTop: 10 }}
                  textStyle={{ flex: 1, marginLeft: 60, fontFamily: 'Montserrat_small', fontSize: Utils.moderateScale(15) }}
                  enterTextHandler={(text) => {
                    if(loginStatus == AppActions.LOGIN_SUCCESS || loginStatus == AppActions.ENTER_PIN_ERROR) {
                      UserModel.pinCode = text;
                    } else {
                      UserModel.phoneNumber = text;
                    }

                    this.setState({
                      ...this.state,
                      inputText: text,
                    })
                  }}
                  textValue = {this.state.inputText}
                ></EditBox>
                <Text style={styles.text}>
                  Mã OTP đã được gửi đến số điện thoái của bạn {"\n"}
                  (*) Phí khi nhận mã OTP SMS la 1000 xu{"\n"}
                </Text>
                <ButtonHighLight style={{ marginBottom: 0 }}
                  customStyle={styles.buttonHighLight}
                  textStyle={styles.buttonFont}
                  text="ĐĂNG NHẬP"
                  onPress={() => {
                    if(loginStatus == AppActions.LOGIN_SUCCESS) {
                      this.props.enterPin(UserModel.phoneNumber, UserModel.pinCode);
                     
                    } else {
                      this.props.login(UserModel.phoneNumber);
                    }}
                  }
                   
                  imageSource={require('../../assets/img_btn_1.png')}
                />
                {buttonBackView}
                <AwesomeAlert
                  show={showAlert}
                  showProgress={false}
                  title="Thông báo"
                  titleStyle={{ color: 'rgb(247,165,117)' }}
                  message={alertMessage}
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}


                  confirmButtonImgSrc={require('../../assets/btn_confirm.png')}
                  cancelButtonImgSrc={require('../../assets/btn_cancel.png')}
                  onCancelPressed={() => {
                    this.props.hideAlert();
                    this.clearText();
                  }}
                  onConfirmPressed={() => {
                    // this.props.hideAlert();
                    // this.clearText();
                    hidePopupCallBack();
                  }}
                />

              </View>
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
  },

  text: {
    marginTop: 10, fontFamily: 'Montserrat_medium', marginLeft: 20, marginRight: 20, fontSize: Utils.moderateScale(12)
  },
  buttonHighLight: {
    height: Utils.moderateScale(61), width: Utils.moderateScale(200), alignSelf: 'center'
  },

  buttonFont: {
    fontSize: Utils.moderateScale(20), color: 'white', textAlign: 'center', marginBottom: 5
  },

  iconBtn: {
    margin: 1,
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

const mapStateToProps = state => {
  return {
    isLoading: state.login.isLoading,
    loginStatus: state.login.loginStatus,
    errorMessage: state.login.errorMessage,
    showAlert: state.login.showAlert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (phoneNumber) => {
      console.log("login " + phoneNumber);
      dispatch(AppActions.requestLoginPhone(phoneNumber));
    },
    enterPin: (phoneNumber, pinCode) => {
      dispatch(AppActions.reuqestLoginPin(phoneNumber, pinCode));
    },
    hideAlert: () => {
      dispatch(AppActions.hideAlert());
    },
    back: () => {
      dispatch(AppActions.loginBack());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);