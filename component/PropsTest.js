/**
 * Created by 熙冰 on 2018/10/25
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class PropsTest extends Component {
    static defaultProps = {
        name: '没传递',
        age: 16
    };

    /*
    * 属性类型
    * yarn add prop-types
    * 在React 16版本之后, PropTypes 从react包 换到了prop-types 包中
    * */
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired,//必需值
    };

    render() {
        return (
            <View>
                <Text style={styles.container}>姓名:{this.props.name}</Text>
                <Text style={styles.container}>年龄:{this.props.age}</Text>
                <Text style={styles.container}>性别:{this.props.sex}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        backgroundColor: 'red',
    },
});

