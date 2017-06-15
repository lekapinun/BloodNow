import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  ExNavigationState,
} from '@expo/ex-navigation';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons
 } from '@expo/vector-icons';
import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';
import { TestButton, NavigatorBackground } from '../components/common';

export default class RootNavigation extends React.Component {

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

   _handleDone = () => {
   this.props.navigator.push("requestBlood");
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillMount() {


    this._subscriptionDone = this.props.route.getEventEmitter().addListener('done', this._handleDone);
  }
  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <TabNavigation tabBarHeight={56} initialTab="home">
        <TabNavigationItem
          id="home"
          renderIcon={isSelected => this._renderIconMaterialCommunityIcons('book-open-variant', isSelected)}>
          <StackNavigation initialRoute="home" />
        </TabNavigationItem>

        <TabNavigationItem
          id="notification"
          renderIcon={isSelected => this._renderIconMaterialCommunityIcons('earth', isSelected)}>
          <StackNavigation initialRoute="notification" />
        </TabNavigationItem>

        <TabNavigationItem
          id="friend"
          renderIcon={isSelected => this._renderIconIonicons('md-contacts', isSelected)}>
          <StackNavigation initialRoute="friend" />
        </TabNavigationItem>

        <TabNavigationItem
          id="profile"
          renderIcon={isSelected => this._renderIconIonicons('md-person', isSelected)}>
          <StackNavigation initialRoute="profile" />
        </TabNavigationItem>

      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _renderIconMaterialCommunityIcons(name, isSelected) {
    return (
      <MaterialCommunityIcons
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _renderIconIonicons(name, isSelected) {
    return (
      <Ionicons
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
