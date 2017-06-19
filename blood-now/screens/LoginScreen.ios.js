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
        email: '',
        password: '',
    };

    componentWillMount() {
        console.log('test');
        this._test();
    }
        
    async _test() {
        try {
            const value = await AsyncStorage.getItem('@name:key');
            if (value !== null){
                // We have data!!
                console.log(value);
            }
            const email = await AsyncStorage.getItem('@email:key');
            if (email !== null){
                // We have data!!
                console.log(email);
            }
        } catch ( error ){
            console('error');
        }
    }

    render() {
        return(
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
                <View>
                    <Image
                        source={require('../assets/icons/logo.png')}
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
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์"
                    />
                    <TextInput
                        style={[Font.style('CmPrasanmit'),styles.input]}
                        autoCorrect={false}
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
                    <Button style={[Font.style('CmPrasanmit')]} title="เข้าสู่ระบบ" onPress={this._loginSuccess} color="white" />   
                </View>
                <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A'}]}>หรือ</Text>
                <View style={{backgroundColor: '#9FAC9B',height: 50, width:270,marginTop:10,flexDirection: 'column',justifyContent: 'center'}}>
                    <Button style={[Font.style('CmPrasanmit')]} title="ลงทะเบียน" onPress={this._register} color="white" />    
                </View>
            </View>
        );
    }
    

    _loginSuccess = () => {
        /*this.backButtonManager = getBackButtonManager();
        this.backButtonManager.disable();
        this.props.navigator.replace("rootNavigation");*/


        /*console.log(this.state);
        this.setState({
            email: '',
            password: '',
        });
        fetch('http://localhost:8000/login')
        .then((response) => {
            console.log(response);
        })*/
        /*.then((responseJson) => {
            console.log(responseJson.movies);
        })*/
        /*.catch((error) => {
            console.error(error);
        });*/
       
        /*this.setState({
            email: '',
            password: '',
        });*/
        /*const myRequest = new Request(
            'http://localhost:5555/users',
            {
                method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
        console.log(JSON.stringify(this.state));
        fetch(myRequest)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });*/
    };

    _register = () => {
       /* this.props.navigator.push("register");*/
        /*const myRequest = new Request('http://localhost:5555/check');
        fetch(myRequest)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });*/
    };
}

const styles = StyleSheet.create({
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
