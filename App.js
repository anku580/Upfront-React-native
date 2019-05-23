/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { Provider } from 'react-redux';
import store from "./src/store/index";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignupComponent from './src/screens/Signup';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Cart from './src/screens/Cart';
import Explore from './src/screens/Explore';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppSwitchNavigator = createSwitchNavigator({
  signup: { screen: SignupComponent },
  // Home:  stackNavigator
}, {
  initialRouteName : "signup"
});

// const HomeTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: 'HOME',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./src/assets/recipes.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   },
//   Explore: {
//     screen: Explore,
//     navigationOptions: {
//       tabBarLabel: 'Explore',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./src/assets/search.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   },
//   Cart: {
//     screen: Cart,
//     navigationOptions: {
//       tabBarLabel: 'Cart',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./src/assets/cart.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./src/assets/profile_outline.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   }
// }, {
//     tabBarOptions: {
//       activeTintColor: '#FF9E0E',
//       inactiveTintColor: '#B1BCCF',
//       style: {
//         backgroundColor: 'white',
//         borderTopWidth: 0,
//         shadowOffset: { width: 5, height: 3 },
//         shadowColor: 'black',
//         shadowOpacity: 0.5,
//         elevation: 5
//       } 
//     }
//   })

// const stackNavigator = createStackNavigator({
//   HomeTabNavigator : HomeTabNavigator
// })
const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;

const MainNavigator = createStackNavigator({
  Signup : {
    screen: SignupForm
    // navigationOptions : {
    //   header : null,
    // }
  },
  Login : {
    screen : LoginForm
    // navigationOptions : {
    //   header : null,
    // }
  }
})

// const AppContainer = createAppContainer(MainNavigator);    

const handleSubmit = values => {
  alert(`submitting form = ${values}`);
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
