/**
 * Created by 熙冰 on 2018/10/25
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HelloComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 80,
        }
    }

    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.state.size}</Text>
        );
    }
}

