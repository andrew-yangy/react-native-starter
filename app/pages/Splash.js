/**
 * Created by Andrew on 2/6/2017.
 */
import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';

import MainScreen from './MainScreen';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {navigator} = this.props;
        this.timer=setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: MainScreen,
                    name: 'MainScreen'
                });
            });
        }, 1000);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Image
                    style={{flex:1,width:width,height:height}}
                    source={require('../images/splash.jpg')}
                />
            </View>
        );
    }
}
export default Splash;