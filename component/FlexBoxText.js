/**
 * Created by 熙冰 on 2018/10/26
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FlexBoxText extends Component {
    render() {
        return (
            <View style={{backgroundColor: "darkgray", marginTop: 20}}>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>1</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>2</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>3</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
            </View>
        );
    }
}

