/**
 * Created by andrew.yang on 2/17/2017.
 */
import React, { Component } from 'react';
import {
    Navigator,
    StatusBar,
    Text,
    View,
    Platform,
    StyleSheet
} from 'react-native';
import Splash from './pages/Splash';
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return (
            <Component navigator={navigator} route={route} />
        );
    }
    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{height: STATUS_BAR_HEIGHT}}
                />
                <Navigator
                    ref='navigator'
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                    component: Splash,
                    name: 'Splash'
                  }}
                />
            </View>
        )
    }
}
let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});