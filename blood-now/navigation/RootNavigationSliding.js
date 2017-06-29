import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Notifications, Font } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  ExNavigationState,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
  withNavigation
} from '@expo/ex-navigation';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons, 
 } from '@expo/vector-icons';
import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';
import { TestButton, NavigatorBackground } from '../components/common';

export default class RootNAvigationSliding extends Component {
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
        this.props.navigator.updateCurrentRouteParams({name: 'โปรไฟล์'})
    }

    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
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

    static route = {
        navigationBar: {
        title(params) { return <Text style={[Font.style('CmPrasanmitBold'),{fontSize:25}]}>{params.name}</Text> },
        renderRight: (route) => {
            if(route.params.name === "ขอเลือด"){ return <ExponentButton />}
        }/*<Text>{route.params.name}</Text>*/
            /*renderRight(params) { if(params.name == "ขอเลือด") return <ExponentButton /> }*/
            /*title: 'Sliding Tab Navigation',`${params.name}`
            ...SlidingTabNavigation.navigationBarStyles,*/
        },
    };

    _goToFirstTab = () => {
        this.props.navigation.performAction(({ tabs, stacks }) => {
        tabs('sliding-tab-navigation').jumpToTab('first');
        });
    };

    _goToSecondTab = () => {
        this.props.navigation.performAction(({ tabs, stacks }) => {
        tabs('sliding-tab-navigation').jumpToTab('second');
        });
    };

    _renderLabel = ({ route }) => {
        let title;
        if (route.key === 'first') {
            title = this._renderIconSimpleLineIcons('user')
        } else if (route.key === 'second') {
            title = this._renderIconSimpleLineIcons('heart')
        } else if (route.key === 'third') {
            title = this._renderIconSimpleLineIcons('drop')
        } else if (route.key === 'forth') {
            title = this._renderIconSimpleLineIcons('globe')
        } else if (route.key === 'fifth') {
            title = this._renderIconSimpleLineIcons('notebook')
        }
        return title
    };

    _renderIconSimpleLineIcons(name){
        return (
        <SimpleLineIcons
            name={name}
            size={20}
            color='white'
        />
        );
    }

    _renderTitle(key){
        if (key === 'first') {
            this.props.navigator.updateCurrentRouteParams({name: "โปรไฟล์"})
        } else if (key === 'second') {
            this.props.navigator.updateCurrentRouteParams({name: "ขอเลือด"})
        } else if (key === 'third') {
            this.props.navigator.updateCurrentRouteParams({name: "ให้เลือด"})
        } else if (key === 'forth') {
            this.props.navigator.updateCurrentRouteParams({name: "เพื่อน"})
        } else if (key === 'fifth') {
            this.props.navigator.updateCurrentRouteParams({name: "คำแนะนำ"})
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <SlidingTabNavigation
                id="sliding-tab-navigation"
                navigatorUID="sliding-tab-navigation"
                initialTab="first"
                renderLabel={this._renderLabel}
                barBackgroundColor="black"
                onChangeTab={(key) => this._renderTitle(key)}
                indicatorStyle={styles.tabIndicator}>
                <SlidingTabNavigationItem id="first">
                    <StackNavigation initialRoute="profile" />
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="second">
                    <StackNavigation initialRoute="requestBloodHistory" />
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="third">
                    <StackNavigation initialRoute="donor" />
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="forth">
                    <StackNavigation initialRoute="friend" />
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="fifth">
                    <StackNavigation initialRoute="home" />
                </SlidingTabNavigationItem>
            </SlidingTabNavigation>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    tabLabel: {
        margin: 8,
        fontSize: 13,
        color: '#fff',
    },

    tabIndicator: {
        backgroundColor: 'white',
    },

    selectedTab: {
        backgroundColor: '#0084FF',
    },
});

@withNavigation class ExponentButton extends Component {
  _handlePress = () => {
    this.props.navigator.push('requestBlood');
  };

/*  _logOut = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('second');
    });
  };*/

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
