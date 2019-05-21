import React, { Component } from 'react';
import { TextInput, ImageBackground, Image, StyleSheet, Text, View, Button } from 'react-native';

class EditBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        const { placeholder, style, textStyle, textValue } = this.props;
        // console.log("edit box :  " + textValue);
        return (
            <View style={[styles.SectionStyle, style]}>
                <ImageBackground
                    source={require('../../assets/img_input.png')}
                    style={[styles.ImageStyle, {width: style.width, height: style.height}]}
                    resizeMode='contain'>
                    <TextInput
                        style={textStyle}
                        placeholder={placeholder}
                        underlineColorAndroid="transparent"
                        onChangeText = {(text) => {
                            this.props.enterTextHandler(text);
                        }}
                        value = {textValue}
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
        // backgroundColor: 'black',
        alignSelf: 'center',
    },

    ImageStyle: {

    },
})

export default EditBox;