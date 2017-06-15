import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableOpacity, View, Text, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TestButton } from '../components/common';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      //title: ,
      renderRight: (state: ExNavigationState) => {
        const { config: { eventEmitter }  } = state;

        return (
          <TestButton
            //tintColor={state.getBarTintColor()}
            onPress={() => eventEmitter.emit('done')}
          />
        );
      },
        renderBackground: props => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '0.2%'}}>
            <Image
              style={{ width: 100, height: 45 ,  }}
              source={require('../assets/images/logo.png')}
              resizeMode={'cover'}
            />
          </View>

        ),
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
