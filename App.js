import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';
import AppNavigator from './src/components/AppNavigator';

const NavigationContainer = createAppContainer(AppNavigator);

const renderLoading = () => (
  <View>
    <ActivityIndicator size="large" />
  </View>
);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={renderLoading()}
      >
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
}
