import React from 'react';
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

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
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
