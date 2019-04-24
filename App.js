import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/login/LoginScreen'
import DepositScreen from './screens/deposit/DepositScreen';
import NavigationService from './services/NavigationService';

const MainNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  DepositScreen: { screen: DepositScreen }
})


const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/img_bg.png')} style={styles.container}>
        <View style={{ width: '100%', height: '8%' }}>
          <Button
            title="ĐĂNG NHẬP"
            onPress={() => {NavigationService.navigate('LoginScreen')}}>
          </Button>
        </View>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setContainer(navigatorRef);
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
