import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigation, withNavigation } from '@expo/ex-navigation';

@withNavigation
export default class RequestBloodScreen extends Component {
  static route = {
    navigationBar: {
      title: 'RequestBlood',
    }
  };

  render() {
    return(
      <View>
          <Text>
            Request blood form
          </Text>
      </View>
    );
  }
}

/*const styles = StyleSheet.create({

});*/
