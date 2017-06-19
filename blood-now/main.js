import Expo from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    console.log('AsyncStorage');
    this._loadAssetsAsync();
    this._userData();
  }

  async _userData(){
    try {
      await AsyncStorage.setItem('@name:key', 'thomas');
      await AsyncStorage.setItem('@email:key', 'thomas@mail.com');
    } catch ( error ) {
      console.log('error');
    }
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/expo-wordmark.png'),
          require('./assets/icons/logo.png'),
          require('./assets/images/expo-icon@2x.png'),
        ],
        fonts: [
          FontAwesome.font,
          {
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          },
          {
            'CmPrasanmit': require('./assets/fonts/CmPrasanmit.ttf'),
          },
          {
            'CmPrasanmitBold': require('./assets/fonts/CmPrasanmitBold.ttf'),
          },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute="login"
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return <Expo.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Expo.registerRootComponent(AppContainer);
