/**
 * Created by andrew.yang on 2/17/2017.
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import{
} from 'react-native';
import configureStore from './store/configure-store'
import App from './app'

const store = configureStore();

class rootApp extends Component {
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}
export default rootApp;