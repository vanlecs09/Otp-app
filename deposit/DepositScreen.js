import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AwesomeAlert from '../popup';

export default class DepositScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopUp: false };
    }


    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    render() {
        const { showAlert } = this.state;
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 50 }}>this is deposit screen</Text>
                <Button
                    title="login screen"
                    // onPress={() => this.props.navigation.navigate('LoginScreen')}
                    onPress={() => {
                        this.showAlert();
                    }}
                />
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Thông báo"
                    titleStyle = {{color : 'rgb(247,165,117)'}}
                    message="Bạn muốn dùng 140.000 xu để đổi thể Viettel 10k ?"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}

                    
                    confirmButtonImgSrc = {require('../assets/btn_confirm.png')}
                    cancelButtonImgSrc = {require('../assets/btn_cancel.png')}
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
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