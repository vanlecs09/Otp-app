import React from 'react';
import { ListView,TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import SlideBarItem from './SideBarItem';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={require('./res/img_sidebar_bg.png')} style={styles.background}>
                {/* <Text>
                    this is side bar
               </Text> */}
            <ListView>
                </ListView>
            </ImageBackground>
        )
    }
}

var styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});
