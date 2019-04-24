import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DepositScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 50 }}>this is deposit screen</Text>
                <Button
                    title="login screen"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '70%',
    },

});