import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>LOGIN SCREEN</Text>
                <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={this._loginSuccess}>
                        <Text style={{fontSize:20}}>
                            LOGIN BUTTON
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _loginSuccess = () => {
        this.props.navigator.push("rootNavigation");
    };
}