import React from 'react';
import { FlatList, TextInput, ImageBackground, Image, StyleSheet, View } from 'react-native';
import SlideBarItem from './SideBarItem';
import { Button, Text, Container, List, ListItem, Content, Icon } from "native-base";
import icon_deposit_normal from './res/img_sidebar_icon_deposit_normal.png';
import icon_deposit_select from './res/img_sidebar_icon_deposit_select.png';

const routes = [
    {
        title: "LoginScreen",
        icon : icon_deposit_normal
    }, 
    {
        title: "DepositScreen",
        icon : icon_deposit_select
    },];

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]


        return (
            <ImageBackground source={require('./res/img_sidebar_bg.png')} style={styles.background}>
                <List
                    dataArray={routes}
                    contentContainerStyle={{ marginTop: 120 }}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.title)}
                            >

                                <Image source={data.icon} ></Image>
                                <Text>{data.title}</Text>
                            </ListItem>
                        );
                    }}
                />
            </ImageBackground>
        )
    }
}

var styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});
