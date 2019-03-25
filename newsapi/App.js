/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Main from './src/componnets/main'
import { Provider } from "react-redux";
import store from './src/redux/store'
import {Icon} from 'native-base'

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
            <AppStackNavigator/>
            </Provider>
        );
    }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
    Main:{
        screen: Main
    }
}));



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});
