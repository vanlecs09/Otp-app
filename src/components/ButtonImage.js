import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View, Image } from 'react-native';

class ButtonImage extends Component {
	constructor(props) {
		super(props);
		this.titleName = "OTP";
		this.state = {
			select: false,
		}
	}

	renderText(viewCombineStyle, text, textStyle) {
		<View style={viewCombineStyle}>
			<Text style={textStyle}>{text}</Text>
		</View>
	}

	render() {
		const { onPress, imageSource, imageSelectSource, customStyle, isButtonPressed, text, textStyle } = this.props;
		const imgSrc = isButtonPressed ? imageSelectSource : imageSource;
		const { view } = styles;
		const viewCombineStyle = StyleSheet.flatten([view, customStyle]);
		var renderTextObj = null;
		text == undefined ? "" : text;
		return (
			<TouchableOpacity style={customStyle}
				onPress={() => {
					onPress();
				}}
			>
				<Image style={[styles.image, customStyle]} source={imgSrc} />
				<View style={viewCombineStyle}>
					<Text style={textStyle}>{text}</Text>
				</View>
			</TouchableOpacity >
		);
	}
}

ButtonImage.propTypes = {
	onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	view: {
		position: 'absolute',
		backgroundColor: 'transparent',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},

	image: {
		alignSelf: 'center'
	},
});

export default ButtonImage;