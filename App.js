import React from 'react';
import { Provider } from 'react-redux';
import { mapping } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createAppContainer } from 'react-navigation';
import { View, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { bookshelfTheme } from './src/theme'
import { store, persistor } from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NavigationContainer = createAppContainer(AppNavigator);

const renderLoading = () => (
  <View>
    <ActivityIndicator />
  </View>
);

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaProvider>
        <ApplicationProvider mapping={mapping} theme={bookshelfTheme}>
          <Provider store={store}>
            <PersistGate
              persistor={persistor}
              loading={renderLoading()}>
              <NavigationContainer />
            </PersistGate>
          </Provider>
        </ApplicationProvider>
      </SafeAreaProvider>
    </React.Fragment>
  );
}
