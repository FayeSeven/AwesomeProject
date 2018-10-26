/**
 * Created by 熙冰 on 2018/10/26
 * 参考：http://www.devio.org/2017/01/10/React-Native按钮详解-Touchable系列组件使用详解/
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';

export default class TouchableTest extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            countLong: 0
        })
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({count: this.state.count + 1})
                    }}
                    onLongPress={() => {
                        this.setState({countLong: this.state.countLong + 1});
                        Alert.alert('提示', '确定要删除吗?', [{
                            text: '取消',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        }, {text: '确实', onPress: () => console.log('OK Pressed')},])
                    }}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            我是TouchableWithoutFeedback,单击我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>您单击了:{this.state.count}次</Text>
                <Text style={styles.text}>您长按了:{this.state.countLong}次</Text>
                <TouchableWithoutFeedback
                    disabled={this.state.waiting}
                    onPress={() => {
                        this.setState({text: '正在登录...', waiting: true})
                        setTimeout(() => {
                            this.setState({text: '网络不流畅', waiting: false})
                        }, 2000);

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>登录</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>{this.state.text}</Text>
                <TouchableWithoutFeedback
                    onPressIn={() => {
                        this.setState({writing: '触摸开始', startTime: new Date().getTime()})
                    }}
                    onPressOut={() => {
                        this.setState({writing: '触摸结束,持续时间:' + (new Date().getTime() - this.state.startTime) + '毫秒'})
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>点我</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>{this.state.writing}</Text>
                <TouchableHighlight
                    style={styles.button}
                    activeOpacity={0.7}
                    underlayColor='green'
                    onHideUnderlay={() => {
                        this.setState({light: '衬底被隐藏'})
                    }}
                    onShowUnderlay={() => {
                        this.setState({light: '衬底显示'})
                    }}
                    onPress={() => {

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>{this.state.light}</Text>
                <TouchableNativeFeedback
                    //只能Android
                    onPress={() => {
                        this.setState({count: this.state.count + 1})
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.button}>
                        <Text style={styles.text}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.text}>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    text: {
        fontSize: 20,
    },
});
