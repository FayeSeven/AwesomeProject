/**
 * Created by 熙冰 on 2018/10/31
 * https://www.reactnavigation.org.cn/docs/guide-intro
 * npm install --save react-navigation
 * react-native 0.57.2 的一个 bug，但在 react-native 0.57.3 中并没有修复
 */
/*Navigator is deprecated and has been removed from this package.
    It can now be installed and imported from `react-native-deprecated-custom-components` instead of `react-native`.
    Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html
import {Navigator} from 'react-native';*/

import React, {Component} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

class MyHomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./assets/img/icon-home.png')}
                style={[styles.icon, {tintColor: 'red'}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./assets/img/icon-mine.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

export default MyApp;
