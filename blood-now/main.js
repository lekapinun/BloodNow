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
    test: false,
    name: '',
    password: '',
  };

  componentWillMount() {
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
      if(!this.state.test)
      {
        return(
          <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
                <View>
                    <Image
                        source={require('./assets/icons/logo.png')}
                        style={{width:250,height:120}}
                    />
                </View>
                <View style={{marginBottom:50,marginLeft:10}}>
                    <Text style={[Font.style('CmPrasanmit'), { fontSize: 30,color:'#95989A',letterSpacing:8}]}>มากกว่าการให้เลือด</Text>
                </View>
                <View>
                    <TextInput
                        style={[Font.style('CmPrasanmit'),styles.input]}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                        placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์"
                    />
                    <TextInput
                        style={[Font.style('CmPrasanmit'),styles.input]}
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="รหัสผ่าน"
                    />
                    <View style={{height: 50, width:270,marginTop:10,justifyContent: 'flex-start',alignItems: 'flex-end'}}>
                        <TouchableOpacity>
                            <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A',}]}>ลืมรหัสผ่าน?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:10,backgroundColor: '#EF685E',height: 50, width:270,marginBottom:10,flexDirection: 'column',justifyContent: 'center' }}>
                    <Button style={[Font.style('CmPrasanmit')]} title="เข้าสู่ระบบ" onPress={this._login} color='white' />
                </View>
                <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A'}]}>หรือ</Text>
                <View style={{backgroundColor: '#9FAC9B',height: 50, width:270,marginTop:10,flexDirection: 'column',justifyContent: 'center'}}>
                    <Button style={[Font.style('CmPrasanmit')]} title="ลงทะเบียน" onPress={this._login} color='white' />
                </View>
            </View>     
          </View>
        );
      }
      else
      {
        return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute="rootNavigation"
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
        );
      }
    } else {
      return <Expo.AppLoading />;
    }
  }

  _login = () => {
        console.log('xxxx');
        console.log(this.state);
        const myRequest = new Request(
            'http://localhost:8000/member/login',
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
            //console.log(response);
            if( response._bodyInit != 'login fail')
            {
                test = JSON.parse(response._bodyInit);
                console.log('login success');
                this.setState({test: true});
            }
            else
            {
                this.setState({ password: '' });
                console.log('login fail');
            }
        })
        .catch((error) => {
            console.warn(error);
        });
        
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
    width:270,
    borderColor: '#EEEDEE',
    borderWidth: 1,
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
    backgroundColor: 'white',
  },
});

Expo.registerRootComponent(AppContainer);
