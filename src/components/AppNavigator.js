import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Home from './Home'
import { createStackNavigator } from 'react-navigation-stack'

export default AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Bookshelf',
    })
  },

}, {
  initialRouteName: 'Home'
}
)

