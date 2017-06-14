import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TestButton } from '../components/common';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
      //renderRight: () =>
    },
  };
  _onRightPress = () => {
    this.props.navigator.push('requestBlood');
  }
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}
      >
          <TestButton onPress={this._onRightPress} />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
