import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/*
* 方法一：ES6
* */
export default class HelloComponent extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.props.name}</Text>
        );
    }
}

/*
* 方法二：函数式
* 无状态，不能使用this
* */
/*function HelloComponent(props) {
    return (
        <Text style={{fontSize: 20, backgroundColor: 'blue'}}>function.{props.name}</Text>
    );
}
module.exports = HelloComponent;*/
