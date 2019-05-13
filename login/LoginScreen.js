import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import HeaderView from '../headerview/HeaderView';
import ButtonHighLight from '../components/ButtonHighLight';
import AnimatedLoader from 'react-native-animated-loader';
import { connect } from 'react-redux';
import EditBox from '../components/EditBox';
import * as Utils from '../Utils';
import * as AppActions from '../actions';

var { vw, vh, vmin, vmax } = require('react-native-viewport-units');


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.titleName = "OTP";
    console.log(Utils.screenWidth);
    console.log(vw + " " + vh + " " + vmin + " " + vmax);
  }

  render() {
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
              <View style={{ flex: 15, flexDirection: 'column' }}>
                <Text style={{ marginTop: 5, fontFamily: 'Montserrat_large', alignSelf: 'center', fontSize: Utils.moderateScale(18) }}>
                  CÁC BƯỚC ĐĂNG NHẬP APP OTP{"\n"}
                </Text>
                <Text style={styles.text}>
                  1. Dăng nhập bằng số điện thoại đã đăng ký{"\n"}
                  2. Một mã OTP sẽ được gửi đến số điện thoại đó{"\n"}
                  3. Dùng mã OTP đó để truy nhập vào App{"\n"}
                </Text >
                <EditBox placeholder="Nhập số điện thoại của bạn"
                  style={{ height: Utils.moderateScale(56), width: Utils.moderateScale(292), marginTop: 10 }}
                  textStyle={{ flex: 1, marginLeft: 60, fontFamily: 'Montserrat_small', fontSize: Utils.moderateScale(15) }}
                ></EditBox>
                <Text style={styles.text}>
                  Mã OTP đã được gửi đến số điện thoái của bạn {"\n"}
                  (*) Phí khi nhận mã OTP SMS la 1000 xu{"\n"}
                </Text>
                <ButtonHighLight style={{ marginBottom: 0 }}
                  customStyle={styles.buttonHighLight}
                  textStyle={styles.buttonFont}
                  text="ĐĂNG NHẬP"
                  onPress={() => this.props.login({})}
                  imageSource={require('../assets/img_btn_1.png')}
                />

                <ButtonHighLight style={{ marginBottom: 0 }}
                  customStyle={styles.buttonHighLight}
                  textStyle={styles.buttonFont}
                  text="QUAY LAI"
                  onPress={() => this.props.login({})}
                  imageSource={require('../assets/img_btn_2.png')}
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
    // height: null,
    // justifyContent: 'flex-start',
    backgroundColor: 'black'
  },

  text: {
    marginTop: 10, fontFamily: 'Montserrat_medium', marginLeft: 20, marginRight: 20, fontSize: Utils.moderateScale(12)
  },
  buttonHighLight: {
    height: Utils.moderateScale(61), width: Utils.moderateScale(200), alignSelf: 'center'
  },

  buttonFont: {
    fontSize: Utils.moderateScale(20), color: 'white', textAlign: 'center',
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
    isLoading: state.login.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(AppActions.requestLoginByPass(user));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);