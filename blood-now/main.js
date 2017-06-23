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
<<<<<<< HEAD
    currentPage: 'home',
    name: '',
    password: '',
=======
>>>>>>> maintain_login
  };

  componentWillMount() {
    console.log('START TEST');
    this._loadAssetsAsync();
    //this._userData();
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
          require('./assets/icons/correct.png')
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
<<<<<<< HEAD
      return(<View style={{flex: 1}}>
      <NavigationProvider router={Router}>
        <StackNavigation
          id="root"
          initialRoute="rootNavigation"
        />
      </NavigationProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' &&
        <View style={styles.statusBarUnderlay} />}
    </View>);
      /*
      if(this.state.currentPage === 'login')
      {
        return(
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
              <Image source={require('./assets/icons/logo.png')} style={{width:190,height:90}}/>
              <Text style={[Font.style('CmPrasanmit'),styles.caption]}>ม า ก ก ว่ า ก า ร ใ ห้ เ ลื อ ด</Text>
              <View style={{width: 260}}>
                <TextInput
                  style={[Font.style('CmPrasanmit'),styles.input]}
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}
                  placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์"
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                  style={[Font.style('CmPrasanmit'),styles.input]}
                  autoCorrect={false}
                  secureTextEntry={true}
                  autoCapitalize='none'
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  placeholder="รหัสผ่าน"
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
                <View style={{height: 50, marginTop:10,justifyContent: 'flex-start',alignItems: 'flex-end'}}>
                  <TouchableOpacity>
                   <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A',}]}>ลืมรหัสผ่าน?</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.buttonLogin,{backgroundColor: '#EF685E'}]}>
                  <TouchableOpacity style={[styles.buttonLogin,{marginTop:-10,marginBottom:-10,}]} onPress={this._login}>
                    <Text style={[Font.style('CmPrasanmitBold'),{fontSize: 25,color: 'white'}]}>เข้าสู่ระบบ</Text>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Text style={[Font.style('CmPrasanmit'),{ fontSize: 23,color:'#95989A',marginBottom:5,marginTop:5}]}>หรือ</Text>
                </View>
                <View style={[styles.buttonLogin,{backgroundColor: '#9FAC9B'}]}>
                  <TouchableOpacity style={[styles.buttonLogin,{marginTop:-10,marginBottom:-10,}]} onPress={this._register}>
                    <Text style={[Font.style('CmPrasanmitBold'),{fontSize: 25,color: 'white'}]}>ลงทะเบียน</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        );
      }
      else if(this.state.currentPage === 'register')
      {
        this.props.navigator.push("register");
      }
      else if(this.state.currentPage === 'app')
      {
=======
>>>>>>> maintain_login
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
<<<<<<< HEAD
      }*/
=======
>>>>>>> maintain_login
    } else {
      return <Expo.AppLoading />;
    }
  }
<<<<<<< HEAD

  _register = () => {
    console.log('regis');
        this.setState({currentPage: 'register'});
  };

  _login = () => {
        console.log(this.state);
        const myRequest = new Request(
            'http://localhost:8000/login',
            {
                method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
        var test = '';
        fetch(myRequest)
        .then((response) => {
            console.log(response);
            if( response._bodyInit != 'login fail')
            {
                test = JSON.parse(response._bodyInit);
                console.log('login success');
                this.setState({currentPage: 'app'});
            }
            else
            {
                this.setState({ password: '' });
                console.log('login fail');
            }
        })
        .catch((error) => {
          console.log('xxx');
        });

  }
=======
>>>>>>> maintain_login
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
<<<<<<< HEAD
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
=======
>>>>>>> maintain_login
});

Expo.registerRootComponent(AppContainer);
