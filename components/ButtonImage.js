import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity , Text, StyleSheet, ImageBackground, View, Image } from 'react-native';

class ButtonImage extends Component {
    constructor(props) {
        super(props);
        this.titleName = "OTP";
        this.state = {
            select: false,
        }
      }

	render() {
		const {onPress, imageSource, imageSelectSource, customStyle, isButtonPressed } = this.props;
        const imgSrc = isButtonPressed ? imageSelectSource : imageSource;
		return (
			<TouchableOpacity  style={customStyle}
				onPress={() => {
                    onPress();
                }}
			>
				<Image style={[styles.image, customStyle]} source={imgSrc}/>
			</TouchableOpacity >
		);
	}
}

ButtonImage.propTypes = {
	onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		// color: '#ffffff',
		textAlign: 'center',
	},

	image: {
		alignSelf: 'center'
	},
});

export default ButtonImage;