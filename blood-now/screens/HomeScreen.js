import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
import { Font } from 'expo'

import { withNavigation } from '@expo/ex-navigation';
import { TestButton, NavigatorBackground,ExNavigationState} from '../components/common';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

@withNavigation class ExponentButton extends Component {
  _handlePress = () => {
    this.props.navigator.push('requestBlood');
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
          paddingTop: 1,
        }}>
        <Image
          source={require('../assets/icons/exponent-icon.png')}
          style={{ width: 21, height: 17 }}
        />
      </TouchableOpacity>
    );
  }
}

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'ข้อควรรู้เกี่ยวกับการบริจาคโลหิต',
      backgroundColor: Colors.routeColor,
      titleStyle: [Font.style('CmPrasanmitBold'),{fontSize:28}],
      tintColor: 'white',
      renderRight: () => <ExponentButton />,
    },
  };


  async _userData(){
    try {
      const value = await AsyncStorage.getItem('@name:key');
      if (value !== null){
        // We have data!!
        console.log(value);
      } else {
        console.log('O_O');
      }
    } catch ( error ) {
      console.log('error');
    }
  }

  componentWillMount() {
    this._userData();
  }

  render() {
    return (
      <View style={{marginTop:30}}>
         <Text>HOME SCREEN</Text>
      </View>
    );
  }

}
