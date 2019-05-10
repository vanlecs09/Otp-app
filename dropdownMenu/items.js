import React, { Component, } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native'
import PropTypes from 'prop-types'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    height: 120,
    width: 198 //TODO: this needs to be dynamic
  },
  container: {
    position: 'absolute',
    borderWidth: 2 / window.scale,
    borderTopColor: 'transparent',
  }
})

export default class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { backgroundColor, items, positionX, positionY, show, onPress, width, height, children, customScrollViewComp, autoHeightItemsList } = this.props;
    console.log(backgroundColor);
    const renderedItems = React.Children.map(items, (item) => {
      return (
        <TouchableWithoutFeedback onPress={() => onPress(item.props.children, item.props.value) }>
          <View>
            {item}
          </View>
        </TouchableWithoutFeedback>
      );
    });

    const ScrollViewComp = customScrollViewComp
      ? customScrollViewComp
      : ScrollView
    return (
      <View style={[styles.container, { top: positionY, left: positionX }, {backgroundColor}]}>
        <ScrollViewComp
          style={{ width: width - 2, height: autoHeightItemsList && items.length < 3 ? 'auto' : height * 1.5 }}
          automaticallyAdjustContentInsets={false}
          bounces={false}>
          {renderedItems}
        </ScrollViewComp>
      </View>
    );
  }
}

Items.propTypes = {
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  show: PropTypes.bool,
  onPress: PropTypes.func,
  autoHeightItemsList: PropTypes.bool
};

Items.defaultProps = {
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: () => {},
  autoHeightItemsList: false,
  backgroundColor: 'white'
};

