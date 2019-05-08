import React from 'react';
import { TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import HeaderView from '../headerview/HeaderView';
import ButtonHighLight from '../components/ButtonHighLight';
import AnimatedLoader from 'react-native-animated-loader';
import LoginActions from '../actions';
import { connect } from 'react-redux';
import * as AppActions from '../actions';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.titleName = "OTP";
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
          <ImageBackground source={require('../assets/img_bg2.png')} style={styles.container}>
            <Text style={{ marginTop: 50, fontFamily: 'Montserrat_medium', alignSelf: 'center', fontSize: 15 }}>
              CÁC BƯỚC ĐĂNG NHẬP APP OTP{"\n"}
            </Text>
            <Text style={{ fontFamily: 'Montserrat_small', marginLeft: 30, marginRight: 30, fontSize: 12 }}>
              1. Dăng nhập bằng số điện thoại đã đăng ký{"\n"}
              2. Một mã OTP sẽ được gửi đến số điện thoại đó{"\n"}
              3. Dùng mã OTP đó để truy nhập vào App{"\n"}
            </Text >
            <View style={styles.SectionStyle}>
              <ImageBackground
                source={require('./res/img_input.png')}
                style={styles.ImageStyle}>
                <TextInput
                  style={{ flex: 1, marginLeft: 40, fontFamily: 'Montserrat_small' }}
                  placeholder="Enter Your Name Here"
                  underlineColorAndroid="transparent"
                />
              </ImageBackground>
            </View>
            <Text style={{ marginTop: 20, fontFamily: 'Montserrat_small', marginLeft: 30, marginRight: 30, fontSize: 12 }}>
              Mã OTP đã được gửi đến số điện thoái của bạn {"\n"}
              (*) Phí khi nhận mã OTP SMS la 1000 xu{"\n"}
            </Text>
            <ButtonHighLight style={{ marginBottom: 0 }}
              sizeStyle={{ height: 61, width: 209 }}
              text="ĐĂNG NHẬP"
              onPress={() => this.props.login({})}
              imageSource={require('../assets/img_btn_1.png')}
            />

            <ButtonHighLight style={{ marginBottom: 0 }}
              sizeStyle={{ height: 61, width: 209 }}
              text="QUAY LẠI"
              onPress={() => this.props.navigation.navigate('DepositScreen')}
              imageSource={require('../assets/img_btn_2.png')}
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
    flexDirection: 'column',
    width: '100%',
    height: '80%',
  },

  ImageStyle: {
    height: '100%',
    width: '100%',
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0',
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
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
      dispatch(LoginActions.requestLoginByPass(user));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);