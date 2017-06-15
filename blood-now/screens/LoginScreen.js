import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  WebView,
  Image
} from 'react-native';
import { getBackButtonManager } from '@expo/ex-navigation';

export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
    };

    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>LOGIN SCREEN</Text>
                <View>
                    <Image

                    />
                </View>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        autoCorrect={false}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์"
                    />
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        autoCorrect={false}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="รหัสผ่าน"
                    />
                </View>
                <View style={{marginTop:30,backgroundColor: '#EF685E'}}>
                    <Button title="เข้าสู่ระบบ" onPress={this._loginSuccess} color="white" />
                </View>
                <View style={{marginTop:30,backgroundColor: '#EF685E'}}>
                    <Button title="ลงทะเบียน" onPress={this._register} color="white" />
                </View>
            </View>
        );
    }

    _loginSuccess = () => {

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
        this.backButtonManager = getBackButtonManager();
        this.backButtonManager.disable();
        this.props.navigator.replace("rootNavigation");
        /*this.setState({
            email: '',
            password: '',
        });
        const myRequest = new Request(
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
        //this.props.navigator.push("register");
        const myRequest = new Request('http://localhost:5555/check');
        fetch(myRequest)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });
    };
}
