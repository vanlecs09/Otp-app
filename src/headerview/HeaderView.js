import React from 'react';
import { Image, Text, View } from 'react-native';
import ButtonImageNavigation from '../components/ButtonImageNavigation';
import btnNavNormal from '../../assets/btn_nav_normal.png';
import btnSelect from '../../assets/btn_nav_select.png';

export default class HeaderView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginTop: 15,width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                
                <ButtonImageNavigation normalImage = {btnNavNormal} selectImage = {btnSelect}>
                   
                   </ButtonImageNavigation>
                <Text style={{fontFamily: 'Montserrat_large', alignSelf: 'center', fontSize: 30, color:'#ffd700' }}>
                    {this.props.titleName}
                </Text>
                <Image source={require('./res/icon_otp.png')} style = {{width: 40, height: 40, marginRight: 10}}/>
            </View>

        )
    }
}