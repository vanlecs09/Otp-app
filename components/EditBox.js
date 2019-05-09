import React, { Component } from 'react';
import { TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';
// import 

class EditBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {placeholder} = this.props;
        return (
            <View style={styles.SectionStyle}>
                <ImageBackground
                    source={require('../assets/img_input.png')}
                    style={styles.ImageStyle}
                    resizeMode= 'contain'>
                    <TextInput
                        style={{ flex: 1, marginLeft: 40, fontFamily: 'Montserrat_small' }}
                        placeholder={placeholder}
                        underlineColorAndroid="transparent"
                    />
                </ImageBackground>
            </View>
        )

    }
}

var styles = StyleSheet.create({

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff0',
        height: 50,
        width: '80%',
        alignSelf: 'center',
    },

    ImageStyle: {
        height: null,
        width: null,
    },
})

export default EditBox;