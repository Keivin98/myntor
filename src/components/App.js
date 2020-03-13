import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import FindPage from './FindPage';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';

export default class App extends React.Component{
  render(){

        return (
          <AppContainer />
        );

    };
};


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        header: null,
        title: 'HOME',
      },

    },

    Find: {
      screen: FindPage,
      navigationOptions: {
        header: null,
        title: 'FIND',
      },

    },

    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        header: null,
        title: 'PROFILE',
      },

    },},
    {
      defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Find') {
          iconName = `search`;
        }
        else if (routeName === 'Profile') {
          iconName = `user`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={27} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 10,
        marginTop: 2,
      },
      style: {
        backgroundColor: 'black',
        paddingTop: 8,
      },

    }
}
)


const AppContainer = createAppContainer(bottomTabNavigator);
