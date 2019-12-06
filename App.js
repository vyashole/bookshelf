import React from 'react';
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'

import store from './src/store'
import AppNavigator from './src/components/AppNavigator'

const NavigationContainer = createAppContainer(AppNavigator)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}

