import React from 'react';
import { ImageBackground, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class ButtonImageNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: this.props.normalImage
        }
    }

    changeState = () => {
        this.setState({
            imageSource: this.props.selectImage
        })
    }

    render() {
        return (
            <ImageBackground source={this.state.imageSource} style={styles.background}>
                <Button style = {{flex:1}}
                    title=""
                    onPress={() => {
                        this.changeState();
                        this.props.navigation.openDrawer();
                    }} />
            </ImageBackground >
        )
    }
}

var styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 40,
        height: 40,
    }
})

export default withNavigation(ButtonImageNavigation)
