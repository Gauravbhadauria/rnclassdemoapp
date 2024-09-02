import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class ClassComp extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Text>{this.props.name} </Text>
      </View>
    );
  }
}

export default ClassComp;
