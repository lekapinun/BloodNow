import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  WebView,
} from 'react-native';

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
        //this.props.navigator.push("rootNavigation");
        /*this.setState({
            email: '',
            password: '',
        });*/
        console.log(this.state);
        const myRequest = new Request('http://localhost:5555/login',{method: 'POST', body: '{"foo":"bar"}'});
        console.log(myRequest.method);
        fetch(myRequest)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.warn(error);
        });
    };

    _register = () => {
        this.props.navigator.push("register");
    };
}
