import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class FriendScreen extends Component {
    static route = {
        navigationBar: {
        /*visible: false,*/
        title: 'เพื่อน',
        },
    };
    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>FRIENDS SCREEN</Text>
            </View>
        );
    }

}