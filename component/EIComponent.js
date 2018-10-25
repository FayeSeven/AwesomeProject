/**
 * Created by 熙冰 on 2018/10/25
 * 导出
 */
import React, {Component} from 'react';
import {Text} from 'react-native';

/*
* 方法一
* */
// export let name = '笑笑';
// export let age = 22;

/*
* 方法二
* */
let name = '笑笑';
let age = 22;
export {name, age};


export default class EIComponent extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
        );
    }
}

export function sum(a, b) {
    return a + b;
}
