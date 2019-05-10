import React, { Component } from 'react';
import ButtonImage from '../components/ButtonImage';
import * as AppActions from '../actions';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import * as Utils from '../Utils';


class CardTypeSelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {cardIndex} = this.props;
    return (
      <View style= {{ width : '100%', height: 110}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ marginLeft: 20 }}>ten tai khoan</Text>
          <Text style={{ marginRight: 20 }}>abc xyz </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 30, justifyContent: 'center' }}>
          <ButtonImage
            customStyle={{ height: 140/Utils.screenScale, width: 192/Utils.screenScale, marginLeft: 5 }}
            text="ĐĂNG NHẬP"
            onPress={() => { this.props.selectCard(1) }}
            imageSource={require('../assets/btn_vietel.png')}
            imageSelectSource={require('../assets/btn_vietel_select.png')}
            isButtonPressed = {cardIndex == 1}
          />
          <ButtonImage
            customStyle={{ height: 140/Utils.screenScale, width: 192/Utils.screenScale }}
            text="QUAY LẠI"
            onPress={() => this.props.selectCard(2)}
            imageSource={require('../assets/btn_mobi.png')}
            imageSelectSource={require('../assets/btn_mobi_select.png')}
            isButtonPressed = {cardIndex == 2}
          />

          <ButtonImage
            customStyle={{ height: 140/Utils.screenScale, width: 192/Utils.screenScale, marginRight: 5 }}
            text="QUAY LẠI"
            onPress={() => this.props.selectCard(3)}
            imageSource={require('../assets/btn_vina.png')}
            imageSelectSource={require('../assets/btn_vina_select.png')}
            isButtonPressed = {cardIndex == 3}
          />
        </View>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    cardIndex: state.deposit.cardIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCard: (cardIndex) => {
      dispatch(AppActions.selectCard(cardIndex));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardTypeSelectionView);
