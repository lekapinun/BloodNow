import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default class LoginScreen extends Component {

    state = { 
        id: '',
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
                        onChangeText={(id) => this.setState({id})}
                        value={this.state.id}
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
        this.props.navigator.push("rootNavigation");
    };

    _register = () => {
        this.props.navigator.push("register");
    };
}
