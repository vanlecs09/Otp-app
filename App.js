import React from 'react';
import { Text } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './src/login/LoginScreen'
import DepositScreen from './src/deposit/DepositScreen';
import GiftExchangeScreen from './src/giftexchange/GiftExchangeScreen';
import MailScreen from './src/mail/MailScreen';
import HistoryScreen from './src/history/HistoryScreen';
import NavigationService from './src/services/NavigationService';

import SideBar from './src/sidebar/SideBar';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
const store = createStore(rootReducer, 
  applyMiddleware(thunk)
  )

const MyDrawerNavigator = createDrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  DepositScreen: { screen: DepositScreen },
  GiftExchangeScreen: {screen: GiftExchangeScreen},
  MailScreen : {screen: MailScreen},
  HistoryScreen: {screen:HistoryScreen}
},
  {
    contentComponent: props => <SideBar {...props} />
  }
);


const AppCon2 = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
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
      return (
        <Provider store={store}>
          <AppCon2  ref={navigatorRef => {
          NavigationService.setContainer(navigatorRef);
        }}>
         
          </AppCon2>
        </Provider>
      )
    } else {
      return <Text>Loading ...</Text>
    }
  }
}