/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import HelloComponent from './HelloComponent';
import LifecycleComponent from './component/LifecycleComponent';
import EIComponent, {name, age, sum} from './component/EIComponent';
import PropsTest from './component/PropsTest';
import StateTest from './component/StateTest';
import RefTest from './component/RefTest';
import Student from './assets/class/Student';
import MingStudent from './assets/class/MingStudent';
import FlexBoxText from './component/FlexBoxText';
import TouchableTest from './component/TouchableTest';
import ImageTest from './component/ImageTest';
import TextInputTest from './component/TextInputTest';
import ListTest from './component/ListTest';
import FetchTest from './component/FetchTest';
import NavigationTest from './component/NavigationTest';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = ({
            remove: false,
            result: '',
            size: 0
        });
        this.stu = new Student('小红', '女', 16);
        this.ming = new MingStudent();
    }

    render() {
        let view = this.state.remove ? null : <LifecycleComponent/>;
        let text = this.state.remove ? "添加" : "移除";
        let propsTest = {name: '名字', age: 16, sex: '女'};
        let {name, sex} = propsTest;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>

                    <View style={styles.inside}>
                        <NavigationTest/>
                    </View>
                    <View style={styles.inside}>
                        <FetchTest/>
                    </View>
                    <View style={styles.inside}>
                        <ListTest/>
                    </View>
                    <View style={styles.inside}>
                        <TextInputTest/>
                    </View>
                    <View style={styles.inside}>
                        <FlexBoxText/>
                    </View>
                    <View style={styles.inside}>
                        <TouchableTest/>
                    </View>
                    <View style={styles.inside}>
                        <ImageTest/>
                    </View>
                    <View style={styles.inside}>
                        <HelloComponent name="咿呀"/>
                    </View>
                    <LifecycleComponent/>
                    <View style={styles.inside}>
                        <Text
                            onPress={() => {
                                this.setState({
                                    remove: !this.state.remove
                                })
                            }}
                            style={{fontSize: 20}}
                        >{text}</Text>
                        {view}
                    </View>
                    <View style={styles.inside}>
                        <Text style={{fontSize: 20}}>名字：{name}</Text>
                        <Text style={{fontSize: 20}}>年龄：{age}</Text>
                        <Text
                            style={{fontSize: 20}}
                            onPress={() => {
                                let result = sum(2, 3);
                                this.setState({
                                    result: result,
                                })
                            }}>2+3={this.state.result}</Text>
                    </View>
                    <View style={styles.inside}>
                        <PropsTest name={propsTest.name} sex='男'/>
                        {/*延展操作符*/}
                        <PropsTest {...propsTest}/>
                        {/*结构赋值*/}
                        <PropsTest name={name} sex={sex}/>
                    </View>
                    <View style={styles.inside}>
                        <StateTest/>
                    </View>
                    <View style={styles.inside}>
                        <Text
                            style={{fontSize: 20}}
                            onPress={() => {
                                //let size = this.refs.reftest.getSize();
                                //this.refs[refTest]

                                let size = this.reftest.getSize();
                                this.setState({
                                    size: size,
                                })
                            }}
                        >获取大小:{this.state.size}</Text>
                        <RefTest
                            //ref="reftest"
                            ref={reftest => {
                                this.reftest = reftest
                            }}
                        />
                    </View>
                    <View style={styles.inside}>
                        <Text>{this.stu.getDescription()}</Text>
                        <Text>{this.ming.getDescription()}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inside: {
        marginTop: 20,
        fontSize: 20,
    },
});
