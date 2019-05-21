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

  // componentDidMount = () => {
  //   this.props.navigation.addListener('willFocus', this.load)
  // }

  // load = () => {
  //   this.props.resetDeposit();
  // }


  render() {
    const { cardIndex } = this.props;
    console.log("CardTypeSelectionView render");
    // console.log("card index " + cardIndex);
    return (
      <View style={{ width: '100%', height: Utils.moderateScale(140) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ marginLeft: 20 }}>ten tai khoan</Text>
          <Text style={{ marginRight: 20 }}>abc xyz </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 30, justifyContent: 'center' }}>
          <ButtonImage
            customStyle={{ height: Utils.moderateScale(70), width: Utils.moderateScale(96), marginLeft: 5 }}
            onPress={() => { this.props.selectCard(0) }}
            imageSource={require('../../assets/btn_vietel.png')}
            imageSelectSource={require('../../assets/btn_vietel_select.png')}
            isButtonPressed={cardIndex == 0}
          />
          <ButtonImage
            customStyle={{ height: Utils.moderateScale(70), width: Utils.moderateScale(96) }}
            onPress={() => this.props.selectCard(1)}
            imageSource={require('../../assets/btn_mobi.png')}
            imageSelectSource={require('../../assets/btn_mobi_select.png')}
            isButtonPressed={cardIndex == 1}
          />

          <ButtonImage
            customStyle={{ height: Utils.moderateScale(70), width: Utils.moderateScale(96), marginRight: 5 }}
            onPress={() => this.props.selectCard(2)}
            imageSource={require('../../assets/btn_vina.png')}
            imageSelectSource={require('../../assets/btn_vina_select.png')}
            isButtonPressed={cardIndex == 2}
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
    },
    // resetDeposit: () => {
    //   dispatch(AppActions.resetDeposit());
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardTypeSelectionView);
