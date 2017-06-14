import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class NotificationScreen extends Component {
    static route = {
        navigationBar: {
        /*visible: false,*/
        title: 'ข่าวสาร',
        },
    };

    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>NOTIFICATION SCREEN</Text>
            </View>
        );
    }

}