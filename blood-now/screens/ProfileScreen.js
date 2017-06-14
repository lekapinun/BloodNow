import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class ProfileScreen extends Component {
    static route = {
        navigationBar: {
        /*visible: false,*/
        title: 'ข้อมูลส่วนตัว',
        },
    };

    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>PROFILE SCREEN</Text>
            </View>
        );
    }

}