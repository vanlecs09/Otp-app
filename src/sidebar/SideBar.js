import React from 'react';
import { ImageBackground, Image, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Content, Icon, Left, Right, Body } from "native-base";
import { connect } from 'react-redux';
import AwesomeAlert from '../popup';
import icon_deposit_normal from './res/img_sidebar_icon_deposit_normal.png';
import icon_deposit_select from './res/img_sidebar_icon_deposit_select.png';

import icon_gift_normal from './res/img_sidebar_icon_gif_normal.png';
import icon_gift_select from './res/img_sidebar_icon_gif_select.png';
import icon_mail_normal from './res/img_sidebar_icon_mail_normal.png';
import icon_mail_select from './res/img_sidebar_icon_mail_select.png';
import icon_history_normal from './res/img_sidebar_icon_history_normal.png';
import icon_history_select from './res/img_sidebar_icon_history_select.png';
import icon_sup_normal from './res/img_sidebar_icon_sup_normal.png';
import icon_sup_select from './res/img_sidebar_icon_sup_select.png';
import icon_mail_notify from './res/img_sidebar_icon_mail_notify.png';

const routes = [
    {
        title: "DepositScreen",
        name: "Nạp thẻ",
        icon: icon_deposit_normal,
        iconSelect: icon_deposit_select,
        callback : () => {

        }
    },
    {
        title: "GiftExchangeScreen",
        name: "Đổi quà",
        icon: icon_gift_normal,
        iconSelect: icon_gift_select,
        callback : () => {

        }
    },
    {
        title: "MailScreen",
        name: "Hộp thư",
        icon: icon_mail_normal,
        iconSelect: icon_mail_select,
        callback : () => {

        }
    },
    {
        title: "HistoryScreen",
        name: "Lịch sử",
        icon: icon_history_normal,
        iconSelect: icon_history_select,
        callback : () => {

        }
    },
    {
        title: "SupportScreen",
        name: "Hỗ trợ",
        icon: icon_sup_normal,
        iconSelect: icon_sup_select,
        callback : () => {

        }
    },];

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            showAlert: false,
        }
    }

    hideAlert = () => {
        this.setState({
            showAlert: false,
        })
    }

    showAlert = () => {
        this.setState({
            showAlert: true,
        })
    }


    navigateTo = (title) => {
        // if(this.isLogged)
        // {
            this.props.navigation.navigate(title)
        // }
        
        // {
            // this.showAlert();
        // }   
    }

    render() {
        const {isLogged} = this.props;
        this.isLogged = isLogged;
        return (
            <ImageBackground source={require('./res/img_sidebar_bg.png')} style={styles.background}>
                <List
                    dataArray={routes}
                    contentContainerStyle={{ marginTop: 150 }}
                    renderRow={data => {
                        return (
                            <ListItem
                                buttonx
                                onPress={() => {this.navigateTo(data.title)}}
                            >
                                <Left style = {{marginLeft: 20}}>
                                    <Image source={data.icon} style={{ width: 40, height: 40 }}></Image>
                                </Left>
                                <Left style = {{marginLeft: 0}}>
                                    <Text>{data.name}</Text>
                                </Left>
                                <Right>
                                <Image source={icon_mail_notify} style={{ width: 20, height: 20 }}></Image>
                                </Right>
                            </ListItem>
                        );
                    }}
                />
                 <AwesomeAlert
                  show={this.state.showAlert}
                  showProgress={false}
                  title="Thông báo"
                  titleStyle={{ color: 'rgb(247,165,117)' }}
                  message={"ban chua loggin"}
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}


                  confirmButtonImgSrc={require('../../assets/btn_confirm.png')}
                  cancelButtonImgSrc={require('../../assets/btn_cancel.png')}
                  onCancelPressed={() => {
                    this.hideAlert();
                  }}
                  onConfirmPressed={() => {
                    this.hideAlert();
                  }}
                />
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        // name
        isLogged: state.login.isLogged,
    //   isLoading: state.login.isLoading,
    //   loginStatus: state.login.loginStatus,
    //   errorMessage: state.login.errorMessage,
    //   showAlert: state.login.showAlert
    }
  }

  export default connect(mapStateToProps)(SideBar);

var styles = StyleSheet.create({

    background: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space_between',

    }
});
