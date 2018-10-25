/**
 * Created by 熙冰 on 2018/10/24
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('------constructor------');
        this.state = {
            count: 0
        }
    }

    //初始化渲染前
    componentWillMount() {
        console.log('------componentWillMount------');
    }

    //初始化渲染后
    componentDidMount() {
        console.log('------componentDidMount------');
    }

    //更新
    shouldComponentUpdate(nextProps) {
        console.log('------shouldComponentUpdate------');
    }

    //是否更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log('------shouldComponentUpdate------');
        return true;
    }

    //更新前
    componentWillUpdate(nextProps, nextState) {
        console.log('------componentWillUpdate------');
    }

    //更新后
    componentDidUpdate(preProps, preState) {
        console.log('------componentDidUpdate------');
    }

    //移除前
    componentWillUnmount() {
        console.log('------componentWillUnmount------');
    }

    render() {
        console.log('------render------');
        return (
            <View>
                <Text
                    onPress={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                    style={{fontSize: 20, backgroundColor: 'yellow', textAlign: 'center'}}>单击</Text>
                <Text style={{fontSize: 20}}>点击了{this.state.count}次</Text>
            </View>
        );
    }
}

