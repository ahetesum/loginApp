import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StyleSheet from './styles'

export default class Dashboard extends Component {

    static navigationOptions = {
        header: null,
    }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Welcome in Dashboard </Text>
      </View>
    );
  }
}
