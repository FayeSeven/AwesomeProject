/**
 * Created by 熙冰 on 2018/10/26
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FlexBoxText extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={{/*width: 100, height: 100,*/ backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                    <Text style={{fontSize: 16}}>1</Text>
                </View>
                <View style={{/*width: 100, height: 100,*/ backgroundColor: "darkcyan", margin: 5, flex: 2}}>
                    <Text style={{fontSize: 16}}>2</Text>
                </View>
                <View style={{/*width: 100, height: 100,*/backgroundColor: "darkcyan", margin: 5, flex: 3}}>
                    <Text style={{fontSize: 16}}>3</Text>
                </View>
                <View
                    style={{
                        /*alignSelf: 'flex-start',*/ /*width: 100, height: 100,*/
                        backgroundColor: "darkcyan",
                        margin: 5, flex: 0
                    }}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // alignItems:'stretch',
        backgroundColor: "darkgray",
        marginTop: 20,
        height: 100,
        borderWidth: 5,
        borderColor: 'blue'
    },
})

