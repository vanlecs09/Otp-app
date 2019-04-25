import React from 'react';
import {Text} from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './login/LoginScreen'
import DepositScreen from './deposit/DepositScreen';
import SideBar from './sidebar/SideBar';



const MyDrawerNavigator = createDrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  DepositScreen: { screen: DepositScreen },
},
  {
    contentComponent: props => <SideBar {...props} />
  }
);


const AppCon2 = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      isReady : false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Montserrat_small: require("./assets/fonts/Montserrat-Light.ttf"),
      Montserrat_medium: require("./assets/fonts/Montserrat-Medium.ttf"),
      Montserrat_large: require("./assets/fonts/Montserrat-SemiBold-TUADE.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (this.state.isReady) {
      return <AppCon2></AppCon2>

    } else {
      return <Text>Loading ...</Text>
    }
  }
}
