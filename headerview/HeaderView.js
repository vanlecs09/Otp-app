import React from 'react';
import { TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
import ButtonImageNavigation from '../components/ButtonImageNavigation';
import btnNavNormal from '../assets/btn_nav_normal.png';
import btnSelect from '../assets/btn_nav_select.png';

export default class HeaderView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ marginTop: 20, width: '100%', height: '8%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={require('./res/icon_otp.png')} style = {{width: 40, height: 40, marginLeft: 10}}/>
                <Text style={{ alignSelf: 'center' }}>
                    {this.props.titleName}
                </Text>
                <ButtonImageNavigation normalImage = {btnNavNormal} selectImage = {btnSelect}>
                   
                </ButtonImageNavigation>
            </View>

        )
    }
}