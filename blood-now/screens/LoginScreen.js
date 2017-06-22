import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  WebView,
  Image,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import {
    Font
} from 'expo';

import {
    getBackButtonManager
} from '@expo/ex-navigation'

export default class LoginScreen extends Component {

    state = {
        name: '',
        password: '',
    };

    render() {
        return(
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
                <Image source={require('../assets/icons/logo.png')} style={{width:190,height:90}}/>
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
                        <TouchableOpacity style={[styles.buttonLogin,{marginTop:-10,marginBottom:-10,}]} onPress={this._loginPress}>
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


    _loginPress = () => {
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
            if( response._bodyInit != 'login fail')
            {
                test = JSON.parse(response._bodyInit);
                console.log(response);
                console.log('login success');
                this.props.navigator.push("rootNavigation");
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
    };

    _register = () => {
        this.props.navigator.push("register");
    };
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 27,
    color:'#95989A',
    marginBottom:40,
    marginTop:7,
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
