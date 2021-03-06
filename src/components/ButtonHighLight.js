import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View, Image } from 'react-native';

class ButtonHighLight extends Component {
	render() {
		const { text, onPress, imageSource, customStyle , textStyle} = this.props;
		const { view} = styles;
		const viewCombineStyle = StyleSheet.flatten([view, customStyle]);
		return (
			<TouchableOpacity style={customStyle}
				onPress={() => onPress()}
			>
				<Image style={[styles.image, customStyle]} source={imageSource}/>
				<View style={viewCombineStyle}>
					<Text style={textStyle}>{text}</Text>
				</View>

			</TouchableOpacity>
		);
	}
}

ButtonHighLight.propTypes = {
	text: PropTypes.string.isRequired,
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
	// textStyle: {
	// 	fontSize: 20,
	// 	color: '#ffffff',
	// 	textAlign: 'center',
	// },

	image: {
		alignSelf: 'center'
	},
	buttonStyle: {
	}
});

export default ButtonHighLight;