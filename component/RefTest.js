/**
 * Created by 熙冰
 * 2018/10/25 20:00
 */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class RefTest extends Component {
    state = {
        size: 80,
    }

    constructor(props) {
        super(props);
        /*this.state = {
            size: 80,
        }*/
    }

    getSize() {
        return this.state.size;
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>{this.state.size}</Text>
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

