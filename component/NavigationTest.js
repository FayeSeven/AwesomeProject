/**
 * Created by 熙冰 on 2018/10/30
 */
import React, {Component} from 'react';
/*Navigator is deprecated and has been removed from this package.
    It can now be installed and imported from `react-native-deprecated-custom-components` instead of `react-native`.
    Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html
import {Navigator, AppRegistry} from 'react-native';*/
import {View, Button, Text} from 'react-native';
import {TabNavigator} from 'react-navigation';
import NavigationFirstTest from './NavigationFirstTest';
import NavigationSecondTest from './NavigationSecondTest';

/*
* npm install --save react-navigation
* */
export default class HelloComponent extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.props.name}</Text>
        );
    }
}
