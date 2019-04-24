import React from 'react';
import { TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import HeaderView from '../headerview/HeaderView';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.titleName = "OTP";
  }

  render() {
    return (
      <ImageBackground source={require('../assets/img_bg.png')} style={styles.background}>
        <View style={styles.container}>
        
          <HeaderView titleName = {this.titleName}></HeaderView>
          
          <ImageBackground source={require('./res/img_bg2.png')} style={styles.container}>
            <Text style={{ marginTop: 50 }}>
              CÁC BƯỚC ĐĂNG NHẬP OTPc{"\n"}
            </Text>
            <Text>
              1. đăng nhập mã {"\n"}
              2. abc{"\n"}
              3. xyz{"\n"}
            </Text>

            <View style={styles.SectionStyle}>
              <ImageBackground
                source={require('./res/img_input.png')}
                style={styles.ImageStyle}>
                <TextInput
                  style={{ flex: 1, marginLeft: 40 }}
                  placeholder="Enter Your Name Here"
                  underlineColorAndroid="transparent"
                />
              </ImageBackground>
            </View>

            <Text style={{ marginTop: 20 }}>
              Ma OTP duoc gui den so dien thoai cua ban{"\n"}
              (*) Phi khi nhan ma OTP SMS la 1000 xu{"\n"}
            </Text>
            <Button style={{ marginBottom: 0 }}
              title="ĐĂNG NHẬP"
              onPress={() => this.props.navigation.navigate('DepositScreen')}
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
    height: '70%',
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
    width: '80%'
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default LoginScreen;