/**
 * Created by Andrew on 2/5/2017.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const HOME = 'Home';
const HOME_NORMAL = require('../images/tab/ic_tab_home.png');
const HOME_FOCUS = require('../images/tab/ic_tab_home_press.png');
const CATEGORY = 'Category';
const CATEGORY_NORMAL = require('../images/tab/ic_tab_category.png');
const CATEGORY_FOCUS = require('../images/tab/ic_tab_category_press.png');
const FAXIAN = 'Mine';
const FAXIAN_NORMAL = require('../images/tab/ic_tab_my.png');
const FAXIAN_FOCUS = require('../images/tab/ic_tab_my_press.png');
const CART = 'More';
const CART_NORMAL = require('../images/tab/icon_tabbar_misc.png');
const CART_FOCUS = require('../images/tab/icon_tabbar_misc_selected.png');

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={tag}
                selectedTitleStyle={styles.iconSelectedStyle}
                renderIcon={() => <Image style={styles.tabbarIconStyle} source={img} />}
                renderSelectedIcon={() => <Image style={styles.tabbarIconStyle} source={selectedImg} />}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }
    _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TabNavigator>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, this._createChildView(HOME))}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))}
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabbarIconStyle:{
        width:25,
        height:25
    },
    iconSelectedStyle:{
        color:'rgba(25,182,158,1.0)'
    }
});