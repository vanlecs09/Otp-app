import React, { Component } from 'react';
import ButtonImage from '../components/ButtonImage';
import * as AppActions from '../actions';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';


class CardTypeSelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {cardIndex} = this.props;
    return (
      <View style= {{ width : '100%', height: 110}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
          <Text style={{ marginLeft: 20 }}>ten tai khoan</Text>
          <Text style={{ marginRight: 20 }}>abc xyz </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-between' }}>
          <ButtonImage
            customStyle={{ height: 100, width: 100, marginLeft: 10 }}
            text="ĐĂNG NHẬP"
            onPress={() => { this.props.selectCard(1) }}
            imageSource={require('../assets/btn_mobi.png')}
            imageSelectSource={require('../assets/btn_mobi_select.png')}
            isButtonPressed = {cardIndex == 1}
          />
          <ButtonImage
            customStyle={{ height: 100, width: 100 }}
            text="QUAY LẠI"
            onPress={() => this.props.selectCard(2)}
            imageSource={require('../assets/btn_mobi.png')}
            imageSelectSource={require('../assets/btn_mobi_select.png')}
            isButtonPressed = {cardIndex == 2}
          />

          <ButtonImage
            customStyle={{ height: 100, width: 100, marginRight: 10 }}
            text="QUAY LẠI"
            onPress={() => this.props.selectCard(3)}
            imageSource={require('../assets/btn_mobi.png')}
            imageSelectSource={require('../assets/btn_mobi_select.png')}
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
