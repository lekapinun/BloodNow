import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class LoginScreen extends Component {

    state = { 
        email: '',
        password: '',
        error: '',
    };

    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>LOGIN SCREEN</Text>
                <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={this._loginSuccess}>
                        <Text style={{fontSize:20, color: '#EF685E'}}>
                            LOGIN BUTTON
                        </Text>
                    </TouchableOpacity>
                    <View style={{height:50,backgroundColor:'#EF685E'}}></View>
                </View>
            </View>
        );
    }

    _loginSuccess = () => {
        this.props.navigator.push("rootNavigation");
    };
}
