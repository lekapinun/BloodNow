import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  ExNavigationState,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
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
    }

    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
        this.props.navigator.updateCurrentRouteParams({name: "Jon Doe"})
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
            title(params) { return `Hello ${params.name}`; }
            /*title: 'Sliding Tab Navigation',
            ...SlidingTabNavigation.navigationBarStyles,*/
        },
    };

    state = {
        test: 'xxxxxx'
    }

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

    _testOn(key){
        if (key === 'third') {
            this.callMeLatter()
             /*this.props.navigator.updateCurrentRouteParams({name: "Jon Doe"})*/
        }
    }

    callMeLatter() {
        this.props.navigator.updateCurrentRouteParams({name: "Jon Doe"})
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
                onChangeTab={this._testOn}
                indicatorStyle={styles.tabIndicator}>
                <SlidingTabNavigationItem id="first">
                    <StackNavigation initialRoute="profile" />
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="second">
                    <Text style={styles.quoteText}>
                        2
                    </Text>
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="third">
                    <Text style={styles.quoteText}>
                        3
                    </Text>
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="forth">
                    <Text style={styles.quoteText}>
                        4
                    </Text>
                </SlidingTabNavigationItem>
                <SlidingTabNavigationItem id="fifth">
                    <Text style={styles.quoteText}>
                        5
                    </Text>
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

    quoteContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },

    quoteMarks: {
        alignSelf: 'flex-start',
        color: '#E91E63',
        fontSize: 36,
        left: -8,
        bottom: -42,
        marginTop: -64,
    },

    quoteText: {
        color: '#222',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        margin: 8,
    },

    quoteAuthor: {
        color: '#888',
        fontSize: 12,
        fontStyle: 'italic',
    },

    button: {
        margin: 16,
        color: '#0084FF',
    },

    selectedTab: {
        backgroundColor: '#0084FF',
    },
});
