import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './login/LoginScreen'
import DepositScreen from './deposit/DepositScreen';
import SideBar from './sidebar/SideBar';



const MyDrawerNavigator = createDrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  DepositScreen: { screen: DepositScreen },},
  {
    contentComponent: props => <SideBar {...props} />
  }
  );


const AppCon2 = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppCon2>
        </AppCon2>
    );
  }
}
