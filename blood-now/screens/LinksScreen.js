import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableOpacity, View, Text, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TestButton, NavigatorBackground } from '../components/common';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      renderRight: (state: ExNavigationState) => {
        const { config: { eventEmitter }  } = state;

        return (
          <TestButton
            onPress={() => eventEmitter.emit('done')}
          />
        );
      },
      renderBackground: props => <NavigatorBackground />
    },
  };
  componentWillMount() {
     this._subscriptionDone = this.props.route.getEventEmitter().addListener('done', this._handleDone);
   }
   _handleDone = () => {
   this.props.navigator.push("requestBlood");
  }


  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}
      >
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
