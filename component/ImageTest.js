/**
 * Created by 熙冰 on 2018/10/29
 */
import React, {Component} from 'react';
import {View, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';

//获取屏幕宽度;
let width = Dimensions.get('window').width;

export default class ImageTest extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.flex}
                source={{uri: 'http://img15.3lian.com/2015/f2/164/d/127.jpg'}}
                resizeMode={'cover'}
            >
                <Image
                    style={{height: 100, backgroundColor: 'red', alignSelf: 'center'}}
                    source={require('../assets/img/balloon.png')}
                    resizeMode={'contain'}
                />
                <View style={{flex: 1, backgroundColor: '#fe0000'}}>
                    <Image style={{flex: 1, height: 100}}
                           source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}}
                           resizeMode={'stretch'}/>
                </View>

                <Image
                    style={{width: width, height: 100}}
                    source={{uri: "https://facebook.github.io/react/logo-og.png"}}
                    resizeMode={'cover'}
                />
                <Image
                    style={{width: 100, height: 100, alignSelf: 'center', tintColor: '#77FFEE'}}
                    source={{uri: "haitan"}}
                    resizeMode={'contain'}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        borderWidth: 5
    },
})
