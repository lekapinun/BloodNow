import Expo from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';


import {
    Font
} from 'expo';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
    currentPage: 'home',
    name: '',
    password: '',
    init: 'login'
  };

  componentWillMount() {
    console.log('START TEST')
    this._loadAssetsAsync()
    AsyncStorage.getItem('@userData:key')
    .then(( response ) => {
      if(response !== null){
        console.log(response)
        this.setState({init : 'rootNavigationSliding'})
      } else {
        console.log('please login') 
      }
    })
    //this._userData();
    //this._checkLogin();
  }

  async _checkLogin() {
      try {
            const name = await AsyncStorage.getItem('@userData:key');
            if (name !== null) {
                console.log(name);
                this.setState({init: 'rootNavigation'});
            }
        } catch ( error ) {
            console.log('error');
        }
    }

/*  async _userData(){
    try {
      await AsyncStorage.setItem('@name:key', 'thomas');
      await AsyncStorage.setItem('@email:key', 'thomas@mail.com');
    } catch ( error ) {
      console.log('error');
    }
  }*/

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/expo-wordmark.png'),
          require('./assets/icons/logo.png'),
          require('./assets/images/expo-icon@2x.png'),
          require('./assets/icons/cr.png'),
          require('./assets/icons/ex.png'),
          require('./assets/icons/exponent-icon.png'),
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
      return(<View style={{flex: 1}}>
      <NavigationProvider router={Router}>
        <StackNavigation
          id="root"
          initialRoute={this.state.init}
        />
      </NavigationProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' &&
        <View style={styles.statusBarUnderlay} />}
    </View>);
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
  input: {
    height: 50,
    borderColor: '#EEEDEE',
    borderWidth: 1,
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
    backgroundColor: 'white',
  },
  buttonLogin: {
    marginTop:10,
    marginBottom:10,
    justifyContent: 'center',
    height: 50,
    width: 260,
    alignItems: 'center'
  },
});

Expo.registerRootComponent(AppContainer);
