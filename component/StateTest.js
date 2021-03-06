/**
 * Created by 熙冰 on 2018/10/25
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class StateTest extends Component {
    state = {
        size: 80,
    }

    constructor(props) {
        super(props);
        /*this.state = {
            size: 80,
        }*/
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.state.size}</Text>
                <Text
                    onPress={() => {
                        this.setState({
                            size: this.state.size + 10
                        })
                    }}
                >吹气球</Text>
                <Text
                    onPress={() => {
                        this.setState({
                            size: this.state.size - 10
                        })
                    }}
                >放气球</Text>
                <Image
                    style={{width: this.state.size, height: this.state.size}}
                    source={require('../assets/img/balloon.png')}
                ></Image>
            </View>
        );
    }
}

